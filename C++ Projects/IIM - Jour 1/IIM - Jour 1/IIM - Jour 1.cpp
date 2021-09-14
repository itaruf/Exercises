// IIM - Jour 1.cpp : Ce fichier contient la fonction 'main'. L'exécution du programme commence et se termine à cet endroit.

#include <iostream>

void afficher_message(const std::string *str);

void afficher_message(const std::string *str) {
    std::cout << *str << std::endl;
}

int main()
{
    std::cout << "Hello World!\n";
    std::string str{ "hey" };
    afficher_message(&str);
    int a{ 42 };
    int& refA{ a };
    int b{ 17 };
    refA = b;
    std::cout << a << std::endl;
}