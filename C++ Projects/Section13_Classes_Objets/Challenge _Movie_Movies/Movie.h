#ifndef __MOVIE_H__
#define __MOVIE_H__

#pragma once
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

class Movie
{
	friend class Movies;

private:
	string Name;
	string Rating;
	int Watched;
	static int ActiveMovies;

public:
	//Constructors
	Movie(string Name, string Rating, int Watched);

	static int GetActiveMovies()
	{
		return (ActiveMovies);
	}
};

#endif // __MOVIE_H__