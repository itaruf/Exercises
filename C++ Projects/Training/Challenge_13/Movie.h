#pragma once
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Movie
{
private:
    static constexpr const char *def_name = "Undefined movie name";
    static constexpr const char *def_rating = "Unrated";
    static constexpr const int def_watched = 0;

public:
    //Field Members
    string name;
    string rating;
    int watched;
    //Constructors
    Movie(string name = def_name, string rating = def_rating, int watched = def_watched);
    ~Movie() = default;
};
