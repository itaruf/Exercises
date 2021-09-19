#ifndef __SPRITE_MANAGER_H__
#define __SPRITE_MANAGER_H__

#include "Sprite.h"
#include <unordered_map>
#include <iostream>
#include <string>
#include <unordered_map>
#include <iomanip>

class Sprite_Manager {
private:
public:
	std::string name;
	Sprite sprite;
	std::unordered_map<std::string, Sprite> sprite_manager;

	Sprite_Manager() = delete;
	Sprite_Manager(std::string name, const Sprite& sprite);
	bool register_sprite(const std::string &name, const Sprite& sprite);
	bool get_sprite(const std::string& name, Sprite* sprite);
	void purge();
	void display_map();

	~Sprite_Manager() = default;
};

#endif __SPRITE_MANAGER_H__