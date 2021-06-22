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
private:
    int Value;

public:
    Base() : Value{0}
    {
        cout << "Base no-args constructor called" << endl;
    }
    Base(int Value) : Value{Value}
    {
        cout << "Base int constructor called" << endl;
    }
    ~Base()
    {
        cout << "Base destructor called" << endl;
    }
    /*Copy Constructor*/
    Base(const Base &Source) : Value{Source.Value}
    {
        cout << "Copy Constructor called" << endl;
    }
    /*Move Constructor*/
    /*     Base(Base &&Source) noexcept : Value{Source.Value}
    {
        Source.Value = 0;
    } */

    /*Copy Assignment*/
    Base &operator=(const Base &RHS)
    {
        cout << "Base Copy Assignment \"=\" called" << endl;
        if (this == &RHS)
        {
            return (*this);
        }
        else
        {
            Value = RHS.Value;
            return (*this);
        }
    }

    /*Member Class Methods*/
    int GetValue()
    {
        cout << "Get the value: ";
        return (Value);
    }
};

class Derived : public Base
{
private:
    int DoubledValue;

public:
    Derived() : Base{}, DoubledValue{0}
    {
        cout << "Derived no-args constructor called" << endl;
    }
    Derived(int DoubledValue) : Base{DoubledValue}, DoubledValue{DoubledValue * 2}
    {
        cout << "Derived int constructor called" << endl;
    }
    ~Derived()
    {
        cout << "Derived destructor called" << endl;
    }

    /*Copy Constructor*/
    Derived(const Derived &Source) : Base{Source}, DoubledValue{Source.DoubledValue}
    {
        cout << "Copy Constructor called" << endl;
    }
    /*Copy Assignment*/
    Derived &operator=(const Derived &RHS)
    {
        cout << "Copy Assignment \"=\" called" << endl;
        if (this == &RHS)
        {
            return (*this);
        }
        else
        {
            Base::operator=(RHS); // Toujours assigner la classe parent
            /*Syntaxe for other types*/
            DoubledValue = RHS.DoubledValue;
            return (*this);
        }
    }
    /*Member Class Methods*/
    int GetDoubledValue()
    {
        cout << "Get the doubled value: ";
        return (DoubledValue);
    }
};

int main()
{
    Base B{};
    cout << endl;

    Base B2{1000};
    cout << endl;

    Base B3{B2}; // Copy Constructor
    B2 = B3;     // Copy Assignment "="

    cout << B3.GetValue() << endl;
    cout << B2.GetValue() << endl;
    cout << endl;

    Derived D{1000};
    cout << endl;
    cout << D.GetValue() << endl;
    cout << D.GetDoubledValue() << endl;
    cout << endl;

    Derived D2{2000};
    cout << endl;
    cout << D2.GetValue() << endl;
    cout << D2.GetDoubledValue() << endl;
    cout << endl;

    D2 = D;
    cout << endl;
    cout << D2.GetValue() << endl;
    cout << D2.GetDoubledValue() << endl;
    cout << endl;

    //D = 1000;
    cout << D.GetDoubledValue() << endl;
    cout << endl;

    return (0);
}