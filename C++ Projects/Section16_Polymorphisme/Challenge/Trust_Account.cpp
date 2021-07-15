#include "Trust_Account.h"
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

Trust_Account::Trust_Account(string Name, double Balance, double IntRate) : Savings_Account{Name, Balance, IntRate}, NumWithdrawals{0}
{
}

// Deposit additional $50 bonus when Amount >= $5000
bool Trust_Account::Deposit(double Amount)
{
    if (Amount >= BonusThreshold)
        Amount += BonusAmount;
    return (Savings_Account::Deposit(Amount));
}

// Only allowed 3 withdrawals, each can be up to a maximum of 20% of the Acc's value
bool Trust_Account::Withdraw(double Amount)
{
    if (NumWithdrawals >= MaxWithdrawals || (Amount > Balance * MaxWithdrawalsPercent))
        return false;
    else
    {
        ++NumWithdrawals;
        return (Savings_Account::Withdraw(Amount));
    }
}

void Trust_Account::Print(ostream &Os) const
{
    Os.precision(2);
    Os << fixed;
    Os << "[Trust Account: " << Name << ": " << Balance << ", " << IntRate << "%, withdrawals: " << NumWithdrawals << "]";
}
