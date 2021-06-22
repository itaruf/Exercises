#include <iostream>

using std::cin;
using std::cout;
using std::endl;

void ZeroArray(int *Numbers, int ArraySize);

void ZeroArray(int *Numbers, int ArraySize)
{
    for (int i = 0; i < ArraySize; i++)
    {
        Numbers[i] = 0;
    }
}

int main()
{
    int Numbers[]{1, 2, 3, 4, 5};
    ZeroArray(Numbers, sizeof(Numbers) / sizeof(*Numbers));

    for (auto NumbersTmp : Numbers)
    {
        cout << NumbersTmp << endl;
    }

    return (0);
}