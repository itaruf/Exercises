#include "Deep.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

Deep::Deep(int DataToSet)
{
    Data = new int;
    *Data = DataToSet;
}

Deep::Deep(const Deep &Source) : Deep{*Source.Data} // Using Constructor Delegation
{
    // Using normal initialization
    // Data = new int;
    // *Data = *Source.Data;
    cout << "Copy Constructor - Deep Copy" << endl;
}

Deep::~Deep()
{
    delete Data;
    cout << "Destructor freeing Data" << endl;
}

void DisplayDeep(Deep S)
{
    cout << S.GetDataValue() << endl;
}

int main()
{
    Deep Obj{100};
    DisplayDeep(Obj);

    cout << endl;

    Deep Obj2{Obj};
    DisplayDeep(Obj2);
    return (0);
}