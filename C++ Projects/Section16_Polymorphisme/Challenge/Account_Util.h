#ifndef _ACCOUNT_UTIL_H_
#define _ACCOUNT_UTIL_H_

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

// Utility helper functions for Account class

void Display(const vector<Account *> &Accounts);
void Deposit(vector<Account *> &Accounts, double Amount);
void Withdraw(vector<Account *> &Accounts, double Amount);

#endif