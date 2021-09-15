#ifndef __WEAPON_H__
#define __WEAPON_H__

#include <cstdlib> // std::rand
#include <ctime>   // std::time
#include <iostream>
#include <string>

#pragma once

class Weapon
{

private:
    std::string m_name;

public:
    Weapon(std::string name);
    Weapon(Weapon &&) = default;

    unsigned int GetDamage() const;
    const std::string &GetName() const;
};
#endif // __WEAPON_H__