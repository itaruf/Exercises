#include "Savings_Account.h"

#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::fixed;
using std::getline;
using std::istream;
using std::ostream;
using std::string;
using std::vector;

Savings_Account::Savings_Account(string Name, double Balance, double IntRate) : Account{Name, Balance}, IntRate(IntRate)
{
}

bool Savings_Account::Deposit(double Amount)
{
    cout << "Savings Deposit" << endl;
    Amount += Amount * (IntRate / 100);
    return (Account::Deposit(Amount));
}

bool Savings_Account::Withdraw(double Amount)
{
    cout << "Savings Withdraw" << endl;
    if (Balance <= 0)
    {
        cout << "Can't withdraw" << endl;
        return (false);
    }
    Balance -= Amount;
    return (true);
}

void Savings_Account::Print(ostream &Os) const
{
    Os.precision(2);
    Os << fixed;
    Os << "[Savings_Account: " << Name << ": " << Balance << ", " << IntRate << "]";
}
