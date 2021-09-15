// Exercice : concevez une classe C++ pour remplacer les new/delete du code suivant
// Implémentez le mouvement pour cette classe et interdisez-en la copie
// Pour rappel, en C++ on peut interdire l'existence d'une fonction (empêchant le compilateur de la générer)
// grâce à "= delete" (`MyObject(const MyObject&) = delete;` par exemple pour le constructeur par copie)

#include <cstdlib> // std::rand
#include <ctime> // std::time
#include <iostream>
#include <string>

class Weapon
{
private:
	std::string m_name;
public:
	// Constructeur par défaut de Weapon
	Weapon(std::string name) :
	m_name(std::move(name))
	{
	}

	Weapon(Weapon&& weapon) = default;

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
	{
		return m_name;
	}
};

class Player
{
	
private:
	Unique m_weapon;
	std::string m_name;
	unsigned int m_health;
public:
	// Constructeur de Player
	Player(std::string name, Unique weapon) :
		m_weapon(weapon),
		m_name(std::move(name)),
		m_health(100)
	{
	}

	// Constructeur par copie de Player (celui invoqué à la copie d'un Player)
	// comme ça n'a pas de sens de copier un Player, on le "delete" (= empêche son appel)
	Player(const Player&) = delete;

	// Constructeur par mouvement de Player
	Player(Player &&) = default; // appelle le constructeur par mouvement de Weapon

	// Destructeur de Player, on n'oublie pas de libérer ce qu'on a alloué dynamiquement !
	~Player()
	{
		//delete m_weapon; // Sera delete par la classe Unique
	}

	// Méthode retournant les points de vie du joueur
	unsigned int GetHealth() const
	{
		return m_health;
	}

	// Méthode retournant l'arme du joueur
	const Weapon& GetWeapon() const
	{
		return *m_weapon.GetWeapon();
	}

	// Méthode retournant le nom du joueur
	const std::string& GetName() const
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

	void UpdateName(const std::string& name)
	{
		m_name = name;
	}
};

class Unique {
public:
	const Weapon *weapon;
	// Constructor
	Unique(Weapon *weapon) : weapon{weapon} // pas de move pour des types primitifs, ici, un pointeur en est un
	{
		std::cout << "Unique Constructor Called" << std::endl;
	}
	// Move constructor
	Unique(Unique &&unique_ptr) : weapon{unique_ptr.weapon} {
		unique_ptr.weapon = nullptr;
	}

	Unique(const Unique &unique_ptr) = delete;

	~Unique() {
		std::cout << "Unique Destructor Called" << std::endl;
		if (weapon) {
			delete weapon;
		}
	}
		Weapon* GetWeapon() const {
		return (weapon);
	}
};

int main()
{
	// Initialisation du générateur aléatoire
	std::srand(std::time(nullptr));

	// Saisie du nom du premier joueur
	std::string playerName1{"a"};

	// Saisie du nom du second joueur
	std::string playerName2{"b"};

	Weapon* marteauDeThor = new Weapon("Marteau de Thor");

	Player player1(std::move(playerName1), marteauDeThor);
	Player player2(std::move(playerName2), Unique(new Weapon("Sceptre de Loki")));

	while (player1.GetHealth() > 0 && player2.GetHealth() > 0)
	{
		// Tour du joueur 1
		{
			const Weapon& weapon = player1.GetWeapon();
			player2.TakeDamage(weapon.GetDamage());

			std::cout << player1.GetName() << " attaque " << player2.GetName() << " avec " << weapon.GetName() << ": " << player2.GetHealth() << std::endl;
		}

		// Tour du joueur 2
		{
			const Weapon& weapon = player2.GetWeapon();
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



/* #include <fstream>

void faitQuelqueChose()
{
	std::ifstream fichier("monSuperFichier.txt");
	if (!fichier.is_open())
		throw std::runtime_error("Message d'erreur");

	std::cout << "Ceci ne sera affiche que si le fichier existe" << std::endl;
}

int main()
{
	try
	{
		std::unique_ptr<int> a = std::make_unique<int>();
		std::unique_ptr<int> b = std::make_unique<int>();
		faitQuelqueChose();
	}
	catch (const std::exception& e)
	{

	}

	std::cout << "Suite du programme" << std::endl;
} */

