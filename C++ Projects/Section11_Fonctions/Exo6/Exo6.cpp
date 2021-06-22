#include <iostream>
#include <iomanip>
#include <cmath>

using std::cin;
using std::cout;
using std::endl;
using std::setprecision;

int FunctionActivationCount{0};

double APennyDoubledEveryday(int NumberOfDays, double Penny = 1);

void AmountAccumulated()
{
    int NumberOfDays{18};
    double TotalAmount{APennyDoubledEveryday(NumberOfDays)};
    cout << "If I start with a penny and doubled it every day for 25 days, I will have $" << setprecision(10) << TotalAmount;
}

double APennyDoubledEveryday(int NumberOfDays, double Penny)
{
    FunctionActivationCount++;
    double TotalAmount{Penny};

    if (NumberOfDays == FunctionActivationCount)
    {
        return (TotalAmount);
    }

    TotalAmount = Penny * 2;
    cout << TotalAmount << endl;
    return (APennyDoubledEveryday(NumberOfDays, TotalAmount));
}

int main()
{

    AmountAccumulated();
    return (0);
}