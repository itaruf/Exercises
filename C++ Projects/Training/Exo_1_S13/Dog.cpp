#include "Dog.h"

Dog::Dog() : Dog{"", 0}
{
}

Dog::Dog(string name, int age) : name{name}, age{age}
{
}
ostream &operator<<(ostream &os, const Dog &dog_obj)
{
    os << "dog's name: " << dog_obj.name << ", dog's age: " << dog_obj.age;
    return (os);
}

bool operator==(const Dog &dog_obj_lhs, const Dog &dog_obj_rhs)
{
    return (dog_obj_lhs.name == dog_obj_rhs.name);
}

bool operator<(const Dog &dog_obj_lhs, const Dog &dog_obj_rhs)
{
    return (dog_obj_lhs.age < dog_obj_lhs.age);
}