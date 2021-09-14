#include <deque>
#include <string>
#include <vector>
#include <cctype>
#include <iostream>
#include <iomanip>
#include <algorithm>

using namespace std;

void CleanString(string &Sentence)
{
    vector<char> CharactersToIgnore{'!', ',', ';', ':', '?', '-', '\'', '\"', ' '};
    for (const char &Item : CharactersToIgnore)
    {
        Sentence.erase(remove(Sentence.begin(), Sentence.end(), Item), Sentence.end());
    }
}

bool IsPalindrome(string Sentence)
{
    deque<char> D;
    CleanString(Sentence);

    for (const char &Item : Sentence)
    {
        D.emplace_front(Item);
        cout << Item << endl;
    }

    // D contient la chaîne de caractères initiale à l'envers
    for (int i = 0; i < Sentence.length(); i++)
    {
        if (toupper(Sentence[i]) != toupper(D.at(i)))
        {
            return (false);
        }
    }

    return (true);
}

int main()
{
    //vector<string> test_strings{"madam", "Amore"};
    vector<string> test_strings{"a", "aa", "aba", "abba", "abbcbba", "ab", "abc", "radar", "bob", "ana",
                                "avid diva", "Amore, Roma", "A Toyota's a toyota", "A Santa at NASA", "C++",
                                "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!", "This is a palindrome", "palindrome"};

    cout << boolalpha;
    /* cout << setw(8) << left << "Result"
         << "String" << endl;  */

    for (const auto &s : test_strings)
    {
        cout << /* setw(8) << left << */ IsPalindrome(s) << "\t" << s << endl;
    }

    cout << endl;

    return (0);
}