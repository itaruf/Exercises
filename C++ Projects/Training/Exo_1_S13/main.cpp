#include <iostream>
#include <algorithm>
#include "Dog.cpp"

using namespace std;

Dog test_dog()
{
    Dog spot{"Spot", 5};
    return (spot);
}

int main()
{
    Dog spot{test_dog()};
    Dog cookie{"Spot", 10};

    cout << spot.name << endl;
    cout << spot << endl;

    if (cookie.age < spot.age)
    {
        cout << cookie << endl;
    }
    else
    {
        cout << spot << endl;
    }
}