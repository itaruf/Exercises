#include <iostream>

using std::cin;
using std::cout;
using std::endl;

int AskNumberOfSmallRooms()
{
    cout << "How many small rooms would you like cleaned ? ";
    int NumOfSmallRooms{0};
    cin >> NumOfSmallRooms;

    return (NumOfSmallRooms);
}

int AskNumberOfLargeRooms()
{
    cout << "How many large rooms would you like cleaned ? ";
    int NumOfLargeRooms{0};
    cin >> NumOfLargeRooms;

    return (NumOfLargeRooms);
}

void CalculateTotalPrice()
{
    const int NumOfSmallRooms{AskNumberOfSmallRooms()};
    const int NumOfLargeRooms{AskNumberOfLargeRooms()};

    const int PricePerSmallRoom{25};
    const int PricePerLargeRoom{35};

    cout << "\nEstimate for carpet cleaning service" << endl;
    cout << "Number of small rooms: " << NumOfSmallRooms << endl;
    cout << "Number of large rooms: " << NumOfLargeRooms << endl;
    cout << "Price per small room: " << PricePerSmallRoom << "e" << endl;
    cout << "Price per large room: " << PricePerLargeRoom << "e" << endl;

    const int Cost{NumOfSmallRooms * PricePerSmallRoom + NumOfLargeRooms * PricePerLargeRoom};
    const float TaxPercentage{0.06};
    const float Tax{Cost * TaxPercentage};

    cout << "Cost: " << Cost << "e" << endl;
    cout << "Tax: " << Tax << "e" << endl;

    const float TotalCost{Cost + Tax};
    const int NumberOfValidDays{30};

    cout << "\nTotal estimate: " << TotalCost << "e" << endl;
    cout << "This estimate is valid for " << NumberOfValidDays << " days" << endl;
}

int main()
{
    CalculateTotalPrice();
    return (0);
}