#ifndef _MONEY_MONEY_H
#define _MONEY_MONEY_H

#include <iostream>
using std::istream;
using std::ostream;

class Money
{
	int dollars;
	int cents;
	float total;
	friend Money operator+(const Money &LHS, const Money &RHS);
	friend ostream &operator<<(Money &Out, const Money &RHS);
	friend istream &operator>>(Money &In, Money &RHS);

public:
	Money(int dollars = 0, int cents = 0);
	Money(float total = 0);
	// Overloaded Member Methods
	bool operator==(Money &RHS);
	bool operator!=(Money &RHS);

	// Member Methods
	int GetDollar() const;
	int GetCents() const;
	float GetTotal(int dollars, int cents);
	float GetTotal();
	void Display() const;

	//Destructor
	~Money();
};

#endif //_MONEY_MONEY_H
