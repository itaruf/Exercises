#include <iostream>
#include <fstream>
#include <map>
#include <set>
#include <string>
#include <iomanip>

using namespace std;

void Display(const map<string, int> &Words)
{
    cout << setw(12) << left << "\nWord"
         << setw(7) << right << "Count" << endl;
    for (auto Pair : Words)
        cout << setw(12) << left << Pair.first
             << setw(7) << right << Pair.second << endl;
}

void Display(const map<string, set<int>> &Words)
{
    cout << setw(12) << left << "\nWord Occurrences" << endl;
    for (auto Pair : Words)
    {
        cout << setw(12) << left << Pair.first
             << left << "[ ";
        for (auto Item : Pair.second)
            cout << Item << " ";
        cout << "]" << endl;
    }
}

string ClearString(const string &Sentence)
{
    string Result;
    for (char C : Sentence)
    {
        if (C == '.' || C == ',' || C == ';' || C == ':')
            continue;
        else
            Result += C;
    }
    return (Result);
}

void Part1()
{
    map<string, int> Words;
    string Line{}, Word{};
    ifstream InFile{"words.txt"};
    if (InFile)
    {
        while (InFile >> Line)
        {
            Line = ClearString(Line);
            if (Words.find(Line) == Words.end())
            {
                Words.insert({Line, 1});
            }
            else
            {
                Words[Line]++;
            }
        }
        InFile.close();
        Display(Words);
    }
    else
    {
        cerr << "Error opening input file" << endl;
    }
}

// Part2 process the file and builds a map of Words and a
// set of Line numbers in which the Word appears
void Part2()
{
    map<string, set<int>> Words;
    string Line{}, Word{};
    ifstream InFile{"words.txt"};
    int LineNumber{1};

    if (InFile)
    {
        while (getline(InFile, Word))
        {
            while (InFile >> Line)
            {

                Line = ClearString(Line);
                if (Words.find(Line) == Words.end())
                {
                    Words.insert({Line, {LineNumber}});
                }
                else
                {
                    Words[Line].insert(LineNumber);
                }
                LineNumber++;
            }
            InFile.close();
            Display(Words);
        }
    }
    else
    {
        cerr << "Error opening input file" << endl;
    }
}

int main()
{
    Part1();
    Part2();
    return (0);
}
