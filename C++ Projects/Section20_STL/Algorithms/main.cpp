#include <iostream>
#include <vector>
#include <list>
#include <algorithm>
#include <cctype>

using namespace std;

class Person
{
    string Name;
    int Age;
    friend ostream &operator<<(ostream &Os, const Person &RHS)
    {
        Os << RHS.Name << endl;
        return (Os);
    }

public:
    Person() = default;
    Person(string Name, int Age) : Name{Name}, Age{Age} {}
    bool operator<(const Person &RHS)
    {
        return (this->Age < RHS.Age);
    }
    bool operator==(const Person &RHS)
    {
        return (this->Name == RHS.Name && this->Age == RHS.Age);
    }
};

void CheckIfExists(vector<int>::iterator It, vector<int> V)
{
    if (It != V.end())
    {
        cout << *It << endl;
    }
}

void FindTest()
{
    vector<int> V{1, 2, 3, 4, 5};
    auto It{find(V.begin(), V.end(), 3)};

    CheckIfExists(It, V);

    It = find(V.begin(), V.end(), 7); // 7 n'existant pas, It pointe sur V.end() qui contient des garbage data

    CheckIfExists(It, V);

    Person P1{"Imane", 20};
    Person P2{"Skitty", 17};
    Person P3{"Cookie", 5};

    list<Person> Persons{P1, P2, P3};

    auto It2 = find(Persons.begin(), Persons.end(), P1);

    if (It2 != Persons.end())
    {
        cout << *It2 << endl;
    }
    cout << endl;
}

void CountTest()
{
    vector<int> V{1, 2, 2, 4, 5};

    auto Num = count(V.begin(), V.end(), 1);
    cout << Num << " occurence(s) found." << endl;

    Num = count(V.begin(), V.end(), 2);
    cout << Num << " occurence(s) found." << endl;
    cout << endl;
}

void CountIfTest()
{
    vector<int> V{1, 2, 2, 4, 5}; 
    auto Num = count_if(V.begin(), V.end(), [](int X)
                        { return (X % 2 == 0); });

    cout << Num << " even number(s) found" << endl;
    cout << endl;
}

void ReplaceTest()
{
    vector<int> V{1, 2, 2, 4, 2, 5, 6};
    replace(V.begin(), V.end(), 2, 10);

    for (const auto &Item : V)
    {
        cout << Item << " ";
    }
    cout << endl
         << endl;
}

void StringTransformTest()
{
    string Str1{"This is a test"};
    transform(Str1.begin(), Str1.end(), Str1.begin(), ::toupper);
    cout << Str1 << endl;
}

int main()
{
    FindTest();
    CountTest();
    CountIfTest();
    ReplaceTest();
    StringTransformTest();
    return (0);
}