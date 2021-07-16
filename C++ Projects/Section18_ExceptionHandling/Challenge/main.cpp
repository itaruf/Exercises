#include "Account.cpp"
#include "Checking_Account.cpp"
#include "Savings_Account.cpp"
#include "Trust_Account.cpp"
#include "Account_Util.cpp"

#include <iostream>
#include <vector>
#include <string>
#include <memory>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::istream;
using std::ostream;
using std::string;
using std::vector;

int main()
{
    try
    {
        Savings_Account Savings_Cookie{"Cookie", -5000, 2.6};

        cout << Savings_Cookie << endl;
        Savings_Cookie.Deposit(10000);
        cout << Savings_Cookie << endl;
        Savings_Cookie.Withdraw(10000);
        cout << Savings_Cookie << endl;
    }
    catch (const IllegalBalanceException &IBE)
    {
        cout << IBE.what() << endl;
    }

    Account *Skitty = new Trust_Account("Skitty", 10000, 2.6);
    cout << *Skitty << endl;

    Checking_Account Imane{"Imane", 5000};
    cout << Imane << endl;

    Account *Imane_Trust = new Trust_Account("Imane");
    cout << *Imane_Trust << endl;

    Account *P1 = new Checking_Account("Larry", 10000);
    Account *P2 = new Savings_Account("Moe", 1000);
    Account *P3 = new Trust_Account("Curly");

    vector<Account *> Accounts{P1, P2, P3};

    Display(Accounts);
    Deposit(Accounts, 1000);

    try
    {
        Withdraw(Accounts, 10000);
    }
    catch (const InsufficentFundsException &IFE)
    {
        cout << IFE.what() << endl;
    }

    Display(Accounts);

    delete P1;
    delete P2;
    delete P3;

    return (0);
}