#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
    ifstream InFile{"romeoandjuliet.txt", std::ios::in};

    if (!InFile)
    {
        cerr << "Can't open the file (in)." << endl;
        return (-1);
    }

    ofstream OutFile{"romeoandjulietout.txt", std::ios::out};

    if (!OutFile)
    {
        cerr << "Can't open the file (out)." << endl;
        return (-1);
    }

    string Line{};
    int LineNum{1};
    while (!InFile.eof())
    {
        while (getline(InFile, Line))
        {
            OutFile << LineNum << "\t\t" << Line << endl;
            LineNum++;
        }
    }

    InFile.close();
    OutFile.close();

    return (0);
}