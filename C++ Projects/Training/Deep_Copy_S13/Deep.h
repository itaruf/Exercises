#pragma once
#include <iostream>

using namespace std;

class Deep
{
private:
    static constexpr int def_data{0};

public:
    void set_data_value(int d);
    int get_data_value();
    int *data;
    // Default Constructor
    Deep();
    // Overloaded constructor
    Deep(int d = def_data);
    // Copy Constructor
    Deep(const Deep &data);
    ~Deep();
};
