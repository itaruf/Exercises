#include "Checking_Account.h"

Checking_Account::Checking_Account(std::string name, double balance) : Account{name, balance}
{
}

bool Checking_Account::withdraw(double amount)
{
    if (this->balance < amount + fee)
    {
        return (false);
    }
    else
    {
        return (Account::withdraw(amount - fee));
    }
}