#ifndef __SAVINGSACCOUNT_H__
#define __SAVINGSACCOUNT_H__

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

#pragma once

class SavingsAccount : public Account
{
	friend ostream &operator<<(ostream &Out, const SavingsAccount &RHS);

private:
	static constexpr const char *DefName{"Unnamed Account"}; // Facultatif
	static constexpr const double DefBalance{0.0};			 // Facultatif
	static constexpr const double DefIntRate{0.0};			 // Facultatif

protected:
	double IntRate;

public:
	/*Default Constructor*/
	SavingsAccount(string Name = DefName, double Balance = DefBalance, double IntRate = DefIntRate);
	/*Overloaded Constructor*/
	SavingsAccount(double Balance, double IntRate);
	/*Destructor*/
	~SavingsAccount();
	/*Member Methods*/
	bool Deposit(double Amount);
	//void Withdraw(double Amount); // We won't modify it. We are going to use the Withdraw inherited
};

#endif // __SAVINGSACCOUNT_H__