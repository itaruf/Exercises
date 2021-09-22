#ifndef HERO_H
#define HERO_H

#include "Character.h"

class Hero : public Character
{
private:
    // Default values
	static constexpr const int default_hp = 0;
	static constexpr const int default_level = 0;
	static constexpr const char* default_name = "Unnamed character";
	static constexpr const int default_xp = 0;
	static constexpr const int default_atk = 0;
	static constexpr const int default_def = 0;
public:
    Hero(std::string name = default_name, const int& hp = default_hp, const int& level = default_level,  const int& xp = default_xp, const int& atk = default_atk, const int& def = default_def);
    void Attack(std::shared_ptr<Character> target) override;
    ~Hero() = default;
};


#endif // HERO_H