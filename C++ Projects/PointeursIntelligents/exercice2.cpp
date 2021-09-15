// Exercice : Modifiez la classe WeaponPtr pour la passer d'un pointeur intelligent seul propriétaire à
// un pointeur intelligent à propriétaires multiples (autorisant la copie).
// Utilisez un entier pour compter le nombre de propriétaires, incrémentez-le à la copie, décrémentez-le à la destruction.
// Quand ce compteur arrive à zéro, la ressource doit être libérée.
// Implémentez le mouvement pour cette classe également (ne change pas le nombre de propriétaires)
// L'objectif est qu'à terme, on puisse mettre la même arme sur les deux personnages :
/*
	WeaponPtr marteauDeThor(new Weapon("Marteau de Thor")); //< une référence

	Player player1(std::move(playerName1), marteauDeThor); //< deux référence
	Player player2(std::move(playerName2), marteauDeThor); //< trois références

	marteauDeThor.reset(); //< abandon de la propriété: retour à deux références
*/

#include <cstdlib> // std::rand
#include <ctime>   // std::time
#include <iostream>
#include <string>

static int number_of_ownership{0};

class Weapon
{

private:
	std::string m_name;

public:
	// Constructeur par défaut de Weapon
	Weapon(std::string name) : m_name(std::move(name))
	{
		std::cout << " Weapon (name) Constructor Called." << std::endl;
	}

	Weapon(Weapon &&weapon) : m_name(std::move(weapon.m_name))
	{
		std::cout << "Weapon Constructor Called." << std::endl;
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
	const std::string &
	GetName() const
	{
		return m_name;
	}
	~Weapon()
	{
		std::cout << "Weapon Destructor Constructor Called." << std::endl;
	}
};

class WeaponPtr
{

private:
	Weapon *m_weapon;

public:
	WeaponPtr(Weapon *weapon) : m_weapon(weapon)
	{
		std::cout << "WeaponPtr Constructor Called." << std::endl;
		number_of_ownership++;
	}

	WeaponPtr(WeaponPtr &&weapon)
	{
		std::cout << "WeaponPtr Movement Constructor Called." << std::endl;
		m_weapon = weapon.m_weapon;
		weapon.m_weapon = nullptr;
	}

	~WeaponPtr()
	{
		if (m_weapon)
		{
			std::cout << "WeaponPtr Destructor Constructor Called." << std::endl;
			number_of_ownership--;
			std::cout << number_of_ownership << std::endl;
			delete m_weapon;
		}
	}

	Weapon *GetPointer() const
	{
		return m_weapon;
	}

	std::string GetName() const
	{
		return m_weapon->GetName();
	}
};

class Player
{
public:
	// Constructeur de Player
	Player(std::string name, WeaponPtr weapon) : m_weapon(std::move(weapon)),
												 m_name(std::move(name)),
												 m_health(100)
	{
	}

	// Constructeur par copie de Player (celui invoqué à la copie d'un Player)
	// comme ça n'a pas de sens de copier un Player, on le "delete" (= empêche son appel)
	Player(const Player &) = delete;

	// Constructeur par mouvement de Player
	Player(Player &&) = default;

	// Destructeur de Player, on n'oublie pas de libérer ce qu'on a alloué dynamiquement !
	~Player()
	{
	}

	// Méthode retournant les points de vie du joueur
	unsigned int GetHealth() const
	{
		return m_health;
	}

	// Méthode retournant l'arme du joueur
	const Weapon &GetWeapon() const
	{
		return *m_weapon.GetPointer();
	}

	// Méthode retournant le nom du joueur
	const std::string &GetName() const
	{
		return m_name;
	}

	void TakeDamage(unsigned int damage)
	{
		if (damage >= m_health)
			m_health = 0;
		else
			m_health -= damage;
	}

	void UpdateName(const std::string &name)
	{
		m_name = name;
	}

private:
	WeaponPtr m_weapon;
	std::string m_name;
	unsigned int m_health;
};

int main()
{
	// Initialisation du générateur aléatoire
	std::srand(std::time(nullptr));

	// Saisie du nom du premier joueur
	std::string playerName1{"a"};
	/* std::cout << "Entrez le nom de votre premier joueur:" << std::endl;
	std::cin >> playerName1; */

	// Saisie du nom du second joueur
	std::string playerName2{"b"};
	/* std::cout << "Entrez le nom de votre second joueur:" << std::endl;
	std::cin >> playerName2; */

	Weapon marteauDeThor(new Weapon("Marteau de Thor")); //< une référence
	std::cout << number_of_ownership << std::endl;

	/* Player player1(std::move(playerName1), marteauDeThor);
	Player player2(std::move(playerName2), WeaponPtr(new Weapon("Sceptre de Loki"))); */

	Player player1(std::move(playerName1), marteauDeThor); //< deux référence
	std::cout << number_of_ownership << std::endl;

	Player player2(std::move(playerName2), marteauDeThor); //< trois références
	std::cout << number_of_ownership << std::endl;

	//marteauDeThor.reset();

	while (player1.GetHealth() > 0 && player2.GetHealth() > 0)
	{
		// Tour du joueur 1
		{
			const Weapon &weapon = player1.GetWeapon();
			player2.TakeDamage(weapon.GetDamage());

			std::cout << player1.GetName() << " attaque " << player2.GetName() << " avec " << weapon.GetName() << ": " << player2.GetHealth() << std::endl;
		}

		// Tour du joueur 2
		{
			const Weapon &weapon = player2.GetWeapon();
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