#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

class Base
{
    // Friends of Base have access to all
public:
    int A{0};

protected:
    int B{0};

private:
    int C{0};
};

class Derived : public Base
{
    // A will be public and accessible
    // B will be protected and accessible
    // C will be private and NOT accessible

public:
    void AccessBaseMembers()
    {
        A = 100;
        B = 200;
        //C = 300;
    }
};
// int main est une non-member function
int main()
{

    Base OBase{};
    OBase.A = 100;
    //OBase.B = 200; Compilor error
    //OBase.C = 300; Compilor error

    Derived D{};
    D.A = 1000;
    //D.B = 2000; Compilor error
    //D.C = 3000; Compilor error
}