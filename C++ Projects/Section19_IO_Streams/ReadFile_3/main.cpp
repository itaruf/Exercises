#include <iostream>
#include <fstream>
#include <string>

using namespace std;
using std::getline;

int main()
{
    ifstream InFile;
    InFile.open("poem.txt");
    if (!InFile)
    {
        cerr << "Problem opening file" << endl;
        return (-1);
    }
    string Line{};
    while (getline(InFile, Line))
    {
        cout << Line << endl;
    }

    InFile.close();
    return (-0);
}