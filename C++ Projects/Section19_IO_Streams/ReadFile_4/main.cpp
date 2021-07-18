#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    ifstream InFile;
    InFile.open("poem.txt");

    if (!InFile)
    {
        cerr << "Problem opening file" << endl;
        return (-1);
    }

    char C{};
    while (InFile.get(C))
    {
        cout << C;
    }

    cout << endl;
    InFile.close();
    return (0);
}