#include "I_Printable.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::istream;
using std::ostream;
using std::string;
using std::vector;

ostream &operator<<(ostream &Os, const I_Printable &Obj)
{
    Obj.Print(Os);
    return (Os);
}