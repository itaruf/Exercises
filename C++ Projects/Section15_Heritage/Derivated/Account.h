#ifndef __ACCOUNT_H__
#define __ACCOUNT_H__
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

#pragma once

class Account
{
	friend ostream &operator<<(ostream &Out, const Account &RHS);

private:
	static constexpr const char *DefName{"Unamed Account"};
	static constexpr const double DefBalance{0.0};

protected:
	double Balance;
	string Name;

public:
	/*Default Constructor*/
	Account(string Name = DefName, double Balance = DefBalance);
	/*Overloaded Constructor*/
	Account(double Balance);
	/*Destructor*/
	~Account();
	/*Member Methods*/
	bool Deposit(const double &Amount);
	bool Withdraw(const double &Amount);
	double GetBalance() const;
};

#endif // __ACCOUNT_H__