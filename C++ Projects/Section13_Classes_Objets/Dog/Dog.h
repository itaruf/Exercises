//---- DO NOT MODIFY THIS FILE----

#ifndef __DOG_H__
#define __DOG_H__

#include <iostream>
#include <vector>
#include <string>

#pragma once

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

class Dog
{

    /* Having public methods access the private attributes of the class
private:
    string Name;
    int Age;

public:
    string GetName()
    {
        return Name;
    }

    void SetName(string N)
    {
        Name = N;
    }

    int GetAge()
    {
        return Age;
    }

    void SetAge(int A)
    {
        Age = A;
    } */

public:
    string Name;
    int Age;

    const void Display(const int &InfoToDisplay);
    const void Display(const string &InfoToDisplay);
    const string GetName(const string &Name);
    const int GetAge(const int &Age);
    void SetName(string &OldName, const string &Name);
    void SetAge(int &OldAge, const int &Age);
    const int GetHumanYears(const int &Age);
    const string Speak();
};
#endif // __DOG_H__