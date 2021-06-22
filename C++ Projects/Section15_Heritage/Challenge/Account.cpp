#include "Account.h"
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

Account::Account(string Name, double Balance) : Name{Name}, Balance{Balance}
{
    cout << "Account Overloaded Constructor Called" << endl;
}

bool Account::Deposit(double Amount)
{
    if (Amount < 0)
    {
        cout << "Cant deposit a negative amount" << endl;
        return (false);
    }
    else
    {
        cout << "Deposing " << Amount << "€" << endl;
        Balance += Amount;
        return (true);
    }
}

bool Account::Withdraw(double Amount)
{
    if (Balance - Amount >= 0)
    {
        Balance -= Amount;
        return (true);
    }
    else
    {
        cout << "Withdrawal failed" << endl;
        return (false);
    }
}

double Account::GetBalance() const
{
    return (Balance);
}

ostream &operator<<(ostream &Out, const Account &Account)
{
    Out << "[Account: " << Account.Name << ": " << Account.Balance << "]";
    return (Out);
}
