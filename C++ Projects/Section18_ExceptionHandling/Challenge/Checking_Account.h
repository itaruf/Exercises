#ifndef _CHECKING_ACCOUNT_H_
#define _CHECKING_ACCOUNT_H_

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

class Checking_Account : public Account
{
private:
    static constexpr const char *DefName = "Unnamed Checking Account";
    static constexpr double DefBalance = 0.0;
    static constexpr double PerCheckFee = 1.5;

public:
    Checking_Account(string Name = DefName, double Balance = DefBalance);
    virtual bool Withdraw(double Amount) override;
    virtual bool Deposit(double Amount) override;
    virtual ~Checking_Account() = default;
    virtual void Print(ostream &Os) const override;
};

#endif // _CHECKING_ACCOUNT_H_
