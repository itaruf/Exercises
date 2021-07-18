#include <iostream>
#include <string>
#include <algorithm>
#include <fstream>
#include <vector>

using namespace std;
using std::cin;
using std::cout;
using std::endl;
using std::remove_if;
using std::string;

int main()
{
    fstream File{"romeoandjuliet.txt", ios::in};

    if (!File)
    {
        cerr << "Couldn't open the file" << endl;
        return (-1);
    }

    string Choice{"friend"};
    vector<string> Matches{};
    string Line{};
    int TotalWords{0};
    int MatchCount{0};

    /* cout << "Enter a word: ";
    getline(cin, Choice); */

    while (!File.eof())
    {
        while (File >> Line) // read word by word
        {
            TotalWords++;
            size_t Found = Line.find(Choice);
            if (!(Found == string::npos))
            {
                Matches.push_back(Line);
                MatchCount++;
            }
        }
    }

    cout << TotalWords << " words were searched..." << endl;
    cout << "Number of time the substring " << Choice << " was found: " << MatchCount << "." << endl;
    cout << "Match(es) for the word \"" << Choice << "\":" << endl;

    for (auto Item : Matches)
    {
        cout << Item << endl;
    }

    File.close();

    return (0);
}