#include <iostream>
#include <iomanip>
#include <vector>
#include <string>

using namespace std;

struct City
{
    string Name;
    long Population;
    double Cost;
};

struct Country
{
    string Name;
    vector<City> Cities;
};

struct Tours
{
    string Title;
    vector<Country> Countries;
};
int main()
{
    string SubTitle1 = "Country";
    string SubTitle2 = "City";
    string SubTitle3 = "Population";
    string SubTitle4 = "Price";

    Tours Tours{
        "Tour Ticket Prices from Miami",
        {
            {
                "Colombia",
                {{"Bogota", 8778000, 400.98}, {"Cali", 2401000, 424.12}, {"Medellin", 2464000, 350.98}, {"Cartagena", 972000, 345.34}},
            },
            {
                "Brazil",
                {{"Rio De Janiero", 13500000, 567.45}, {"Sao Paulo", 11310000, 975.45}, {"Salvador", 18234000, 855.99}},
            },
            {
                "Chile",
                {{"Valdivia", 260000, 569.12}, {"Santiago", 7040000, 520.00}},
            },
            {"Argentina", {{"Buenos Aires", 3010000, 723.77}}},
        }};

    const int TotalWidth{70};
    const int Field1Width{20}; // Country
    const int Field2Width{20}; // City
    const int Field3Width{15}; // Population
    const int Field4Width{15}; // Cost
    const int TitleLength{Tours.Title.length()};

    cout << setw((TotalWidth - TitleLength) / 2) << "" << Tours.Title << endl;
    cout << endl;
    cout << setw(Field1Width) << left << SubTitle1
         << setw(Field2Width) << left << SubTitle2
         << setw(Field3Width) << right << SubTitle3
         << setw(Field4Width) << right << SubTitle4
         << endl;

    cout << setw(TotalWidth)
         << setfill('-')
         << ""
         << endl;

    cout << setfill(' ');
    cout << setprecision(2) << fixed;

    for (Country Country : Tours.Countries)
    {
        for (size_t i = 0; i < Country.Cities.size(); ++i)
        {
            cout << setw(Field1Width) << left << ((i == 0) ? Country.Name : "")
                 << setw(Field2Width) << left << Country.Cities.at(i).Name
                 << setw(Field3Width) << right << Country.Cities.at(i).Population
                 << setw(Field4Width) << right << Country.Cities.at(i).Cost
                 << endl;
        }
        cout << endl;
    }

    cout << endl
         << endl;
    return (0);
}