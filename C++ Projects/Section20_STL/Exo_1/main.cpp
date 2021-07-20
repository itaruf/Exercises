#include <iostream>
#include <string>

using namespace std;

template <typename T>
T Min(T A, T B)
{
    return (A < B ? A : B);
}

template <typename T1, typename T2>
void Fun(T1 A, T2 B)
{
    cout << A << " " << B << endl;
}

struct Person
{
    string Name;
    int Age;

    // Overloading "<" boolean operator
    bool operator<(const Person &RHS) const
    {
        return (this->Age < RHS.Age);
    }
};

ostream &operator<<(ostream &Os, const Person &RHS)
{
    Os << RHS.Name;
    return (Os);
}

template <typename T>
void Swap(T &A, T &B)
{
    T TMP = A;
    A = B;
    B = TMP;
}

int main()
{

    Person P1{"Imane", 20};
    Person P2{"Cookie", 5};
    Person P3{Min<Person>(P1, P2)};

    cout << P3.Name << endl;
    cout << P3 << endl; // Using &operator<<
    cout << endl;

    cout << Min<float>(5.5, 10) << endl;
    cout << endl;

    int A{5}, B{10};
    Swap<int>(A, B);

    cout << A << endl;
    cout << B << endl;
}