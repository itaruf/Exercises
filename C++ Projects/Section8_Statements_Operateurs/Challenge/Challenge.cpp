#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int CountDollar{0}, CountQuarter{0}, CountDime{0}, CountNickel{0}, CountPenny{0};

int AskNumberOfCents()
{
    cout << "Enter an integer representing the number of cents: ";
    int NumberOfCents{};
    cin >> NumberOfCents;

    return (NumberOfCents);
}

void PrintResults(int Dollar, int Quarter, int Dime, int Nickel, int Penny)
{
    cout << "\nYou can provide the changes as follow: " << endl;
    cout << "Dollar(s): " << Dollar << endl;
    cout << "Quarter(s): " << Quarter << endl;
    cout << "Dime(s): " << Dime << endl;
    cout << "Nickel(s): " << Nickel << endl;
    cout << "Penny(s): " << Penny << endl;
}

bool Check(int NumberOfCents)
{
    if (NumberOfCents == 0)
    {
        PrintResults(CountDollar, CountQuarter, CountDime, CountNickel, CountPenny);
        return (true);
    }
    return (false);
}

void ChangeToProvide()
{

    int NumberOfCents{AskNumberOfCents()};
    int Dollar{100}, Quarter{25}, Dime{10}, Nickel{5}, Penny{1};

    /*DOLLAR*/
    if (NumberOfCents / Dollar < 1)
    {
        CountDollar = 0;
    }

    else
    {
        do
        {
            NumberOfCents -= Dollar;
            CountDollar = CountDollar + 1;
        } while (NumberOfCents / Dollar > 0);
    }

    if (Check(NumberOfCents))
        return;

    /*QUARTER*/
    if (NumberOfCents / Quarter < 1)
    {
        CountQuarter = 0;
    }
    else
    {
        do
        {
            NumberOfCents -= Quarter;
            CountQuarter = CountQuarter + 1;
        } while (NumberOfCents / Quarter > 0);
    }

    if (Check(NumberOfCents))
        return;

    /*DIME*/
    if (NumberOfCents / Dime < 1)
    {
        CountDime = 0;
    }
    else
    {
        do
        {
            NumberOfCents -= Dime;
            CountDime = CountDime + 1;
        } while (NumberOfCents / Dime > 0);
    }

    if (Check(NumberOfCents))
        return;

    /*NICKEL*/
    if (NumberOfCents / Nickel < 1)
    {
        CountNickel = 0;
    }
    else
    {
        do
        {
            NumberOfCents -= Nickel;
            CountNickel = CountNickel + 1;
        } while (NumberOfCents / Nickel > 0);
    }

    if (Check(NumberOfCents))
        return;

    /*PENNY*/
    if (NumberOfCents / Penny < 1)
    {
        CountPenny = 0;
    }
    else
    {
        do
        {
            NumberOfCents -= Penny;
            CountPenny = CountPenny + 1;
        } while (NumberOfCents / Penny > 0);
    }

    if (Check(NumberOfCents))
        return;
}

int main()
{
    ChangeToProvide();
    return (0);
}