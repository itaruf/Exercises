#include "WeaponPtr.h"

WeaponPtr::WeaponPtr(Weapon *weapon) : m_weapon(weapon)
{
}

WeaponPtr::WeaponPtr(WeaponPtr &&weapon)
{
    m_weapon = weapon.m_weapon;
    weapon.m_weapon = nullptr;
}

WeaponPtr::~WeaponPtr()
{
    if (m_weapon)
        delete m_weapon;
}

Weapon *WeaponPtr::GetPointer() const
{
    return m_weapon;
}
