#include "Mystring.cpp"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::istream;
using std::ostream;
using std::string;
using std::vector;

int main()
{
    Mystring Imane{"Imane"};
    Mystring Amal{"Amal"};
    Mystring Cookie{"Cookie"};

    Imane.Display();
    Amal.Display();

    cout << "Using >: " << operator>(Imane, Amal) << endl;
    cout << "Using <: " << operator<(Imane, Amal) << endl;
    cout << "Using >=: " << operator>=(Imane, Amal) << endl;
    cout << "Using <= " << operator<=(Imane, Amal) << endl;
    cout << "Using !=: " << operator!=(Imane, Amal) << endl;
    cout << "Using ==: " << operator==(Imane, Amal) << endl;
    cout << "Using (Post) --: " << operator--(Imane) << endl;
    cout << "Using (Pre) --: " << &operator--(Imane) << endl;
    cout << "Using (Post) ++: " << operator++(Imane) << endl;
    cout << "Using (Pre) ++: " << &operator--(Imane) << endl;

    Imane = operator*(Imane, 4);
    Amal = operator*(Imane, 3);

    cout << endl;

    Imane.Display();
    Amal.Display();

    cout << endl;

    return (0);
}