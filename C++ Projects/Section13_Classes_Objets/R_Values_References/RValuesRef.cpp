#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

void func(int &num)
{
    cout << "l-func called" << endl;
}

void func(int &&num)
{
    cout << "r-func called" << endl;
}

int main()
{
    int x{100};
    int &LRef = x; // L-value reference

    int &&RRef = 200; // R-value reference
    // int &RRef = x; // Compiler error

    func(LRef);
    cout << endl;
    func(RRef);
    cout << endl;
    func(100);

    return (0);
}