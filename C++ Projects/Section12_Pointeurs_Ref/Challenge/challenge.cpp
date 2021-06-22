
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

int *ApplyAll(const int *PArray1, const int *PArray2, const size_t &SizeArray1, const size_t &SizeArray2);

void Print(const int *PArray, const size_t &SizeArray);

void Print(const int *PArray, const size_t &SizeArray)
{
    for (int i = 0; i < SizeArray; i++)
    {
        cout << *(PArray + i) << "\t";
    }
    cout << endl;
}

int *ApplyAll(const int *PArray1, const int *PArray2, const size_t &SizeArray1, const size_t &SizeArray2)
{

    int *NewStorage{nullptr};
    NewStorage = new int[SizeArray2 * SizeArray1];
    int count{0};

    for (int i = 0; i < SizeArray2; i++)
    {
        for (int j = 0; j < SizeArray1; j++)
        {
            NewStorage[count] = *(PArray1 + j) * *(PArray2 + i);
            count++;
        }
    }
    return (NewStorage);
}

int main()
{
    int Array1[]{1, 2, 3, 4, 5};
    int Array2[]{10, 20, 30};
    size_t SizeArray1{sizeof(Array1) / sizeof(*Array1)};
    size_t SizeArray2{sizeof(Array2) / sizeof(*Array2)};

    Print(Array1, OUT SizeArray1);
    cout << endl;
    Print(Array2, OUT SizeArray2);
    cout << endl;

    int *Results{ApplyAll(&Array1[0], &Array2[0], OUT SizeArray1, OUT SizeArray2)};
    Print(Results, SizeArray1 * SizeArray2);

    delete[] Results;
    return (0);
}
