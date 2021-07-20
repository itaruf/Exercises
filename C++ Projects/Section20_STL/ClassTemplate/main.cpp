#include <iostream>
#include <vector>
#include <string>

using namespace std;

template <typename T>
class Item
{

private:
    string Name;
    T Value;

public:
    Item(string Name, T Value) : Name{Name}, Value{Value} {}
    string GetName()
    {
        return (this->Name);
    }
    T GetValue()
    {
        return (Value);
    }
};

int main()
{
    Item<int> I1{"Imane", 5};
    Item<string> I2{"Cookie", "Miaou"};
    Item<int> I3{"Skitty", 10};

    vector<Item<int>> V{I1, I3};

    cout << V.at(0).GetValue() << endl;
    cout << V.at(1).GetValue() << endl;

    Item<Item<int>> I4{"Skitty", {"Skitty", 10}};
    Item<Item<string>> I5{"Cookie", I2};

    cout << I4.GetValue().GetName() << endl;
    cout << I4.GetValue().GetValue() << endl;
    return (0);
}