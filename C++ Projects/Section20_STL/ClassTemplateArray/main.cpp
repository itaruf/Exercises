#include <iostream>
#include <string>

using namespace std;

template <typename T, int N>
class Array
{
    size_t Size{N};
    T Values[N];

    friend ostream &operator<<(ostream &Os, const Array &Arr)
    {
        Os << "[";
        for (const auto &Item : Arr.Values)
        {
            Os << Item << " ";
        }
        Os << "]" << endl;
        return (Os);
    }

public:
    Array() = default;
    Array(T InitValue)
    {
        for (auto &Item : Values)
        {
            Item = InitValue;
        }
    }
    void Fill(T Value)
    {
        for (auto &Item : Values)
        {
            Item = Value;
        }
    }
    size_t GetSize()
    {
        return (Size);
    }
    T &operator[](int Index)
    {
        return (Values[Index]);
    }
};

int main()
{
    Array<int, 5> A1;
    A1.Fill(0);

    cout << A1.GetSize() << endl;
    cout << A1 << endl;

    A1.Fill(1);
    A1.Fill(2);

    cout << A1 << endl;

    A1[2] = 1000;

    cout << A1 << endl;

    return (0);
}