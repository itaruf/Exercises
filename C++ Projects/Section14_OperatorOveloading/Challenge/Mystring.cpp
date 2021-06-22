#include "Mystring.h"
#include <iostream>
#include <vector>
#include <string>
#include <cstring>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::istream;
using std::ostream;
using std::strcpy;
using std::string;
using std::vector;

/*Member Functions*/
void Mystring::Display() const
{
    cout << "String: " << Str << " - Length: " << GetLength() << endl;
}

int Mystring::GetLength() const
{
    return (strlen(Str));
}

char *Mystring::GetStr() const
{
    return (Str);
}

/*Constructors*/
Mystring::Mystring() : Str{nullptr} // Default Constructor
{
    this->Str = new char[1];
    *this->Str = '\0';
}

Mystring::Mystring(const char *Str) : Str{nullptr} // An Overloaded Constructor
{
    if (Str == nullptr)
    {
        this->Str = new char[1];
        *this->Str = '\0';
    }
    else
    {
        this->Str = new char[strlen(Str) + 1];
        strcpy(this->Str, Str); // Deep Copy
    }
}

Mystring::Mystring(const Mystring &source) : Str{nullptr}
// Copy Constructor
{
    Str = new char[strlen(source.Str) + 1];
    strcpy(Str, source.Str); // Deep Copy
    cout << "Copy Constructor Called For: " << Str << endl;
}

Mystring::Mystring(Mystring &&source) : Str{source.Str}
// Move Constructor
{
    cout << "Move Constructor Called For: " << source.Str << endl;
    source.Str = nullptr;
}

Mystring &Mystring::operator=(const Mystring &RHS)
// Copy Assignment: Ne marche qu'avec les références L-Values
{
    cout << "Copy Assignment Called For: " << RHS.Str << endl;
    if (this == &RHS)
    {
        return (*this);
    }
    delete[] Str;                        // On supprime le tableau de caractères sur lequel pointait Str
    Str = new char[strlen(RHS.Str) + 1]; // Et on le réalloue avec la longueur de l'élément à copier (RHS) +1
    strcpy(Str, RHS.Str);

    return (*this);
}

Mystring &Mystring::operator=(Mystring &&RHS)
// Move Assignment: Ne marche qu'avec les références R-Values
{
    cout << "Move Assignment Called For: " << RHS.Str << endl;
    if (this == &RHS)
    {
        return (*this);
    }
    delete[] Str;      // On supprime le tableau de caractères sur lequel pointait Str
    Str = RHS.Str;     // On affecte la R-value référence au pointeur Str; On "vole" le pointeur
    RHS.Str = nullptr; // On nullifie le pointeur qui contenait précédemment la chaîne de caractères
    return (*this);
}

/*Overloaded Operators as Member Functions*/
Mystring Mystring::operator-() const
{
    char *Buffer = new char[strlen(Str) + 1];
    // On alloue de l'espace mémoire sur le tas pour contenir la chaîne de caractères
    //strcpy(Buffer, Str);

    for (int i = 0; i < strlen(Str) + 1; i++)
    {
        Buffer[i] = tolower(Str[i]);
    }

    Mystring Tmp{Buffer};

    delete[] Buffer;

    return (Tmp);
}

Mystring Mystring::operator+(const Mystring &RHS) const
{
    char *Buffer = new char[(strlen(Str) + strlen(RHS.Str) + 1)];

    strcpy(Buffer, Str);
    strcat(Buffer, RHS.Str);

    Mystring Tmp{Buffer};

    delete[] Buffer;

    return (Tmp);
}

bool Mystring::operator==(const Mystring &RHS) const
// Overloaded Member Function to compare the equality beetween 2 strings
{
    return (strcmp(Str, RHS.Str) == 0);
}

/*Overloaded Operators as Friend Non Member Functions*/
Mystring operator+(const Mystring &LHS, const Mystring &RHS)
// Regular Global Function to return two strings concatenated
{
    char *Buffer = new char[(strlen(LHS.Str) + strlen(RHS.Str) + 1)];

    strcpy(Buffer, LHS.Str);
    strcat(Buffer, RHS.Str);

    Mystring Tmp{Buffer};

    delete[] Buffer;

    return (Tmp);
}

bool operator==(const Mystring &LHS, const Mystring &RHS)
// Regular Global Function to compare the equality beetween 2 strings
{
    return (strcmp(LHS.Str, RHS.Str) == 0);
}

ostream &operator<<(ostream &Out, const Mystring &RHS)
{
    Out << RHS.Str;
    // Out << RHS.GetStr() // Si notre fonction n'était pas une friend

    return (Out);
}

