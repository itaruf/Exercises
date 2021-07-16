#include "Account.cpp"
#include "Checking_Account.cpp"
#include "Savings_Account.cpp"
#include "Trust_Account.cpp"
#include "Account_Util.cpp"

#include <memory>
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::istream;
using std::make_shared;
using std::make_unique;
using std::ostream;
using std::shared_ptr;
using std::string;
using std::unique_ptr;
using std::vector;

int main()
{
    try
    {
        Checking_Account Imane{"Imane", -10};
    }
    catch (const IllegalBalanceException &IBE)
    {
        cout << IBE.what() << endl;
    }
    cout << "Program completed successfully" << endl;
    return 0;
}
