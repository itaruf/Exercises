#ifndef __MOVIES_H__
#define __MOVIES_H__

#pragma once

#include "Movie.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

class Movies
{
private:
	vector<Movie> Movs;

public:
	// Destructor
	~Movies();
	// Methods
	bool AddMovies(const string Name, const string Rating, const int Watched);
	bool IncrementWatched(const string Name);
	void Display() const;
};

#endif // __MOVIES_H__