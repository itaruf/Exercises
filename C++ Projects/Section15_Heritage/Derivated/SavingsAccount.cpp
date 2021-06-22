#include "SavingsAccount.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

SavingsAccount::SavingsAccount(string Name, double Balance, double IntRate)
{
    cout << "Savings Account Constructor Called" << endl;
}

SavingsAccount::SavingsAccount(double Balance, double IntRate) : Account{Balance}, IntRate{IntRate}
{
    cout << "Savings Account Overloaded Constructor Called" << endl;
}

SavingsAccount::~SavingsAccount()
{
    cout << "Savings Account Destructor Called" << endl;
}

bool SavingsAccount::Deposit(double Amount)
{
    Amount += (Amount * IntRate / 100);
    Account::Deposit(Amount);
    cout << "(In Savings Account) Account Deposit Called With: " << Amount << endl;
    return (true);
}
ostream &operator<<(ostream &Out, const SavingsAccount &RHS)
{
    Out << "Savings Account of " << RHS.Name
        << "with Balance: " << RHS.Balance
        << " Interest Rate : " << RHS.IntRate << " %" << endl;
    return (Out);
}
