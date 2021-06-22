#include "Dog.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

/* void DisplayInfo(const int &InfoToDisplay)
{
    cout << InfoToDisplay << endl;
}

void DisplayInfo(const string &InfoToDisplay)
{
    cout << InfoToDisplay << endl;
}
 */

const void Dog::Display(const int &InfoToDisplay)
{
    cout << InfoToDisplay << endl;
}

const void Dog::Display(const string &InfoToDisplay)
{
    cout << InfoToDisplay << endl;
}

const string Dog::GetName(const string &Name)
{
    cout << Name << endl;
    return (Name);
}

void Dog::SetName(string &OldName, const string &Name)
{
    cout << "Old Name \"" << OldName << "\" changed to \"" << Name << "\"" << endl;
    OldName = Name;
}

const int Dog::GetAge(const int &Age)
{
    cout << Age << endl;
    return (Age);
}

void Dog::SetAge(int &OldAge, const int &Age)
{
    cout << Age << endl;
    OldAge = Age;
}

const int Dog::GetHumanYears(const int &Age)
{
    return (Age * 7);
}

const string Dog::Speak()
{
    return ("Woof");
}

int main()
{
    Dog Doggy; // On crée une nouvelle instance
    Doggy.Name = "Doggy";
    Doggy.Age = 5;

    /*     DisplayInfo(Doggy.Name);
    DisplayInfo(Doggy.Age); */

    cout << endl;

    Doggy.Display(Doggy.Name);
    Doggy.Display(Doggy.Age);

    cout << endl;

    Doggy.GetName(Doggy.Name);
    Doggy.GetAge(Doggy.Age);
    Doggy.SetName(Doggy.Name, "New Doggy");
    cout << Doggy.GetHumanYears(Doggy.Age) << endl;
    cout << Doggy.Speak() << endl;
    /*     Doggy.Display(Doggy.Name);
    Doggy.Display(Doggy.Age); */

    return (0);
}