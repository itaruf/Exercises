#include "Gashamon.h"

Gashamon::Gashamon(std::string name, Sprite sprite, const unsigned int& health_points, const unsigned int& damage_points)
	: name(std::move(name)), sprite{sprite}, health_points{health_points}, damage_points{damage_points} 
{
	std::cout << "Gashamon Constructor Called." << std::endl;
}

Gashamon::~Gashamon()
{
	std::cout << "Gashamon Destructor Called." << std::endl;
}
