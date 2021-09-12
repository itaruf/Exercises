//#include "Movie.h" We don't want to interact with the Movie class
#include "Movies.h"

void increment_watched(Movies &movies, string name);
void add_movie(Movies &movies, string name, string rating, int watched);

void increment_watched(Movies &movies, string name)
{
    for (auto it = begin(movies.movies); it != end(movies.movies); it++)
    {
        for (auto &movie : movies.movies)
        {
            if (movie.name == name)
            {
                movie.watched++;
                cout << movie.name << " watch count incremented." << endl;
                return;
            }
        }
        if (it == end(movies.movies) - 1)
        {
            cout << "Couldn't find the movie " << name << endl;
        }
    }
}

void add_movie(Movies &movies, string name, string rating, int watched)
{
    for (auto it = begin(movies.movies); it != end(movies.movies); it++)
    {
        for (auto &movie : movies.movies)
        {
            if (movie.name == name)
            {
                cout << movie.name << " already exists ! " << endl;
                return;
            }
        }
        if (it == end(movies.movies) - 1)
        {
            cout << name << " movie added." << endl;
            movies.movies.push_back({name, rating, watched});
            break;
        }
    }
}

int main()
{
    Movies movies{{{"Cookie", "R", 0}}};

    add_movie(movies, "Cookie", "R", 0);
    add_movie(movies, "Imane", "R", 0);

    increment_watched(movies, "Imane");
    increment_watched(movies, "Skitty");
}
