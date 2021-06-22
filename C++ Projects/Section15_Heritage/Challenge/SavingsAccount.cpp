#include "SavingsAccount.h"
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

SavingsAccount::SavingsAccount(string Name, double Balance, double IntRate) : Account{Name, Balance}, IntRate{IntRate}
{
    cout << "SavingsAccounts Overloaded Constructor Called" << endl;
}

bool SavingsAccount::Deposit(double Amount)
{
    Amount += Amount * (IntRate / 100);
    return (Account::Deposit(Amount));
}

ostream &operator<<(ostream &Out, const SavingsAccount &Account)
{
    Out << "[SavingsAccount: " << Account.Name << ": " << Account.Balance << ", " << Account.IntRate << "%]";
    return (Out);
}
