#include "Deep.h"

Deep::Deep()
{
}

Deep::Deep(int d)
{
    this->data = new int;
    *(this->data) = d;
}

Deep::Deep(const Deep &obj) : Deep{*(obj.data)}
{
    cout << "Copy constructor - Deep copy" << endl;
}

Deep::~Deep()
{
    cout << "Destructor freeing data of " << *(this->data) << endl;
    delete this->data;
}

void Deep::set_data_value(int d)
{
    *(this->data) = d;
}

int Deep::get_data_value()
{
    return *(this->data);
}

int main()
{
    Deep obj1{100};
    cout << obj1.get_data_value() << endl;
    Deep obj2{200};
    cout << obj2.get_data_value() << endl;
    Deep obj3{300};
    cout << obj3.get_data_value() << endl;
    Deep obj4{obj1};
    cout << obj4.get_data_value() << endl;
}