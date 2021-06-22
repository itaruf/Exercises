// Section 15
// Challenge
#include "SavingsAccount.cpp"
#include "AccountUtil.cpp"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::fixed;
using std::getline;
using std::istream;
using std::ostream;
using std::string;
using std::vector;

int main()
{
    cout.precision(2);
    cout << fixed;

    Account Imane{};
    cout << "Imane's Balance: " << Imane.GetBalance() << endl;
    cout << endl;

    // Accounts
    vector<Account> Accounts;
    Accounts.push_back(Account{});
    Accounts.push_back(Account{"Larry"});
    Accounts.push_back(Account{"Moe", 2000});
    Accounts.push_back(Account{"Curly", 5000});

    Display(Accounts);
    Deposit(Accounts, 1000);
    Withdraw(Accounts, 2000);

    // Savings
    vector<SavingsAccount> SavingsAccounts;
    SavingsAccounts.push_back(SavingsAccount{});
    SavingsAccounts.push_back(SavingsAccount{"Superman"});
    SavingsAccounts.push_back(SavingsAccount{"Batman", 2000});
    SavingsAccounts.push_back(SavingsAccount{"Wonderwoman", 5000, 5.0});

    Display(SavingsAccounts);
    Deposit(SavingsAccounts, 1000);
    Withdraw(SavingsAccounts, 2000);

    /*     // Trust
    vector<TrustAccount> TrustAccounts;
    TrustAccounts.push_back(TrustAccount{});
    TrustAccounts.push_back(TrustAccount{"Superman"});
    TrustAccounts.push_back(TrustAccount{"Batman", 2000});
    TrustAccounts.push_back(TrustAccount{"Wonderwoman", 5000, 5.0});

    Display(TrustAccounts);
    Deposit(TrustAccounts, 1000);
    Withdraw(TrustAccounts, 2000);

    // Checking
    vector<CheckingAccount> CheckingAccounts;
    CheckingAccounts.push_back(CheckingAccount{});
    CheckingAccounts.push_back(CheckingAccount{"Superman"});
    CheckingAccounts.push_back(CheckingAccount{"Batman", 2000});
    CheckingAccounts.push_back(CheckingAccount{"Wonderwoman", 5000});

    Display(CheckingAccounts);
    Deposit(CheckingAccounts, 1000);
    Withdraw(CheckingAccounts, 2000); */

    return 0;
}
