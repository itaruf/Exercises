#ifndef __SHALLOW_H__
#define __SHALLOW_H__

#pragma once

class Shallow
{
private:
	int *Data;

public:
	// Methods
	void SetDataValue(int DataToSet)
	{
		*Data = DataToSet;
	}

	int GetDataValue()
	{
		return (*Data);
	}

	// Constructors
	Shallow(int DataToSet);
	// Copy Constructors
	Shallow(const Shallow &source);
	~Shallow();
};

#endif // __SHALLOW_H__