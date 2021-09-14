// IIM - Jour 2.cpp : Ce fichier contient la fonction 'main'. L'exécution du programme commence et se termine à cet endroit.
//

#include <iostream>

std::string build_message();

std::string build_message() {
    std::string a {"Bonjour !"};
    return (a); // r-value temporaire qui va être détruite
}

int main()
{
    std::string a{build_message()};
    std::string b{std::move(a)}; // std::move casts in r-value

    std::cout << a << std::endl; // empty string, the a pointer is now null
    std::cout << b << std::endl; // b now contains the a data
}