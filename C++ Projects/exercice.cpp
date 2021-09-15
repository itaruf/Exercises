// Exercice : faites en sorte de rendre ce code optimal du point de vue des copies/mouvements,
// plus aucune copie inutile ne doit rester

// Exercice bis : implémenter le constructeur de mouvement pour la classe Player
#include <cstdlib> // std::rand
#include <ctime>   // std::time
#include <iostream>
#include <string>

class Weapon
{
private:
	std::string m_name;

public:
	// Constructeur par défaut de Weapon
	Weapon(std::string name) : m_name(std::move(name))
	{
		std::cout << "Weapon Constructor Used" << std::endl;
	}

	Weapon(Weapon &&weapon) : m_name{std::move(weapon.m_name)}
	{
		std::cout << "Weapon Move Constructor Used For " << weapon.GetName() << std::endl;
		//weapon.m_name = "";
	}

	// Méthode récupérant les dégâts
	unsigned int GetDamage() const
	{
		// Note, en C++ moderne on utilisera le header <random> pour générer
		// les nombres aléatoires, std::rand() est une vieillerie pleine de défauts.
		// Mais une vieillerie plus simple à comprendre ^_^
		return std::rand() % 31 + 20; //< Génère un nombre entre 20 et 50
	}

	// Méthode pour récupérer le nom de l'arme
	const std::string& GetName() const
	// on change 'std::string GetName() const' en 'const std::string &GetName() const' pour renvoyer une référence constante
	{
		return m_name;
	}
	~Weapon()
	{
		std::cout << "Weapon Destructor Used" << std::endl;
	}
};

class Player
{

private:
	const Weapon m_weapon;
	std::string m_name;
	unsigned int m_health;

public:
	// Constructeur de Player
	Player(std::string name, Weapon weapon) : m_name(std::move(name)), m_weapon(std::move(weapon)), m_health(100)
	{
		// std::string name est un objet temporaire passé par valeur. Cet objet temporaire transformé en r-value reference avant d'être passé en paramètre
		// le mouvement ne s'applique pas aux types non-primitif tels qu'un pointeur ou un int donc faire std::move(100)
		std::cout << "Player Constructor Used" << std::endl;
	}
	// Constructeur par copie de Player (celui invoqué à la copie d'un Player)
	// comme ça n'a pas de sens de copier un Player, on le "delete" (= empêche son appel)
	Player(const Player &) = delete;

	// Constructeur par mouvement de Player
	/* Player(Player &&player) noexcept : m_weapon{player.GetWeapon()}, m_name{player.GetName()}, m_health{GetHealth()} 
	{
		std::cout << "Player Movement Constructor Used For " << player.m_name << std::endl;
	} */

	// Destructeur de Player, on n'oublie pas de libérer ce qu'on a alloué dynamiquement !
	~Player()
	{
		std::cout << "Player Destructor Used" << std::endl;
	}

	// Méthode retournant les points de vie du joueur
	unsigned int GetHealth() const
	{
		return m_health; // renvoyer une copie d'un int ne coûte rien
	}

	// Méthode retournant l'arme du joueur
	const Weapon &GetWeapon() const
	{
		return m_weapon;
	}

	// Méthode retournant le nom du joueur
	const std::string &GetName() const // on change 'std::string GetName() const' en 'const std::string &GetName() const' pour renvoyer une référence constante
	// le const après l'en-tête de la fonction indique que les champs membres ne sont pas modifiables dans son bloc d'instruction
	{
		return m_name;
	}

	void TakeDamage(const unsigned int &damage)
	{
		if (damage >= m_health)
			m_health = 0;
		else
			m_health -= damage;
	}

	void UpdateName(const std::string &name)
	{
		m_name = std::move(name);
	}
};

int main()
{
	// Initialisation du générateur aléatoire
	std::srand(std::time(nullptr));

	// Saisie du nom du premier joueur
	std::string playerName1;
	std::cout << "Entrez le nom de votre premier joueur:" << std::endl;
	std::getline(std::cin, playerName1);

	// Saisie du nom du second joueur
	std::string playerName2;
	std::cout << "Entrez le nom de votre second joueur:" << std::endl;
	std::getline(std::cin, playerName2);

	// std::move() lorsqu'on cherche à initialiser avec un type non-primitif (ex: string, object, ...)

	std::string playerName3{"c"};

	Weapon marteauDeThor("Marteau de Thor");
	Weapon sceptreDeLoki("Sceptre de Loki");
	
	Player player1(std::move(playerName1), std::move(marteauDeThor)); 
	Player player2(std::move(playerName2), std::move(sceptreDeLoki));

	Player player3(playerName3, std::move(marteauDeThor));
	//Player player4(std::move(player3));

	/* Weapon w1{"weapon"};
	Weapon w2{std::move(w1)}; */

	while (player1.GetHealth() > 0 && player2.GetHealth() > 0)
	{
		// Tour du joueur 1
		{
			const Weapon &weapon{player1.GetWeapon()};
			player2.TakeDamage(weapon.GetDamage());

			//std::cout << player1.GetName() << " attaque " << player2.GetName() << " avec " << weapon->GetName() << ": " << player2.GetHealth() << std::endl;
			// GetName() renvoit un std::string qui va générer une copie.
			std::cout << player1.GetName() << " attaque " << player2.GetName() << " avec " << weapon.GetName() << ": " << player2.GetHealth() << std::endl;
		}

		// Tour du joueur 2
		{
			const Weapon &weapon{player2.GetWeapon()};
			player1.TakeDamage(weapon.GetDamage());

			std::cout << player2.GetName() << " attaque " << player1.GetName() << " avec " << weapon.GetName() << ": " << player1.GetHealth() << std::endl;
		}
	}

	// Affichage du gagnant
	if (player1.GetHealth() > 0)
		std::cout << player1.GetName() << " gagne!" << std::endl;
	else if (player2.GetHealth() > 0)
		std::cout << player2.GetName() << " gagne!" << std::endl;
}