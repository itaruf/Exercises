#ifndef __TRUSTACCOUNT_H__
#define __TRUSTACCOUNT_H__

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

class TrustAccount : public Account
{
	friend ostream &operator<<(ostream &Out, const TrustAccount &Account);

private:
	static double IntRate;

protected:
	static constexpr const char *DefName{"Unnamed Account"};
	static constexpr const double DefBalance{0.0};
	static constexpr const double DefIntRate{0.0};

public:
	/*Overloaded Constructor*/
	TrustAccount(string Name = DefName, double Balance = DefBalance, double IntRate = DefIntRate);
	/*Destructor*/
	~TrustAccount();
	/*Member Methods*/
	bool Deposit(double Amount);
	bool Withdraw(double Amount);
	int GetWithdrawalCount()
	{
		return (WithdrawalCount);
	}
};

#endif // __TRUSTACCOUNT_H__