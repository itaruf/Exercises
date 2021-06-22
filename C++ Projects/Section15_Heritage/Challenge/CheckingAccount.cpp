#include "CheckingAccount.h"
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

const double Fee{1.50};

CheckingAccount::CheckingAccount(string Name, double Balance) : Account(Name, Balance)
{
    cout << "Checking Account Overloaded Constructor Called" << endl;
}

CheckingAccount::~CheckingAccount()
{
    cout << "Checking Account Destructor Called" << endl;
}

bool CheckingAccount::Withdraw(double Amount)
{
    if (Balance >= 0)
    {
        //cout << "Withdrawing: " << Amount << "€" << endl;
        Balance -= Amount - Fee;
        return (true);
    }
    else
    {
        //cout << "Cant withdraw from a negative balance" << endl;
        return (false);
    }
}

ostream &operator<<(ostream &Out, const CheckingAccount &Account)
{
    Out << "[Account: " << Account.Name << ": " << Account.Balance << "]";
    return (Out);
}
