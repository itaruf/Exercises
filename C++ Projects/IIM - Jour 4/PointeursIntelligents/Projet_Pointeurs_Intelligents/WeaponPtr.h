#ifndef __WEAPONPTR_H__
#define __WEAPONPTR_H__

#pragma once
#include "Weapon.h"

class WeaponPtr
{

private:
	Weapon *m_weapon;

public:
	WeaponPtr(const WeaponPtr &weapon) = delete;
	WeaponPtr(WeaponPtr &&weapon);
	WeaponPtr(Weapon *weapon);

	~WeaponPtr();

	Weapon *GetPointer() const;
};

#endif // __WEAPONPTR_H__