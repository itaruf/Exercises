// Simple Account
#ifndef _ACCOUNT_H_
#define _ACCOUNT_H_

#pragma once

#include "I_Printable.cpp"
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

class Account : public I_Printable
{
private:
    static constexpr const char *DefName = "Unnamed Account";
    static constexpr double DefBalance = 0.0;

protected:
    string Name;
    double Balance;

public:
    Account(string Name = DefName, double Balance = DefBalance);
    virtual bool Deposit(double Amount) = 0;
    virtual bool Withdraw(double Amount) = 0;
    virtual ~Account() = default;
    virtual void Print(ostream &Os) const override;
};

#endif