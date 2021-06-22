#ifndef _SAVINGSACCOUNT_H_
#define _SAVINGSACCOUNT_H_
#include "Account.cpp"
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

class SavingsAccount : public Account
{
    friend ostream &operator<<(ostream &Out, const SavingsAccount &Account);

private:
    static constexpr const char *DefName = "Unnamed Savings Account";
    static constexpr double DefBalance = 0.0;
    static constexpr double DefIntRate = 0.0;

protected:
    double IntRate;

public:
    SavingsAccount(string Name = DefName, double Balance = DefBalance, double IntRate = DefIntRate);
    // Modified Deposit Method
    bool Deposit(double Amount);
    // Inherits the Account::withdraw methods
};

#endif // _SAVINGS_ACCOUNT_H_
