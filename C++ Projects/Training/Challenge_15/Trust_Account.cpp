#include "Trust_Account.h"

static int withdrawal_counts{0};

Trust_Account::Trust_Account(std::string name, double balance, double int_rate) : Savings_Account{name, balance, int_rate}
{
}
bool Trust_Account::deposit(double amount)
{
    if (amount >= 5000)
    {
        amount += 50;
    }
    return (Savings_Account::deposit(amount));
}

bool Trust_Account::withdraw(double amount)
{
    if (withdrawal_counts >= 3 || amount > balance * 0.2)
    {
        return (false);
    }
    else
    {
        withdrawal_counts++;
        return (Account::withdraw(amount));
    }
}
