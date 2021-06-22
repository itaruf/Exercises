#include <iostream>
#include <vector>
#include <string>
#include "SavingsAccount.cpp"

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

int main()
{
    Account Imane{}; // Stack
    Imane.Deposit(5000);
    Imane.Withdraw(2000);

    cout << endl;

    Account *PImane{nullptr};
    PImane = new Account(); // Heap
    PImane->Deposit(5000);
    PImane->Deposit(2000);

    cout << endl;

    SavingsAccount SImane{};
    SImane.Deposit(500);
    SImane.Withdraw(200);

    cout << endl;

    SavingsAccount SAmal{};
    SAmal.Deposit(350);
    SAmal.Withdraw(100);

    cout << endl;

    cout << SImane;
    cout << SAmal;

    delete PImane;
    return (0);
}