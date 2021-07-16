#ifndef _SAVINGS_ACCOUNT_H_
#define _SAVINGS_ACCOUNT_H_

#pragma once

#include "Account.h"
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

class Savings_Account : public Account
{
private:
    static constexpr const char *DefName = "Unnamed Savings Account";
    static constexpr double DefBalance = 0.0;
    static constexpr double DefIntRate = 0.0;

protected:
    double IntRate;

public:
    Savings_Account(string Name = DefName, double balance = DefBalance, double IntRate = DefIntRate);
    virtual bool Deposit(double Amount) override;
    virtual bool Withdraw(double Amount) override;
    virtual void Print(ostream &Os) const override;
    virtual ~Savings_Account() = default;
};

#endif // _SAVINGS_ACCOUNT_H_
