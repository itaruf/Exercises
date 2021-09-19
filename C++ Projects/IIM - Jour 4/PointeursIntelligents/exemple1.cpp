// Exemple expliquant les pointeurs intelligents
// Par Jérôme Leclercq pour l'IIM - 2021

#include <memory>
#include <iostream>

class Objet
{
private:
	static constexpr const int def_num{0};
	int num;

public:
	Objet() = default;
	Objet(const int &num) : num{num} {
	}
	//Objet(std::unique_ptr<Objet> obj) : num{obj->get_num()} {}
	int get_num()
	{
		return (num);
	}
};

bool OperationsIntermediaires(Objet a, Objet b)
{
	std::cout << "OperationsIntermediares" << std::endl;
	std::cout << "a: " << a.get_num() << std::endl;
	std::cout << "b: " << b.get_num() << std::endl;
	return (true);
}

bool AutreOperation(Objet a, Objet b, Objet c)
{
	std::cout << "AutreOperation" << std::endl;
	std::cout << "a: " << a.get_num() << std::endl;
	std::cout << "b: " << b.get_num() << std::endl;
	std::cout << "c: " << c.get_num() << std::endl;
	return (true);
}

bool test_sans_pointeur_intelligent()
{
	// Nous allons ici deux objets que nous gérons manuellement, nous sommes donc responsables de leur mémoire
	Objet *a = new Objet;
	Objet *b = new Objet;

	// Si nous sortons plus tôt d'une fonction (par exemple en cas d'erreur), nous ne devons pas oublier de libérer les ressources
	if (!OperationsIntermediaires(*a, *b))
	{
		// Libération avant le retour
		delete[] b;
		delete[] a;

		return false;
	}

	Objet *c = new Objet;

	if (!AutreOperation(*a, *b, *c))
	{
		// Libération avant le retour
		delete[] c;
		delete[] a;
		// On ne remarque pas du premier coup d'oeil qu'un delete est manquant ici, les erreurs sont fréquentes
		// et peuvent amener à des leaks

		return false;
	}

	// Libération avant le retour

	delete[] c;
	delete[] b;
	delete[] a;

	return true;
}

bool test_avec_pointeur_intelligent()
{
	// À contrario en C++ on peut exploiter le fait que le destructeur d'un objet sera toujours appelé en sortie de fonction
	// et ce, peu importe l'endroit (ou la façon) dont on en sort.
	// Pour ce faire, on lie nos objets dynamiques à des variables dans le scope qui, dans leur destructeur, libérerons nos objets dynamiques

	std::unique_ptr<Objet> a = std::make_unique<Objet>(3);
	std::unique_ptr<Objet> b = std::make_unique<Objet>(5);

	/* std::shared_ptr<Objet> d = std::make_shared<Objet>(10);
	std::shared_ptr<Objet> e = d;

	std::cout << e->get_num() << std::endl; */

	if (!OperationsIntermediaires(*a, *b))
	{
		// La libération est automatique à la sortie de la fonction
		return false;
	}

	std::unique_ptr<Objet> c = std::make_unique<Objet>(10);

	if (!AutreOperation(*a, *b, *c))
	{
		// La libération est automatique à la sortie de la fonction
		return false;
	}

	// La libération est automatique à la sortie de la fonction
	return true;
}

int main()
{
	/* std::cout << "test_sans_pointeur_intelligent"
			  << std::endl
			  << std::endl;
	test_sans_pointeur_intelligent(); */

	std::cout << "test_avec_pointeur_intelligent"
			  << std::endl
			  << std::endl;
	test_avec_pointeur_intelligent();
}
// On voit donc que la fonction utilisant des pointeurs intelligents est plus courte, plus facile à maintenir et en plus de ça gère des cas que nous
// n'avions pas prévus initialement (par exemple: que se passe-t-il dans test_sans_pointeur_intelligent si l'une des fonctions lance une exception ?)

// Article détaillant un peu plus la gestion de la mémoire :
// https://sirlynixvanfrietjes.be/2018/05/23/c-moderne-la-gestion-de-la-memoire/
