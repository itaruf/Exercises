#include <iostream>

using std::cin;
using std::cout;
using std::endl;

void FavoriteUserNumber()
{
    /* cout << "Hello ! Enter your favorite number between 1 and 100: ";
    int numberChosen;
    cin >> numberChosen;
    cout << numberChosen; */

    cout << "Enter 2 numbers separated with a space: ";
    int FirstNumber{0};
    int SecondNumber{0};
    cin >> FirstNumber >> SecondNumber;
    cout << "The 2 numbers entered are: " << FirstNumber << " and " << SecondNumber;
}

void SayHi()
{
    char UserName[20];
    cout << "Enter your name: ";
    cin >> UserName;
    cout << "Hello " << UserName;
}

void LargeNumber()
{
    long double largeAmount{2.7e120};
    cout << sizeof(largeAmount) << endl;
    cout << largeAmount;
}

int main()
{
    //FavoriteUserNumber();
    //SayHi();
    LargeNumber();

    return (0);
}