#include <cctype>
#include <stack>
#include <queue>
#include <iostream>
#include <string>
#include <iomanip>
#include <vector>
#include <algorithm>

using namespace std;

string ClearString(string &Sentence)
{
    vector<char> CharactersToIgnore{'!', ',', ';', ':', '?', '-', '\'', '\"', ' '};
    for (char Item : CharactersToIgnore)
    {
        Sentence.erase(remove(Sentence.begin(), Sentence.end(), Item), Sentence.end());
    }
    return (Sentence);
}

bool IsPalindrome(string &Sentence)
{
    ClearString(Sentence);
    stack<char> Stack{};

    for (auto Item : Sentence)
    {
        Stack.push(Item);
    }

    for (auto Item : Sentence)
    {
        if (toupper(Stack.top()) != toupper(Item))
        {
            return (false);
        }
        Stack.pop();
    }
    return (true);
}

int main()
{
    vector<string> TestStrings{"a", "aa", "aba", "abba", "abbcbba", "ab", "abc", "radar", "bob", "ana",
                               "avid diva", "Amore, Roma", "A Toyota's a toyota", "A Santa at NASA", "C++",
                               "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!", "This is a palindrome", "palindrome"};

    cout << boolalpha;
    for (auto &Sentence : TestStrings)
    {
        cout << IsPalindrome(Sentence) << "\t" << Sentence << endl;
    }
    cout << endl;
    return (0);
}