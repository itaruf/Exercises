#include "Mystring.cpp"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

int main()
{

    Mystring Hello{"Hello"};
    Mystring NewHello;
    /*Copy Assignment Operator*/
    NewHello = Hello;
    Hello.Display();
    NewHello.Display();
    cout << endl;

    /*Move Assignment Operator*/
    Mystring Greet{"Salut"};
    Greet.Display();
    Greet = Mystring{"Hola"};
    Greet.Display();
    cout << endl;

    Mystring Empty{};
    Mystring Imane{"IMANE"};
    Mystring ImaneBis{"imane"};
    Mystring Amal{"Amal"};
    Mystring Stooge{Imane};
    Mystring TwoNames{Imane.operator+(Amal)};

    cout << endl;

    Empty.Display();
    Imane.Display();
    Amal.Display();
    Stooge.Display();
    TwoNames.Display();

    cout << endl;

    /*Using overloaded operator*/
    Imane = Imane.operator-();
    Imane.Display();

    cout << endl;

    Mystring TwoCats{Imane.operator+(Amal)};
    TwoCats.Display();

    cout << endl;

    cout << Imane.operator==(Amal) << endl;                 // 0: false
    cout << Imane.operator==(ImaneBis) << endl;             // 1: true
    cout << Imane.operator-().operator==(ImaneBis) << endl; // 1: true

    /*Using Global BINARY Functions (Non-members but friends)*/
    //TwoNames = "IMANE" + Imane;
    //TwoNames.Display();
    Amal = operator-(Amal);
    Amal.Display();

    Mystring Stooges{"Amal" + Amal};
    Stooges.Display();
    cout << operator==(Amal, Amal) << endl;
    cout << operator==(Imane, Amal) << endl;

    cout << endl;

    /*Using Global IOSTREAM Functions (Non-members but friends)*/

    cout << Imane << endl;
    cout << Amal << endl;

    cout << endl;

    Mystring Name1{}, Name2{}, Name3{};
    cout << "Enter the first name: ";
    cin >> Name1;
    cout << "Enter the second name: ";
    cin >> Name2;
    cout << "Enter the third name: ";
    cin >> Name3;

    cout << "The 3 names are: " << Name1 << " " << Name2 << " " << Name3 << endl;
    return (0);
}
