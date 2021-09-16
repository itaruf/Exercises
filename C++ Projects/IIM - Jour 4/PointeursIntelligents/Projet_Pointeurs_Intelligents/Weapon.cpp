#include "Weapon.h"

// Constructeur par défaut de Weapon
Weapon::Weapon(std::string name) : m_name(std::move(name))
{
}

unsigned int Weapon::GetDamage() const
{
    // Note, en C++ moderne on utilisera le header <random> pour générer
    // les nombres aléatoires, std::rand() est une vieillerie pleine de défauts.
    // Mais une vieillerie plus simple à comprendre ^_^
    return std::rand() % 31 + 20; //< Génère un nombre entre 20 et 50
}

const std::string &Weapon::GetName() const
{
    return m_name;
}