istream &operator>>(istream &In, Mystring &RHS)
{
    char *Buffer = new char[1000];
    In >> Buffer;
    RHS = Mystring{Buffer};
    delete[] Buffer;
    return (In);
};

Mystring operator+=(Mystring &LHS, const Mystring &RHS)
{
    char *Buffer = new char[strlen(LHS.Str), strlen(RHS.Str) + 1];
    strcpy(Buffer, LHS.Str);

    Mystring Tmp{Buffer};
    delete[] Buffer;
    Tmp = Tmp.operator+(RHS);
    return (Tmp);
}

Mystring operator*(Mystring &RHS, const int &Repeat)
{
    char *Buffer = new char[strlen(RHS.Str) * Repeat + 1];
    strcpy(Buffer, RHS.Str);

    for (int i = 1; i < Repeat; i++)
    {
        strcat(Buffer, RHS.Str);
    }
    Mystring Tmp{Buffer};
    delete[] Buffer;
    return (Tmp);
}

Mystring operator*=(Mystring &LHS, const int &Repeat)
{
    char *Buffer = new char[strlen(LHS.Str) * Repeat + 1];
    strcpy(Buffer, LHS.Str);

    for (int i = 1; i < Repeat; i++)
    {
        strcat(Buffer, LHS.Str);
    }
    Mystring Tmp{Buffer};
    delete[] Buffer;
    return (Tmp);
}

bool operator<=(const Mystring &LHS, const Mystring &RHS)
// N'a pas vraiment de sens => On décide de comparer la longueur
{
    if (strlen(LHS.Str) <= strlen(RHS.Str))
    {
        return (true);
    }
    else
        return (false);
}

bool operator>=(const Mystring &LHS, const Mystring &RHS)
// N'a pas vraiment de sens => On décide de comparer la longueur
{
    if (strlen(LHS.Str) >= strlen(RHS.Str))
    {
        return (true);
    }
    else
        return (false);
}

bool operator<(const Mystring &LHS, const Mystring &RHS)
// N'a pas vraiment de sens
{
    if (strlen(LHS.Str) < strlen(RHS.Str))
    {
        //cout << LHS.Str << "<" << RHS.Str << endl;
        return (true);
    }
    else
        //cout << LHS.Str << "!<" << RHS.Str << endl;
        return (false);
}

bool operator>(const Mystring &LHS, const Mystring &RHS)
// N'a pas vraiment de sens
{
    if (strlen(LHS.Str) > strlen(RHS.Str))
    {
        //cout << LHS.Str << ">" << RHS.Str << endl;
        return (true);
    }
    else
        //cout << LHS.Str << "!>" << RHS.Str << endl;
        return (false);
}

bool operator!=(const Mystring &LHS, const Mystring &RHS)
{
    return (strcmp(LHS.Str, RHS.Str) != 0);
}

Mystring &operator--(Mystring &Obj)
// N'a pas vraiment de sens
{
    char *Buffer = new char[strlen(Obj.Str) + 1];
    strcpy(Buffer, Obj.Str);
    Mystring Tmp{Buffer};
    cout << Tmp.Str << endl;
    delete[] Buffer;
    return (Obj);
}

Mystring &operator++(Mystring &Obj)
// N'a pas vraiment de sens
{
    char *Buffer = new char[strlen(Obj.Str) + 1];
    strcpy(Buffer, Obj.Str);
    Mystring Tmp{Buffer};
    cout << Tmp.Str << endl;
    delete[] Buffer;
    return (Obj);
}

Mystring operator--(Mystring &Obj, int i)
// N'a pas vraiment de sens
{
    char *Buffer = new char[strlen(Obj.Str) + 1];
    strcpy(Buffer, Obj.Str);
    Mystring Tmp{Buffer};
    cout << Tmp.Str << endl;
    delete[] Buffer;
    return (Tmp);
}

Mystring operator++(Mystring &Obj, int i)
// N'a pas vraiment de sens
{
    char *Buffer = new char[strlen(Obj.Str) + 1];
    strcpy(Buffer, Obj.Str);
    Mystring Tmp{Buffer};
    cout << Tmp.Str << endl;
    delete[] Buffer;
    return (Tmp);
}

/*Destructor*/
Mystring::~Mystring() // Destructor
{
    if (Str == nullptr)
    {
        cout << "Destructor Called For: nullptr" << endl;
    }
    else
    {
        cout << "Destructor Called For: " << Str << endl;
        delete[] Str;
    }
}