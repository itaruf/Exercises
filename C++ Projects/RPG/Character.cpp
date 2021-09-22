#include "Character.h"

Character::Character(std::string name, const int& hp, const int& level, const int& xp, const int& atk, const int& def)
: name(std::move(name)), hp(hp), level(level), xp(xp), atk(atk), def(def)
{
    
}

void SetEquipment(std::shared_ptr<Item> equipment) 
{
    auto equip_as_helmet = std::dynamic_pointer_cast<Helmet>(equipment);
    if (equip_as_helmet) {
        if ()
        //this->equipment.helmet = equip_as_helmet;
    }
}

const int& Character::GetHP() const
{
    return(hp);
}

const int& Character::GetLevel() const
{
    return(level);
}

const std::string& Character::GetName() const
{
    return(name);
}

const int& Character::GetXP() const
{
    return(xp);
}

const int& Character::GetDamage() const
{
    return(atk);
}

const int& Character::GetDef() const
{
    return(def);
}

void Character::SetHP(int amount) 
{
    hp += amount;
}

void Character::SetLevel(int amount) 
{
    level += amount;
}

void Character::SetName(std::string name) 
{
    name.assign(name);
}

void Character::SetXP(int amount) 
{
    xp += amount;
}

void Character::SetDamage(int amount) 
{
    atk += amount;
}

void Character::SetDef(int amount) 
{
    def += amount;
}
