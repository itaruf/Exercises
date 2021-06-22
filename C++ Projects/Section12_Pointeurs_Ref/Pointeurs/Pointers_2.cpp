#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

int *CreateArray(const int Size, const int InitValue = 0);
void Display(const int *PArray, const size_t ArraySize);

int *CreateArray(const int Size, const int InitValue)

{
    int *NewStorage{nullptr};
    NewStorage = new int[Size];

    for (int i = 0; i < Size; i++)
    {
        *(NewStorage + i) = InitValue;
    }
    return (NewStorage);
}

void Display(const int *PArray, const size_t ArraySize)
{
    cout << "Displaying: " << endl;
    for (int i = 0; i < ArraySize; i++)
    {
        cout << *(PArray + i) << endl;
    }
}

int main()
{
    int *MyArray{CreateArray(10, 20)};
    Display(&MyArray[0], 10);
    delete[] MyArray;
    return (0);
}