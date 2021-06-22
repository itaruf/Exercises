#include <iostream>
#include "AccountUtil.h"

// Displays Account objects in a  vector of Account objects
void Display(const vector<Account> &Accounts)
{
    cout << "\n=== Accounts ==========================================" << endl;
    for (const auto &AccTmp : Accounts)
        cout << AccTmp << endl;
}

// Deposits supplied Amount to each Account object in the vector
void Deposit(vector<Account> &Accounts, double Amount)
{
    cout << "\n=== Depositing to Accounts =================================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Deposit(Amount))
            cout << "Deposited " << Amount << " to " << AccTmp << endl;
        else
            cout << "Failed Deposit of " << Amount << " to " << AccTmp << endl;
    }
}

// Withdraw Amount from each Account object in the vector
void Withdraw(vector<Account> &Accounts, double Amount)
{
    cout << "\n=== Withdrawing from Accounts ==============================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Withdraw(Amount))
            cout << "Withdrew " << Amount << " from " << AccTmp << endl;
        else
            cout << "Failed Withdrawal of " << Amount << " from " << AccTmp << endl;
    }
}

// Helper functions for Savings Account class

// Displays Savings Account objects in a  vector of Savings Account objects
void Display(const vector<SavingsAccount> &Accounts)
{
    cout << "\n=== Savings Accounts ====================================" << endl;
    for (const auto &AccTmp : Accounts)
        cout << AccTmp << endl;
}

// Deposits supplied Amount to each Savings Account object in the vector
void Deposit(vector<SavingsAccount> &Accounts, double Amount)
{
    cout << "\n=== Depositing to Savings Accounts ==========================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Deposit(Amount))
            cout << "Deposited " << Amount << " to " << AccTmp << endl;
        else
            cout << "Failed Deposit of " << Amount << " to " << AccTmp << endl;
    }
}

// Withdraw supplied Amount from each Savings Account object in the vector
void Withdraw(vector<SavingsAccount> &Accounts, double Amount)
{
    cout << "\n=== Withdrawing from Savings Accounts ======================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Withdraw(Amount))
            cout << "Withdrew " << Amount << " from " << AccTmp << endl;
        else
            cout << "Failed Withdrawal of " << Amount << " from " << AccTmp << endl;
    }
}

/* void Display(const vector<TrustAccount> &Accounts)
{
    cout << "\n=== Trust Accounts ====================================" << endl;
    for (const auto &AccTmp : Accounts)
    {
        cout << AccTmp << endl;
    }
}

void Deposit(vector<TrustAccount> &Accounts, double Amount)
{
    cout << "\n=== Depositing to Trust Accounts ==========================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Deposit(Amount))
            cout << "Deposited " << Amount << " to " << AccTmp << endl;
        else
            cout << "Failed Deposit of " << Amount << " to " << AccTmp << endl;
    }
}

void Withdraw(vector<TrustAccount> &Accounts, double Amount)
{
    cout << "\n=== Withdrawing from Trust Accounts ======================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Withdraw(Amount))
            cout << "Withdrew " << Amount << " from " << AccTmp << endl;
        else
            cout << "Failed Withdrawal of " << Amount << " from " << AccTmp << endl;
    }
}

void Display(const vector<CheckingAccount> &Accounts)
{
    for (const auto &AccTmp : Accounts)
    {
        cout << AccTmp << endl;
    }
}

void Deposit(vector<CheckingAccount> &Accounts, double Amount)
{
    cout << "\n=== Depositing to Checking Accounts ==========================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Deposit(Amount))
            cout << "Deposited " << Amount << " to " << AccTmp << endl;
        else
            cout << "Failed Deposit of " << Amount << " to " << AccTmp << endl;
    }
}

void Withdraw(vector<CheckingAccount> &Accounts, double Amount)
{
    cout << "\n=== Withdrawing from Checking Accounts ======================" << endl;
    for (auto &AccTmp : Accounts)
    {
        if (AccTmp.Withdraw(Amount))
            cout << "Withdrew " << Amount << " from " << AccTmp << endl;
        else
            cout << "Failed Withdrawal of " << Amount << " from " << AccTmp << endl;
    }
}
 */