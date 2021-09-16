#include "Player.h"

// Constructeur de Player
Player::Player(std::string name, WeaponPtr weapon) : m_weapon(std::move(weapon)), m_name(std::move(name)), m_health(100)
{
}

// Méthode retournant les points de vie du joueur
unsigned int Player::GetHealth() const
{
    return m_health;
}
// Méthode retournant l'arme du joueur
const Weapon &Player::GetWeapon() const
{
    return *m_weapon.GetPointer();
}

// Méthode retournant le nom du joueur
const std::string &Player::GetName() const
{
    return m_name;
}

void Player::TakeDamage(unsigned int damage)
{
    if (damage >= m_health)
        m_health = 0;
    else
        m_health -= damage;
}

void Player::UpdateName(const std::string &name)
{
    m_name = name;
}