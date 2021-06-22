#ifndef __CAT_H__
#define __CAT_H__
#define OUT

#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

class Cat
{
private:
    string Name;
    int Age;
    int Num;
    static int NumberOfCats;

public:
    //Constructors (Overloading constructors)
    /*     Cat() : Cat{"None", 0, 0}  // No args constructor
    {
        cout << "n\3701" << endl;
    }

    Cat(const string NewName) : Cat{NewName, 0, 0}
    {
        cout << "n\3702" << endl;
    }

    Cat(const int NewAge) : Cat{"None", 0, 0}
    {
        cout << "n\3703" << endl;
    } 

    Cat(const string NewName, const int NewAge, const int NewNum) : Name{NewName}, Age{NewAge}, Num{NewNum}
    {
        cout << "n\3704" << endl;
    } */
    Cat(const string NewName = "None", const int NewAge = 0, const int NewNum = 0);
    // Copy Constructor
    Cat(const Cat &source);
    // Destructor Constructor
    ~Cat();
    static int GetNumberOfCats();

    //Methods
    const string GetName()
    {
        cout << Name << endl;
        return (Name);
    }

    const int GetAge()
    {
        cout << Age << endl;
        return (Age);
    }

    const int GetNum()
    {
        cout << Num << endl;
        return (Num);
    }

    void SetName(const string NameToSet)
    {
        Name = NameToSet;
    }

    void SetAge(const int AgeToSet)
    {
        Age = AgeToSet;
    }

    void SetNum(const int NumToSet)
    {
        Num = NumToSet;
    }
};

#endif // __CAT_H__