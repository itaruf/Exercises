#include "Money.cpp"

int main()
{
    Money Imane{150, 0};
    Money Amal{100, 5000};
    Money Cookie = {258, 590};
    Money Skitty{Cookie};

    cout << endl;

    Imane.Display();
    Amal.Display();
    Cookie.Display();
    Skitty.Display();

    cout << endl;

    cout << Imane.operator==(Amal) << endl;
    cout << Imane.operator!=(Amal) << endl;

    cout << endl;

    /*Using a non-member friend function*/
    Money Double{Imane + Imane};              // Une des deux syntaxes possibles
    Money Double2{operator+(Cookie, Skitty)}; // L'autre syntaxe possible

    cout << endl;

    cout << Double.GetTotal() << endl;
    cout << Double2.GetTotal() << endl;

    cout << endl;

    /*Using a non-member friend function*/

    cout << Imane << endl;

    return (0);
}