#include "Move.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

Move::Move()
{
    cout << "Default Constructor Called." << endl;
}

Move::Move(const int DataSet)
{
    Data = new int;
    *Data = DataSet;
    cout << "Constructor for: " << DataSet << endl;
}

Move::Move(const Move &Source) : Move{*Source.Data}
{
    cout << "Copy Constructor Called for: " << *Source.Data << endl;
}

Move::Move(Move &&Source) noexcept : Data{Source.Data}
{
    Source.Data = nullptr;
    cout << "Move Constructor Called for: " << *Data << endl;
}

Move::~Move()
{
    if (Data != nullptr)
    {
        cout << "Destructor: Freeing Data for: " << *Data << endl;
    }
    else
    {
        cout << "Destructor: Freeing Data for: nullptr" << endl;
    }
    delete Data;
}

int main()
{
    vector<Move> vec{Move{10}};
    cout << endl;
    vec.push_back(Move{20});
    cout << endl;
    vec.push_back(Move{30});
    cout << endl;
    return (0);
}