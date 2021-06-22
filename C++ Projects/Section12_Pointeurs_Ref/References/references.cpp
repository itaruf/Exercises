#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

void UseRefAndVectors();

void UseRefAndVectors()
{
    vector<string> Array{"Imane", "Amal", "Osa"};
    for (auto &ArrayTmp : Array)
    { // ArrayTmp is an alias
        ArrayTmp = "Funny";
    }

    for (auto const &ArrayTmp : Array)
    { // ArrayTmp is an alias
        cout << ArrayTmp << endl;
    }
}

int main()
{

    int num{100};
    int &ref{num};

    cout << num << endl;
    cout << ref << endl;

    cout << endl;

    num = 200;

    cout << num << endl;
    cout << ref << endl;

    cout << endl;

    ref = 300;

    cout << num << endl;
    cout << ref << endl;

    cout << endl;

    UseRefAndVectors();
}
