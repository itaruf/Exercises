#include "Money.h"
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

Money::Money(int dollars, int cents) : dollars{dollars}, cents{cents}
{
    cout << "Using default constructor: " << dollars << " and " << cents << endl;
}

Money::Money(float total) : total{total}
{
    cout << "Using an overloaded constructor: " << total << endl;
}

bool Money::operator==(Money &RHS)
{
    /*     cout << this->GetDollar(this->dollars) << endl;
    cout << this->GetCents(this->cents) << endl;

    cout << RHS.GetDollar(RHS.dollars) << endl;
    cout << RHS.GetCents(RHS.cents) << endl; 

    cout << this->GetTotal(this->dollars, this->cents) << endl;
    cout << RHS.GetTotal(RHS.dollars, RHS.cents) << endl; */

    return (this->GetTotal(this->dollars, this->cents) == RHS.GetTotal(RHS.dollars, RHS.cents));
}

bool Money::operator!=(Money &RHS)
{
    return (this->GetTotal(this->dollars, this->cents) != RHS.GetTotal(RHS.dollars, RHS.cents));
}

int Money::GetDollar() const
{
    return (dollars);
}

int Money::GetCents() const
{
    return (cents);
}

float Money::GetTotal(int dollars, int cents)
{
    cout << "Calculating the total money:" << endl;
    return (dollars + (static_cast<float>(cents) / 100));
}

float Money::GetTotal()
{
    cout << "Calculating the total money:" << endl;
    return (total);
}

void Money::Display() const
{
    cout << this->GetDollar() << endl;
    cout << this->GetCents() << endl;
}

Money::~Money()
{
    cout << "Using destructor: " << dollars << " and " << cents << endl;
}

Money operator+(const Money &LHS, const Money &RHS)
{
    float LHSTotalMoney{LHS.dollars + static_cast<float>(LHS.cents) / 100};
    float RHSTotalMoney{RHS.dollars + static_cast<float>(RHS.cents) / 100};

    /*     cout << LHSTotalMoney << endl;
    cout << RHSTotalMoney << endl; */

    return (Money{LHSTotalMoney + RHSTotalMoney});
}

ostream &operator<<(ostream &Out, const Money &RHS)
{
    Out << "dollars: " << RHS.GetDollar() << " "
        << "cents: " << RHS.GetCents() << endl;
    return (Out);
}

istream &operator>>(istream &In, Money &RHS)
{
    return (In);
}
