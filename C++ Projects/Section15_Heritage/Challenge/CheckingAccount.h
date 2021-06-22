#ifndef __CHECKINGACCOUNT_H__
#define __CHECKINGACCOUNT_H__

#pragma once
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

class CheckingAccount : public Account
{
	friend ostream &operator<<(ostream &Out, const CheckingAccount &Account);

private:
protected:
	static constexpr const char *DefName{"Unnamed Account"};
	static constexpr const double DefBalance{0.0};

public:
	/*Oveloaded Constructors*/
	CheckingAccount(string Name = DefName, double Balance = DefBalance);
	/*Destructor*/
	~CheckingAccount();

	/*Member Functions*/
	bool Withdraw(double Amount); // Modified Version
};

#endif // __CHECKINGACCOUNT_H__