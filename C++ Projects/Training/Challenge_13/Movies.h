#pragma once
#include "Movie.h"

class Movies
{
private:
public:
    vector<Movie> movies;
    Movies(vector<Movie> movies);
    ~Movies() = default;
};
