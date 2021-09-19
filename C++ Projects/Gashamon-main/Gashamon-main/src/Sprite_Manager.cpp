#include "Sprite_Manager.h"

Sprite_Manager::Sprite_Manager(std::string name, const Sprite& sprite) : name(std::move(name)), sprite(sprite)
{
	std::cout << "Sprite_Manager Constructor Called" << std::endl;
	register_sprite(this->name, this->sprite);
}

bool Sprite_Manager::register_sprite(const std::string& name, const Sprite& sprite)
{
	auto it = sprite_manager.find(name);
	if (it == sprite_manager.end()) {
		std::cout << "Registering "  << std::quoted(name)<< std::endl;
		sprite_manager.insert({name, sprite });
		return (true);
	}
	else {
		std::cout << std::quoted(name) << " already registered." << std::endl;
		return (false);
	}
}

bool Sprite_Manager::get_sprite(const std::string& name, Sprite* sprite)
{
	auto it = sprite_manager.find(name);
	if (it != sprite_manager.end()) {
		std::cout << std::quoted(name) << " found." << std::endl;
		// on renvoit le deuxième élément qui est le sprite
		*sprite = sprite_manager.at(name);
		return (true);
	}
	else {
		std::cout << std::quoted(name) << " not found." << std::endl;
		return (false);
	}
}

void Sprite_Manager::purge()
{
	//for (auto it = c.begin(); it != c.end(); i++) {
	//	if (it->second.get_ptr().use_count() <= 1) {
	//		// enlever les sprites qui ne sont pas utilisés par d'autres classes
	//		std::cout << std::quoted(s.first) << " erased." << std::endl;
	//		it = sprite_manager.erase(it);
	//	}
	//}
}

void Sprite_Manager::display_map()
{
	for (auto& p : sprite_manager) {
		std::cout << std::quoted(p.first) << " : " << p.second.get_ptr() << std::endl;
	}
}