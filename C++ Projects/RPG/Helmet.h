#ifndef HELMET_H
#define HELMET_H
#include "Helmet.h"

class Helmet : public Item
{
private:
	int def;
public:
	Helmet() = delete;
	~Helmet() = default;
};


#endif // HELMET_H