#ifndef __TRUST_ACCOUNT_H__
#define __TRUST_ACCOUNT_H__
#include "Savings_Account.h"
#pragma once

class Trust_Account : Savings_Account
{
private:
	static constexpr const char *def_name = "Unnamed Trust Account";
	static constexpr double def_balance = 0.0;
	static constexpr double def_int_rate = 0.0;

public:
	Trust_Account(std::string name = def_name, double balance = def_balance, double int_rate = def_int_rate);
	bool deposit(double amount);
	bool withdraw(double amount);
};

#endif // __TRUST_ACCOUNT_H__