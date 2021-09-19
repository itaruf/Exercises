#ifndef __GASHAMON_H__
#define __GASHAMON_H__

#include "Sprite.h"
#include "Sprite.cpp"

class Gashamon {
private:
	std::string name;
	Sprite sprite;
	unsigned int health_points;
	unsigned int damage_points;
public:
	Gashamon(std::string name, Sprite sprite, const unsigned int& health_points, const unsigned int& damage_points);
	~Gashamon();
};

#endif __GASHAMON_H__