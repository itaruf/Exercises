#include <iostream>
#include <string>
#include <algorithm>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::reverse;
using std::string;

string AskInput(string UserInput);
void Pyramid(string UserInput);
string ReverseString(string Str);
string AskInput(string UserInput)
{
    cout << "Enter your message: ";
    getline(cin, UserInput);

    cout << endl;
    return (UserInput);
}
void Pyramid(string UserInput)
{
    string Pyramid{UserInput.at(0)};
    string PreviousPart{};

    // We use a for loop because we need to manipulate indexes while looping through the sentence.
    for (int i = 0; i < UserInput.length(); i++)
    {
        PreviousPart = UserInput.substr(0, i);
        Pyramid = PreviousPart + UserInput[i] + ReverseString(PreviousPart);

        // Handling spaces : each following rows should have 1 less space than its predecessor.
        string Spaces(UserInput.length() - i - 1, ' ');
        cout << Spaces << Pyramid << endl;
    }
    cout << endl;
}

string ReverseString(string Str)
{
    reverse(Str.begin(), Str.end());
    return (Str);
}

int main()
{
    string UserInput{};
    UserInput = AskInput(UserInput);
    Pyramid(UserInput);

    return (0);
}