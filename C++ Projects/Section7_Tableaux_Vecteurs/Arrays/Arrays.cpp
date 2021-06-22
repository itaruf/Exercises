#include <iostream>

using std::cin;
using std::cout;
using std::endl;

void ArrayExamples()
{
    cout << "\nArrayExamples: " << endl;

    int TestScores[]{1, 2, 3, 4, 5};

    char TabChar[]{"abcde"};
    char TabChar2[]{'a', 'b', 'c', 'd', 'e'};
    char TabChar3[3][10]{"first", "second", "third"};

    cout << "sizeof(TestScores): " << sizeof(TestScores) << endl;
    cout << "sizeof(*TestScores): " << sizeof(*TestScores) << endl;
    cout << TabChar[0] << endl;

    for (int i{0}; i < sizeof(TestScores) / sizeof(*TestScores); i++)
    {
        cout << TestScores[i] << endl;
    }

    // afficher tout le contenu d'un tableau de caractères ou chaîne de caractères
    cout.write(TabChar, sizeof(TabChar) / sizeof(*TabChar));
    cout << endl;
    cout.write(TabChar2, sizeof(TabChar2) / sizeof(*TabChar2));
    cout << endl;
}

int main()
{
    ArrayExamples();
}