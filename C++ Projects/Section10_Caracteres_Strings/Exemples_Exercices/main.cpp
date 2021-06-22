#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::ostream;
using std::string;
using std::vector;

void PrintStrings(string Str)
{

    cout << "PrintStrings" << endl;
    for (auto StrTmp : Str)
    {
        cout << StrTmp;
    }
    cout << endl;
}

void PrintAsciiFromStrings(string Str)
{
    cout << "PrintAsciiFromString" << endl;
    for (int StrAscii : Str)
    {
        cout << StrAscii << "\t";
    }
    cout << endl;
}

void UseStrings()
{

    // Multiplying a string with ()
    string TripleX(3, 'X');
    cout << TripleX << endl;
    cout << endl;

    // Cut a string with {}
    string MyNameCut{"Imane", 4};
    cout << MyNameCut << endl;
    MyNameCut = {MyNameCut, 0, 2};
    cout << MyNameCut << endl;
    cout << endl;

    // Concaténation
    string Part1{"C"};
    string Part2{"++"};
    string Sentence{Part1 + Part2};
    cout << Sentence << endl;
    cout << endl;

    //string Sentence2{"C"+"++"}; ILLEGAL

    //Using Vectors
    vector<string> AllNames{"Imane", "Amal"};
    cout << AllNames.at(0) << endl;
    cout << endl;
    cout << AllNames.at(1) << endl;
    cout << endl;

    //Printing each letters of a string
    PrintStrings(Sentence);
    cout << endl;

    //Print each strings' letters' ascii code
    PrintAsciiFromStrings(Sentence);
    cout << endl;

    //Substrings
    string SubSentence{Sentence.substr(1, 1)};
    cout << SubSentence << endl;
    cout << endl;

    //Finding an element in a string
    cout << Sentence.find("C") << endl;
    cout << Sentence.find("+") << endl;
    cout << Sentence.find("+", 2) << endl;
    cout << Sentence.find("A") << endl; // Will return a garbage value
    cout << endl;

    /*//Erasing an element in a string
    cout << Sentence.erase(1, 1) << endl; // Print without the said erased element
    Sentence.clear();                     // Print an empty string
    cout << "Cleared" << Sentence << endl;
    cout << endl; */

    //Getting the length of a string
    cout << Sentence.length() << endl;
    cout << endl;

    //Getting a string as an input
    cout << "Enter a string: ";
    string StrInput{};
    getline(cin, StrInput);
    cout << "You entered: " << StrInput;
    cout << endl;
}

int main()
{
    UseStrings();
    return (0);
}