#include <iostream>
#include <vector>
#include <string>

using namespace std;

template <typename T1, typename T2>
class Item
{

private:
    string Name;
    T1 Value;

public:
    Item(string Name, T1 Value) : Name{Name}, Value{Value} {}
    string GetName()
    {
        return (this->Name);
    }
    T1 GetValue()
    {
        return (Value);
    }
};

int main()
{
    Item<int, int> I1{"Imane", 5};
    Item<string, int> I2{"Cookie", "Miaou"};
    Item<int, int> I3{"Skitty", 10};

    vector<Item<int, int>> V{I1, I3};

    cout << V.at(0).GetValue() << endl;
    cout << V.at(1).GetValue() << endl;

    //Item<Item<int, int>, int> I4{"Skitty", {"Skitty", 10}};
    Item<Item<string, int>, int> I5{"Cookie", I2};

    //cout << I4.GetValue().GetName() << endl;
    //cout << I5.GetValue().GetValue() << endl;
    return (0);
}