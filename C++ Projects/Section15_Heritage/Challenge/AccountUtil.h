#ifndef _ACCOUNTUTIL_H_
#define _ACCOUNTUTIL_H_
#include <vector>
#include "Account.h"
#include "SavingsAccount.h"
/* #include "TrustAccount.h"
#include "CheckingAccount.h" */

// Utility helper functions for Account class

void Display(const vector<Account> &Accounts);
void Deposit(vector<Account> &Accounts, double Amount);
void Withdraw(vector<Account> &Accounts, double Amount);

// Utility helper functions for Savings Account class

void Display(const vector<SavingsAccount> &Accounts);
void Deposit(vector<SavingsAccount> &Accounts, double Amount);
void Withdraw(vector<SavingsAccount> &Accounts, double Amount);

/* // Utility helper functions for Savings Account class

void Display(const vector<TrustAccount> &Accounts);
void Deposit(vector<TrustAccount> &Accounts, double Amount);
void Withdraw(vector<TrustAccount> &Accounts, double Amount);

// Utility helper functions for Savings Account class

void Display(const vector<CheckingAccount> &Accounts);
void Deposit(vector<CheckingAccount> &Accounts, double Amount);
void Withdraw(vector<CheckingAccount> &Accounts, double Amount);
 */
#endif