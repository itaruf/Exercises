#include <iostream>
#include <string>
#include <typeinfo>

using std::cin;
using std::cout;
using std::endl;
using std::string;

string PrintGuestList(const string &Guest1, const string &Guest2, const string &Guest3);
void ClearGuestList(string &Guest1, string &Guest2, string &Guest3);
void EventGuestList();

void EventGuestList()
{

    string Guest1{"Larry"};
    string Guest2{"Moe"};
    string Guest3{"Curly"};

    PrintGuestList(Guest1, Guest2, Guest3);
    ClearGuestList(Guest1, Guest2, Guest3);
    PrintGuestList(Guest1, Guest2, Guest3);
}

string PrintGuestList(const string &Guest1, const string &Guest2, const string &Guest3)
{
    string Test1 = typeid(Guest1).name(),
           Test2 = typeid(Guest2).name(),
           Test3 = typeid(Guest3).name();

    cout << Guest1 << endl
         << Guest2 << endl
         << Guest3 << endl
         << endl;

    return (Test1 + Test2 + Test3);
}

void ClearGuestList(string &Guest1, string &Guest2, string &Guest3)
{
    Guest1 = " ";
    Guest2 = " ";
    Guest3 = " ";
}

int main()
{
    EventGuestList();
    return (0);
}