#include "Hero.h"

void Hero::Attack(std::shared_ptr<Character> target)
{
    
}

Hero::Hero(std::string name, const int& hp, const int& level, const int& xp, const int& atk, const int& def)
: Character(name, hp, level, xp, atk, def)
{
    
}