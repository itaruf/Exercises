#ifndef __MYSTRING_H__
#define __MYSTRING_H__
#include <iostream>
#include <vector>
#include <string>

using std::istream;
using std::ostream;

#pragma once

class Mystring
{
	// Friend Overloaded Insertion and Extraction Operators
	friend ostream &operator<<(ostream &Out, const Mystring &RHS);
	friend istream &operator>>(istream &In, Mystring &RHS);

	// Friend Overloaded Operators Non-members Functions
	friend bool operator==(const Mystring &LHS, const Mystring &RHS);
	friend Mystring operator-(const Mystring &Obj);
	friend Mystring operator+(const Mystring &LHS, const Mystring &RHS);

private:
	char *Str;

public:
	/*Constructor*/
	// Default Constructor
	Mystring();
	Mystring(const char *Str);
	// Copy Constructor
	Mystring(const Mystring &source);
	// Move constructor
	Mystring(Mystring &&source);
	// Destructor
	~Mystring();

	/*Overloaded Assignment Operators*/
	// Copy Assignment
	Mystring &operator=(const Mystring &RHS); // Overload the "=" operator; left-side is "this", right-side
	// Move Assignment
	Mystring &operator=(Mystring &&RHS);

	/*Overloaded Member Methods*/
	//Examples:
	Mystring operator-() const;					   // Lowercase function
	Mystring operator+(const Mystring &RHS) const; // Concatenate function
	bool operator==(const Mystring &RHS) const;	   // Compare function
	// Member Methods
	void Display() const;
	int GetLength() const;
	char *GetStr() const;
};

#endif // __MYSTRING_H__