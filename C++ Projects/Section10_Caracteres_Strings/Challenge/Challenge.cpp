#include <iostream>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;

string AskUserInput();
string EncryptString(string StrInput);
string DecryptString(string StrInput);

int CypherShift{2};

string AskUserInput()
{
    cout << "Enter a secret message: ";
    string StrInput{};
    getline(cin, StrInput);
    cout << endl;
    return (StrInput);
}

string EncryptString(string StrInput)
{
    cout << "Encrypting the message:" << endl;

    string EncryptedString{};

    cout << "Steps: \n";
    for (int StrInputTmp : StrInput)
    {
        EncryptedString += StrInputTmp + CypherShift;
        cout << EncryptedString << "\t";
    }
    cout << endl
         << EncryptedString << endl;
    cout << endl;

    return (EncryptedString);
}

string DecryptString(string StrInput)
{
    cout << "Decrypting the message:" << endl;

    string DecryptedString{};

    cout << "Steps:" << endl;
    for (int StrInputTmp : StrInput)
    {
        DecryptedString += StrInputTmp - CypherShift;
        cout << DecryptedString << "\t";
    }
    cout << endl
         << DecryptedString << endl;
    cout << endl;

    return (DecryptedString);
}

int main()
{
    string StrInput{AskUserInput()};

    StrInput = EncryptString(StrInput);
    StrInput = DecryptString(StrInput);
    return (0);
}