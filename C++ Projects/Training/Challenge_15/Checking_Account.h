#ifndef __CHECKING_ACCOUNT_H__
#define __CHECKING_ACCOUNT_H__
#include "Account.h"
#pragma once

class Checking_Account : public Account
{
private:
    static constexpr const char *def_name = "Unnamed Checking Account";
    static constexpr double def_balance = 0.0;
    static constexpr const double fee{1.5};

public:
    // Constructors
    Checking_Account(std::string name = def_name, double balance = def_balance);
    bool withdraw(double amount);
};

#endif // __CHECKING_ACCOUNT_H__