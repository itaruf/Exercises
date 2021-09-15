#ifndef __PLAYER_H__
#define __PLAYER_H__

#include <cstdlib> // std::rand
#include <ctime>   // std::time
#include <iostream>
#include <string>

#include "WeaponPtr.h"
#include "Weapon.h"

#pragma once

class Player
{
private:
	WeaponPtr m_weapon;
	std::string m_name;
	unsigned int m_health;

public:
	// Constructeur par copie de Player (celui invoqué à la copie d'un Player)
	// comme ça n'a pas de sens de copier un Player, on le "delete" (= empêche son appel)
	Player(const Player &) = delete;
	// Constructeur par mouvement de Player
	Player(Player &&) = default;
	Player(std::string name, WeaponPtr weapon);

	~Player() = default;

	unsigned int GetHealth() const;
	const Weapon &GetWeapon() const;
	const std::string &GetName() const;
	void TakeDamage(unsigned int damage);
	void UpdateName(const std::string &name);
};

#endif // __PLAYER_H__