#include "Checking_Account.h"

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

Checking_Account::Checking_Account(string Name, double Balance) : Account{Name, Balance}
{
}

bool Checking_Account::Withdraw(double Amount)
{
    Amount += PerCheckFee;
    return (Account::Withdraw(Amount));
}

bool Checking_Account::Deposit(double Amount)
{
    return (Account::Deposit(Amount));
}

void Checking_Account::Print(ostream &Os) const
{
    Os.precision(2);
    Os << fixed;
    Os << "[Checking Account: " << Name << ": " << Balance << "]";
}