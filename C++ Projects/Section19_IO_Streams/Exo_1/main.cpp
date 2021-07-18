#include <iostream>
#include <iomanip>
#include <fstream>
#include <string>

using namespace std;
using std::getline;
using std::ios;

int main()
{

    fstream File{"data.txt", ios::in};

    if (!File)
    {
        cerr << "Error opening file" << endl;
        return (-1);
    }
    string Line{};
    while (!File.eof())
    {
        getline(File, Line);
        cout << Line << endl;
    }
}