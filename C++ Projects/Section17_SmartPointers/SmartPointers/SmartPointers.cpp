#include <iostream>
#include <vector>
#include <string>
#include <memory>

using std::cin;
using std::cout;
using std::endl;
using std::fixed;
using std::getline;
using std::istream;
using std::make_shared;
using std::make_unique;
using std::ostream;
using std::shared_ptr;
using std::string;
using std::unique_ptr;
using std::vector;

void MyDeleter(int *P)
{
    cout << "Deleter called" << endl;
    delete P;
}

int main()
{
    unique_ptr<int> P1 = make_unique<int>(100);
    cout << *P1 << endl;

    unique_ptr<int> P2 = make_unique<int>(200);
    cout << *P2 << endl;

    P1 = std::move(P2);

    cout << *P1 << endl;

    vector<shared_ptr<int>> SharedV;

    shared_ptr<int> P3{new int(100), MyDeleter};
    cout << *P3 << endl;

    shared_ptr<int> P4{P3};
    P3 = P4;
    cout << *P4 << endl;

    SharedV.push_back(P3); // Autorisé avec les shared ptr
    SharedV.push_back(P4); // Autorisé avec les shared ptr

    cout << "Use count: " << P3.use_count() << endl;

    cout << "Printing vector:" << endl;
    for (auto Item : SharedV)
    {
        cout << *Item << " ";
    }
    cout << endl;
}
