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

class Move
{
private:
	int *Data;

public:
	//Methods
	void SetDataValue(const int DataToSet)
	{
		*Data = DataToSet;
	}

	const int GetDataValue()
	{
		return (*Data);
	}
	//Constructors
	Move();
	Move(const int DataSet);
	//Copy Constructor
	Move(const Move &Source);
	//Move Constructor
	Move(Move &&Source) noexcept;
	//Destructors
	~Move();
};
