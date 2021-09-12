#ifndef __DOG_H__
#define __DOG_H__

#pragma once
#include <iostream>
using namespace std;

class Dog
{
public:
	string name;
	int age;
	// Constructors
	Dog();
	Dog(string name, int age);
	// Destructor
	~Dog() = default;
	// Overloaded Operators
	friend ostream &operator<<(ostream &os, const Dog &dog_obj);
	friend bool operator==(const Dog &dog_obj_lhs, const Dog &dog_obj_rhs);
	friend bool operator<(const Dog &dog_obj_lhs, const Dog &dog_obj_rhs);
};

#endif // __DOG_H__