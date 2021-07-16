#ifndef I_PRINTABLE_H
#define I_PRINTABLE_H

#pragma once

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

class I_Printable
{
	friend ostream &operator<<(ostream &Os, const I_Printable &Obj);

public:
	virtual void Print(ostream &Os) const = 0;
	virtual ~I_Printable() = default;
};

#endif // I_PRINTABLE_H