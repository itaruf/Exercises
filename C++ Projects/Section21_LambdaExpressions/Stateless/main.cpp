#include <iostream>
#include <string>
#include <vector>
#include <functional> // for function
#include <algorithm>

using namespace std;

class Person
{
    friend ostream &operator<<(ostream &Os, const Person &RHS);

private:
    string Name;
    int Age;

public:
    Person(string Name, int Age) : Name{Name}, Age{Age} {};
    Person(const Person &P) : Name{P.Name}, Age{P.Age} {}
    ~Person() = default;

    string GetName() const
    {
        return (Name);
    }
    void SetName(string Name)
    {
        this->Name = Name;
    };
    int GetAge() const
    {
        return (Age);
    }
    void SetAge(int Age)
    {
        this->Age = Age;
    }
};

ostream &operator<<(ostream &Os, const Person &RHS)
{
    Os << "[Person: " << RHS.Name << " : " << RHS.Age << "]";
    return Os;
}

void Test1()
{
    cout << "\n---Test1 --------------------------" << endl;

    []()
    { cout << "Hi" << endl; }();

    [](int X)
    { cout << X << endl; }(100);

    [](int X, int Y)
    { cout << X + Y << endl; }(100, 200);
}

void Test2()
{
    cout << "\n---Test2 --------------------------" << endl;

    auto l1 = []()
    { cout << "Hi" << endl; };

    l1();

    int Num{100};
    int Num2{100};

    auto l2 = [](int X, int Y)
    { cout << X + Y << endl; };

    l2(10, 20);
    l2(Num, Num2);

    auto l3 = [](int &X, int Y)
    {
        cout << "X: " << X << " Y: " << Y << endl;
        X = 1000;
        Y = 2000;
    };

    l3(Num, Num2);
    cout << "Num: " << Num << " Num2: " << Num2 << endl;
}

void Test3()
{
    cout << "\n---Test3 --------------------------" << endl;
    Person Imane{"Imane", 20};
    cout << Imane << endl;

    auto l4 = [](Person P)
    {
        cout << P << endl;
    };

    l4(Imane);

    auto l5 = [](const Person &P)
    {
        cout << P << endl;
    };

    l5(Imane);

    auto l6 = [](Person &P)
    {
        P.SetName("Cookie");
        P.SetAge(5);
        cout << P << endl;
    };

    l6(Imane);

    cout << Imane << endl;
}

void FilterVector(const vector<int> &V, bool (*predicate)(int))
//void FilterVector(const vector<int> &V, auto predicate) // C++20
{
    cout << "[ ";
    for (int Item : V)
    {
        if (predicate(Item))
            cout << Item << " ";
    }
    cout << "]" << endl;
}

void Test4()
{
    cout << "\n---Test4 --------------------------" << endl;
    vector<int> V{10, 20, 30, 40, 50, 60, 70, 80, 90, 100};

    FilterVector(V, [](int X)
                 { return (X > 50); });

    FilterVector(V, [](int X)
                 { return (X <= 30); });

    FilterVector(V, [](int X)
                 { return (X >= 30 && X <= 60); });
}

auto MakeLambda()
{
    return []()
    { cout << "This lambda was made using the MakeLambda function!" << endl; };
}

void Test5()
{
    cout << "\n---Test5 --------------------------" << endl;

    auto l5 = MakeLambda();

    l5();
}

void Test6()
{
    cout << "\n---Test6 --------------------------" << endl;
    auto l6 = [](auto X, auto Y)
    {
        cout << "X: " << X << " Y: " << Y << endl;
    };

    l6(10, 20);
    l6(100.3, 200);
    l6(12.5, 15.54);

    l6(Person("Imane", 20), Person("Cookie", 5));
}

void Test7()
{
    cout << "\n---Test7 --------------------------" << endl;

    vector<Person> Persons{{"Imane", 20}, {"Cookie", 15}, {"Skitty", 17}};

    sort(Persons.begin(), Persons.end(), [](const Person &P1, const Person &P2)
         { return (P1.GetName() < P2.GetName()); });

    for_each(Persons.begin(), Persons.end(), [](const Person &P)
             { cout << P << endl; });

    cout << endl;

    sort(Persons.begin(), Persons.end(), [](const Person &P1, const Person &P2)
         { return (P1.GetAge() < P2.GetAge()); });

    for_each(Persons.begin(), Persons.end(), [](const Person &P)
             { cout << P << endl; });
}

int main()
{
    Test1();
    Test2();
    Test3();
    Test4();
    Test5();
    Test6();
    Test7();
    return (0);
}