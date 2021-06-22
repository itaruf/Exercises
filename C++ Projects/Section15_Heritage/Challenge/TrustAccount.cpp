#include "TrustAccount.h"
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

static int WithdrawalCount{0};

TrustAccount::TrustAccount(string Name, double Balance, double IntRate)
{
    cout << "Trust Account Overloaded Destructor Called" << endl;
}

TrustAccount::~TrustAccount()
{
    cout << "Trust Account Default Destructor Called" << endl;
}

bool TrustAccount::Deposit(double Amount)
{
    if (Amount >= 5000)
    {
        Amount += Amount * (IntRate / 100) + 50;
    }
    else
    {
        Amount += Amount * (IntRate / 100);
    }
    return (Account::Deposit(Amount));
}

bool TrustAccount::Withdraw(double Amount)
{
    WithdrawalCount++;
    if (WithdrawalCount > 3)
    {
        //cout << "Withdrawal failed" << endl;
        return (false);
    }
    if (Amount >= Balance * 20 / 100)
    {
        //cout << "Withdrawal failed" << endl;
        return (false);
    }
    return (Account::Withdraw(Amount));
}

ostream &operator<<(ostream &Out, const TrustAccount &Account)
{
    Out << "[Account: " << Account.Name << ": " << Account.Balance << "]";
    return (Out);
}
