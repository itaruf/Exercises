// Exercice : À partir du corrigé de l'exercice1 (ou de votre rendu de l'exercice2), transformez ce projet d'un seul fichier
// en projet à plusieurs fichiers.
// Chaque classe doit être implémentée dans un .hpp et dans un .cpp, le .hpp déclarant la classe et ses méthodes et le .cpp l'implémentant
// Attention aux #includes !
// Exemple :

#include "Player.h"
#include "Weapon.h"
#include "WeaponPtr.h"

int main()
{
	// Initialisation du générateur aléatoire
	std::srand(std::time(nullptr));
	
	// Saisie du nom du premier joueur
	std::string playerName1;
	std::cout << "Entrez le nom de votre premier joueur:" << std::endl;
	std::cin >> playerName1;

	// Saisie du nom du second joueur
	std::string playerName2;
	std::cout << "Entrez le nom de votre second joueur:" << std::endl;
	std::cin >> playerName2;

	Weapon *marteauDeThor = new Weapon("Marteau de Thor");

	Player player1(std::move(playerName1), marteauDeThor);
	Player player2(std::move(playerName2), WeaponPtr(new Weapon("Sceptre de Loki")));

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