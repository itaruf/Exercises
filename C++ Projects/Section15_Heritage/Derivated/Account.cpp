#include <iostream>
#include <vector>
#include <string>
#include "Account.h"

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

Account::Account(double Balance) : Balance{Balance}
{
    cout << "Account Overloaded Constructor Called" << endl;
}

Account::~Account()
{
    cout << "Account Destructor Called" << endl;
}

bool Account::Deposit(const double &Amount)
{
    Balance += Amount;
    cout << "Account Deposit Called With: " << Amount << endl;
    return (true);
}

bool Account::Withdraw(const double &Amount)
{
    cout << "Account Withdraw Called With: " << Amount << endl;

    if (Balance >= 0)
    {
        Balance -= Amount;
        return (true);
    }
    else
    {
        cout << "Cant withdraw a negative Balance having" << Balance << endl;
        return (false);
    }
}

ostream &operator<<(ostream &Out, const Account &RHS)
{
    Out << "Account Balance: " << RHS.Balance;
    return (Out);
}

Account::Account(string Name, double Balance)
{
    cout << "Account Default Constructor Called With Name: " << Name << " And Balance: " << Balance << endl;
}
