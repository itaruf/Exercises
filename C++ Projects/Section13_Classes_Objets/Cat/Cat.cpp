#include "Cat.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

int Cat::NumberOfCats{0}; // Initialisation de la variable static NumberOfCats
void DisplayActiveCats();
void DisplayCat(Cat C);

Cat::Cat(const string NewName, const int NewAge, const int NewNum)
    : Name{NewName}, Age{NewAge}, Num{NewNum}
{
    NumberOfCats++;
    DisplayActiveCats();
    cout << "Constructor Called For :" << Name << endl;
}

Cat::Cat(const Cat &source)
    // :Name{source.Name},Age{source.Age}, Num{source.Num} // INITIALISATION PAR LISTE
    : Cat{source.Name, source.Age, source.Num} // INITIALISATION PAR DELEGATION
{
    cout << "Copy made of: " << source.Name << endl;
}

Cat::~Cat()
{
    NumberOfCats--;
    DisplayActiveCats();
    cout << "Destructor Called for " << Name << endl;
}

int Cat::GetNumberOfCats()
{
    return (Cat::NumberOfCats);
}

void DisplayCat(Cat C)
{
    cout << "Displaying a cat: " << endl;
    C.GetName();
    C.GetAge();
    C.GetNum();
    cout << endl;
}

void DisplayActiveCats()
{
    cout << "Active Cats: " << Cat::GetNumberOfCats() << endl;
}

int main()
{
    // Giving all the values
    Cat Skitty;
    Skitty.SetName("Skitty"); // R-Values : incompatible avec des références
    Skitty.SetAge(17);        // R-Values : incompatible avec des références
    Skitty.SetNum(1);

    Skitty.GetName();
    Skitty.GetAge();
    Skitty.GetNum();

    cout << endl;

    Cat Cookie;
    /* 	string CookiesName{"Cookie"};
	int CookiesAge{5};
	Cookie.SetName("CookiesName"); // l-Values : compatible avec des références; conflit entre les deux méthodes
	Cookie.SetAge(CookiesAge);	 // l-Values : compatible avec des références; conflit entre les deux méthodes */
    Cookie.SetName("Cookie");
    Cookie.SetAge(5);
    Cookie.SetNum(2);

    Cookie.GetName();
    Cookie.GetAge();
    Cookie.GetNum();

    cout << endl;

    // Using the default constructor
    Cat Choko;
    Choko.GetName();
    Choko.GetAge();
    Choko.GetNum();

    cout << endl;

    // Using a certain constructor
    Cat *Stormy = new Cat{"Stormy", 2, 5};
    Stormy->GetName();
    Stormy->GetAge();
    Stormy->GetNum();

    cout << endl;

    // Using one specific value and the default values
    Cat Mimi{"Mimi"};
    Mimi.GetName();
    Mimi.GetAge();
    Mimi.GetNum();

    cout << endl;

    //Using the copy constructor

    Cat Moustache{Skitty};

    cout << endl;

    // Displaying A Cat
    /*     DisplayCat(Skitty);
    DisplayCat(Cookie);
    DisplayCat(Choko);
    DisplayCat(*Stormy);
    DisplayCat(Mimi);
    DisplayCat(Moustache); */

    return (0);
}
