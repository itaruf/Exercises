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
	Weapon(const std::string &name) : m_name(name)
	{
		std::cout << "Weapon Constructor Used" << std::endl;
	}

	Weapon(Weapon &&weapon) : m_name{weapon.m_name}
	{
		std::cout << "Weapon Move Constructor Used For " << weapon.GetName() << std::endl;
		weapon.m_name = "";
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
	std::string GetName() const
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
	const Weapon *m_weapon;
	std::string m_name;
	unsigned int m_health;

public:
	// Constructeur de Player
	Player(const std::string &name, const Weapon *weapon) : m_weapon(weapon), m_name(name), m_health(100)
	{
		std::cout << weapon->GetName() << std::endl;
		std::cout << "Player Constructor Used" << std::endl;
	}

	// Constructeur par copie de Player (celui invoqué à la copie d'un Player)
	// comme ça n'a pas de sens de copier un Player, on le "delete" (= empêche son appel)
	Player(const Player &) = delete;

	// Constructeur par mouvement de Player
	Player(Player &&player) : m_weapon{player.GetWeapon()}, m_name{player.GetName()}, m_health{GetHealth()}
	{
		std::cout << "Player Movement Constructor Used For " << player.m_name << std::endl;

		player.m_weapon = nullptr;
		player.m_name = "";
		player.m_health = 0;
	}

	// Destructeur de Player, on n'oublie pas de libérer ce qu'on a alloué dynamiquement !
	~Player()
	{
		std::cout << "Player Destructor Used" << std::endl;
		delete m_weapon;
	}

	// Méthode retournant les points de vie du joueur
	unsigned int GetHealth() const
	{
		return m_health;
	}

	// Méthode retournant l'arme du joueur
	const Weapon *GetWeapon() const
	{
		return m_weapon;
	}

	// Méthode retournant le nom du joueur
	std::string GetName() const
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
	std::string playerName1{"a"};
	/* td::cout << "Entrez le nom de votre premier joueur:" << std::endl;
	std::cin >> playerName1; */

	// Saisie du nom du second joueur
	std::string playerName2{"b"};
	/* std::cout << "Entrez le nom de votre second joueur:" << std::endl;
	std::cin >> playerName2; */

	Player player1(playerName1, new Weapon{"Marteau de Thor"}); // move constructor called
	Player player2(playerName2, new Weapon{"Sceptre de Loki"}); // move constructor called

	/* Player player3("player3", new Weapon{"M"});
	Player player4(std::move(player3));

	Weapon w1{"weapon"};
	Weapon w2{std::move(w1)}; */

	while (player1.GetHealth() > 0 && player2.GetHealth() > 0)
	{
		// Tour du joueur 1
		{
			const Weapon *weapon{std::move(player1.GetWeapon())};
			player2.TakeDamage(weapon->GetDamage());

			std::cout << player1.GetName() << " attaque " << player2.GetName() << " avec " << weapon->GetName() << ": " << player2.GetHealth() << std::endl;
		}

		// Tour du joueur 2
		{
			const Weapon *weapon{std::move(player2.GetWeapon())};
			player1.TakeDamage(weapon->GetDamage());

			std::cout << player2.GetName() << " attaque " << player1.GetName() << " avec " << weapon->GetName() << ": " << player1.GetHealth() << std::endl;
		}
	}

	// Affichage du gagnant
	if (player1.GetHealth() > 0)
		std::cout << player1.GetName() << " gagne!" << std::endl;
	else if (player2.GetHealth() > 0)
		std::cout << player2.GetName() << " gagne!" << std::endl;
}