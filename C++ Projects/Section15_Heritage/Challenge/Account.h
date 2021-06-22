// Simple Account
#ifndef _ACCOUNT_H_
#define _ACCOUNT_H_

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

class Account
{
    friend ostream &operator<<(ostream &Out, const Account &Account);

private:
    static constexpr const char *DefName{"Unnamed Account"};
    static constexpr double DefBalance{0.0};

protected:
    string Name;
    double Balance;

public:
    Account(string Name = DefName, double Balance = DefBalance);
    // Account(string Name = "Unamed Account", double Balance = 0.0);
    bool Deposit(double Amount);
    bool Withdraw(double Amount);
    double GetBalance() const;
};
#endif