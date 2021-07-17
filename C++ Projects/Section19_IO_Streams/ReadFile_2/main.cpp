#include <iostream>
#include <iomanip>
#include <fstream>

using namespace std;

int main()
{
    ifstream InFile;
    string Line;
    int Num;
    double Total;

    InFile.open("test.txt");
    if (!InFile)
    {
        cerr << "Problem opening file" << endl;
        return (-1);
    }
    while (InFile >> Line >> Num >> Total)
    {
        cout << setw(10) << left << Line
             << setw(10) << Num
             << setw(10) << Total
             << endl;
    }
    InFile.close();
    return (0);
}
