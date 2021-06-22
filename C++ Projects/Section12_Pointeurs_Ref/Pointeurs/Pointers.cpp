
#include <iostream>
#include <vector>
#include <string>

#define OUT

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

void DoubleData(int *PInt);
void Swap(int *A, int *B);
void Swap(int &X, int &Y);
void Display(vector<string> *V);
void Display(string *Array, size_t ArraySize);

void DoubleData(int *PInt)
{
    *PInt *= 2;
}

void Swap(int *A, int *B)
{
    int Tmp{*A};
    *A = *B;
    *B = Tmp;
}

void Swap(int &X, int &Y)
{
    int Tmp{X};
    X = Y;
    Y = Tmp;
}

void Display(vector<string> *V)
{
    for (auto VTmp : *V)
    {
        cout << VTmp << endl;
    }
}

void Display(string *Array, size_t ArraySize)
{
    for (int i = 0; i < ArraySize; i++)
    {
        cout << *(Array + i) << endl;
    }
}

int main()
{
    int Value{10};
    int *PInt{nullptr};

    cout << "Current Value: " << Value << endl;
    cout << endl;

    PInt = &Value;

    DoubleData(PInt);

    cout << "New Value: " << Value << endl;
    cout << endl;

    int X{100}, Y{200};
    Swap(&X, &Y); // Using pointers

    cout << "X: " << X << endl;
    cout << "Y: " << Y << endl;
    cout << endl;

    Swap(OUT X, OUT Y); // Using references

    cout << "X: " << X << endl;
    cout << "Y: " << Y << endl;
    cout << endl;

    vector<string> V{"Imane", "Amal"};
    Display(&V);

    cout << endl;

    string Array[]{"Imane", "Amal"};
    size_t ArraySize{2};

    Display(&Array[0], ArraySize);

    delete PInt;
    return (0);
}
