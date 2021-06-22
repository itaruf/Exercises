#pragma once
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

class Deep
{
private:
	int *Data;

public:
	// Constructor
	Deep(int DataToSet);
	//Copy Constructor
	Deep(const Deep &source);
	//Default Destructor
	~Deep();

	const int GetDataValue()
	{
		return (*Data);
	}
};
