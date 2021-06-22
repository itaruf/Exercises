#include "Shallow.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

Shallow::Shallow(int DataToSet)
{
    Data = new int;
    *Data = DataToSet;
}

Shallow::Shallow(const Shallow &source) : Data{source.Data}
{
    cout << "Copy Constructor - Shallow Copy" << endl;
}

Shallow::~Shallow()
{
    delete Data;
    cout << "Destructor freeing Data" << endl;
}

void DisplayShallow(Shallow S)
// Shallow Copy : S pointe vers le même espace mémoire alloué sur le tas que le pointeur copié
// Il aurait fallu que la copie définisse son propre espace mémoire alloué sur le tas différent du pointeur copité
{
    cout << S.GetDataValue() << endl;
}
int main()
{
    Shallow Objet{100};
    // Le pointeur Data pointe vers l'espace mémoire alloué sur le tas qui contient la r-value 100.
    DisplayShallow(Objet);

    Shallow Objet2{Objet};
    Objet2.SetDataValue({1000});
    DisplayShallow(Objet);
}
