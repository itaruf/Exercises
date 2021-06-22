#include <iostream>
#include <string>
#include <typeinfo>

using std::cin;
using std::cout;
using std::endl;
using std::string;

void EventGuestList();
const string PrintGuestList(string GuestList[], size_t GuestList_size);
void ClearGuestList(string GuestList[], size_t GuestList_size);

void EventGuestList()
{
    string GuestList[]{"Larry", "Moe", "Curly"};
    size_t GuestList_size{3};

    PrintGuestList(GuestList, GuestList_size);
    ClearGuestList(GuestList, GuestList_size);
    PrintGuestList(GuestList, GuestList_size);
}

const string PrintGuestList(string GuestList[], size_t GuestList_size)
{
    for (int i = 0; i < GuestList_size; i++)
    {
        cout << GuestList[i] << endl;
    }
    cout << endl;
    return typeid(GuestList).name();
}

void ClearGuestList(string GuestList[], size_t GuestList_size)
{
    for (int i = 0; i < GuestList_size; i++)
    {
        GuestList[i] = " ";
    }
}

int main()
{
    EventGuestList();
    return (0);
}