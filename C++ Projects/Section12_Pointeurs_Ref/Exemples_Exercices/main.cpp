#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

void UsePointers();
void PrintVector(vector<string> PVector);
void AllocateDynamically();
void ArraysAndPointers();

void UsePointers()
{
    string Num{"10"};
    string MyName{"Imane"};
    string *P{&Num};

    cout << P << endl;
    cout << *P << endl;
    cout << &P << endl;
    cout << &Num << endl;
    cout << sizeof(P) << endl;
    cout << sizeof(Num) << endl;
    cout << sizeof(*P) << endl;

    cout << endl;
    P = &MyName;

    cout << P << endl;
    cout << *P << endl;
    cout << &P << endl;
    cout << &MyName << endl;
    cout << sizeof(P) << endl;
    cout << sizeof(MyName) << endl;
    cout << sizeof(*P) << endl;

    cout << endl;

    vector<string> V{"Imane", "Amal", "Osama"};
    vector<string> *PVector{&V};

    cout << (*PVector).at(0) << endl;
    
    cout << endl;

    PrintVector(*PVector);

    delete P;
    delete PVector;
}

void PrintVector(vector<string> PVector)
{
    for (auto pTmp : PVector)
    {
        cout << pTmp << endl;
    }
    cout << endl;
}

void AllocateDynamically()
{
    int *P{nullptr};
    P = new int{};

    cout << P << endl;
    cout << *P << endl;

    int *P2{nullptr};
    P2 = new int{100};
    cout << P2 << endl;
    cout << *P2 << endl;

    int *PArray{nullptr};
    size_t size{};

    /*cout << "How big do you want the array? ";
    cin >> size;

    PArray = new int[size];
    cout << PArray << endl; */

    cout << endl;

    delete P;
    delete P2;
}

void ArraysAndPointers()
{

    int Array[]{100, 95, 5};
    int *PArray{&Array[0]};

    cout << PArray + 0 << endl;
    cout << PArray + 1 << endl;
    cout << PArray + 2 << endl;

    cout << endl;
    cout << PArray[0] << endl;
    cout << PArray[1] << endl;
    cout << PArray[2] << endl;

    cout << endl;

    cout << *(PArray + 0) << endl;
    cout << *(PArray + 1) << endl;
    cout << *(PArray + 2) << endl;

    cout << endl;

    for (int i = 0; i < sizeof(Array) / sizeof(*Array); i++)
    {
        cout << PArray + i << endl;
        cout << PArray++ << endl;
        cout << endl;
    }

    delete PArray;
}

int main()
{
    UsePointers();
    AllocateDynamically();
    ArraysAndPointers();
}