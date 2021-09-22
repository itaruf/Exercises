#ifndef __CHARACTER_H__
#define __CHARACTER_H__

#include <iostream>
#include <string>
#include <memory>
#include "Helmet.h"
#include "Item.h"

struct Equipment {
	std::shared_ptr<Helmet> helmet;
};
class Character // Abstract Class, Can't Be Instanciated
{
private:
	// Default values
	static constexpr const int default_hp = 0;
	static constexpr const int default_level = 0;
	static constexpr const char* default_name = "Unnamed character";
	static constexpr const int default_xp = 0;
	static constexpr const int default_atk = 0;
	static constexpr const int default_def = 0;
	// Profil and Stats
	int hp;
	int level;
	std::string name;
	int xp;
	int atk;
	int def;
	// Equipment
	// Skill
	//Inventory
protected:
	// Game Changing Methods
	void ChangeLife(int amount);
	void AddExperience(int amount);
public:
	// Constructors
	Character();
	Character(std::string name = default_name, const int& hp = default_hp, const int& level = default_level, const int& xp = default_xp, const int& atk = default_atk, const int& def = default_def);
	// Member Methods
	virtual void Attack(std::shared_ptr<Character> target) = 0; // Pure virtual : à implémenter dans les clases enfants
	void SetEquipment(std::shared_ptr<Item> equipment);
	// Getters
	const int& GetHP() const;
	const int& GetLevel() const;
	const std::string& GetName() const;
	const int& GetXP() const;
	const int& GetDamage() const;
	const int& GetDef() const;
	// Setters
	void SetHP(int amount);
	void SetLevel(int amount);
	void SetName(std::string name);
	void SetXP(int amount);
	void SetDamage(int amount);
	void SetDef(int amount);
	// Destructor
	virtual ~Character() = default;
};

#endif // __CHARACTER_H__