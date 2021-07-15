#include "Account_Util.h"

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

// Displays Account objects in a  vector of Account objects
void Display(const vector<Account *> &Accounts)
{
    cout << "\n=== Accounts===========================================" << endl;
    for (const auto &Acc : Accounts)
        cout << *Acc << endl;
}

// Deposits supplied Amount to each Account object in the vector
void Deposit(vector<Account *> &Accounts, double Amount)
{
    cout << "\n=== Depositing to Accounts =================================" << endl;
    for (auto &Acc : Accounts)
    {
        if (Acc->Deposit(Amount))
            cout << "Deposited " << Amount << " to " << *Acc << endl;
        else
            cout << "Failed Deposit of " << Amount << " to " << *Acc << endl;
    }
}

// Withdraw Amount from each Account object in the vector
void Withdraw(vector<Account *> &Accounts, double Amount)
{
    cout << "\n=== Withdrawing from Accounts ==============================" << endl;
    for (auto &Acc : Accounts)
    {
        if (Acc->Withdraw(Amount))
            cout << "Withdrew " << Amount << " from " << *Acc << endl;
        else
            cout << "Failed Withdrawal of " << Amount << " from " << *Acc << endl;
    }
}