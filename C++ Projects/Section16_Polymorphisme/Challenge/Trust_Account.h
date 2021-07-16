#ifndef _TRUST_ACCOUNT_H_
#define _TRUST_ACCOUNT_H_

#pragma once

#include "Savings_Account.h"
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

class Trust_Account : public Savings_Account
{
private:
    static constexpr const char *DefName = "Unnamed Trust Account";
    static constexpr double DefBalance = 0.0;
    static constexpr double DefIntRate = 0.0;
    static constexpr double BonusAmount = 50.0;
    static constexpr double BonusThreshold = 5000.0;
    static constexpr int MaxWithdrawals = 3;
    static constexpr double MaxWithdrawalsPercent = 0.2;

protected:
    int NumWithdrawals{0};

public:
    Trust_Account(string Name = DefName, double Balance = DefBalance, double IntRate = DefIntRate);

    // Deposits of $5000.00 or more will receive $50 bonus
    virtual bool Deposit(double Amount) override;

    // Only allowed maximum of 3 withdrawals, each can be up to a maximum of 20% of the account's value
    virtual bool Withdraw(double Amount) override;
    virtual void Print(ostream &Os) const override;
    virtual ~Trust_Account() = default;
};

#endif // _TRUST_ACCOUNT_H_
