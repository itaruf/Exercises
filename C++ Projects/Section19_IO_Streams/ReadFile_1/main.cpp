#include <iostream>
#include <fstream>

using namespace std;

int main()
{
    ifstream InFile; // ifstream => écriture only
    string Line;
    int Num;
    double Total;

    InFile.open("test.txt");

    if (!InFile)
    {
        cerr << "Problem opening file" << endl;
        return (-1);
    }

    InFile >> Line >> Num >> Total;
    cout << Line << endl;
    cout << Num << endl;
    cout << Total << endl;
    InFile.close();
    return (0);
}
