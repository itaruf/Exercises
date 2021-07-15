#include "main.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::istream;
using std::ostream;
using std::string;
using std::vector;

class Base
{
public:
    virtual void SayHello() const
    {
        cout << "Hello ! " << endl;
    }
    virtual ~Base() {}
};

class Derived : public Base
{
public:
    virtual void SayHello() const override
    {
        cout << "Hello from Derived !" << endl;
    }
    virtual ~Derived() {}
};

void Greetings(const Base &Obj)
{
    cout << "Greetings: ";
    Obj.SayHello();
}

int main()
{
    Base M;
    M.SayHello();

    cout << endl;

    Derived D;
    D.SayHello();

    cout << endl;

    Base *Ptr = new Derived();

    Ptr->SayHello();

    delete Ptr;

    Greetings(M);
    Greetings(D);
}