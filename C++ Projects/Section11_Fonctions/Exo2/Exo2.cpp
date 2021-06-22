#include <iostream>
using std::cin;
using std::cout;
using std::endl;

void print_grocery_list(int apples = 3, int oranges = 7, int mangos = 13);

void modify_grocery_list()
{
    "Week one: ";
    print_grocery_list();
    "Week two: ";
    print_grocery_list(5);
    "Week tree: ";
    print_grocery_list(7, 11);
}

void print_grocery_list(int apples, int oranges, int mangos)
{
    cout << apples << " apples"
         << "\n"
         << oranges << " oranges"
         << "\n"
         << mangos << " mangos"
         << "\n";
    cout << endl;
}

int main()
{
    modify_grocery_list();
    return (0);
}