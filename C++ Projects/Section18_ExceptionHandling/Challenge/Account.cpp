#include "Account.h"

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

Account::Account(string Name, double Balance) : Name{Name}, Balance{Balance}
{
    if (Balance < 0)
    {
        throw IllegalBalanceException{};
    }
}

bool Account::Deposit(double Amount)
{
    if (Amount < 0)
        return (false);
    else
    {
        Balance += Amount;
        return (true);
    }
}

bool Account::Withdraw(double Amount)
{
    if (Balance - Amount >= 0)
    {
        Balance -= Amount;
        return (true);
    }
    else
        throw InsufficentFundsException{};
}

void Account::Print(ostream &Os) const
{
    Os.precision(2);
    Os << fixed;
    Os << "[Account: " << Name << ": " << Balance << "]";
}
