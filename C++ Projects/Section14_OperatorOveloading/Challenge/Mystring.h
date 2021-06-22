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

	// Friend Overloaded Operators Non-members Functions
	friend bool operator==(const Mystring &LHS, const Mystring &RHS);
	friend Mystring operator-(const Mystring &Obj);
	friend Mystring operator+(const Mystring &LHS, const Mystring &RHS);
	// Friend Overloaded Insertion and Extraction Operators
	friend ostream &operator<<(ostream &Out, const Mystring &RHS);
	friend istream &operator>>(istream &In, Mystring &RHS);
	// Others Overloaded Operators NM Functions
	friend bool operator!=(const Mystring &LHS, const Mystring &RHS);
	friend bool operator>(const Mystring &LHS, const Mystring &RHS);
	friend bool operator<(const Mystring &LHS, const Mystring &RHS);
	friend bool operator>=(const Mystring &LHS, const Mystring &RHS);
	friend bool operator<=(const Mystring &LHS, const Mystring &RHS);
	friend Mystring operator+=(Mystring &LHS, const Mystring &RHS);
	friend Mystring operator*(Mystring &RHS, const int &Repeat);
	friend Mystring operator*=(Mystring &LHS, const int &Repeat);
	friend Mystring operator++(Mystring &Obj, int i); // Post
	friend Mystring operator--(Mystring &Obj, int i); // Post
	friend Mystring &operator++(Mystring &Obj);		  // Pre
	friend Mystring &operator--(Mystring &Obj);		  // Pre

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
	bool operator==(const Mystring &RHS) const;	   // Compare function
	Mystring operator-() const;					   // Lowercase function
	Mystring operator+(const Mystring &RHS) const; // Concatenate function

	// Member Methods
	void Display() const;
	int GetLength() const;
	char *GetStr() const;
};

#endif // __MYSTRING_H__