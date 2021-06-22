#include "Movies.h"
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::string;
using std::vector;

int Movie::ActiveMovies{0};

Movie::Movie(string Name, string Rating, int Watched) : Name{Name}, Rating{Rating}, Watched{Watched}
{
    cout << "Initializing The Movie : " << Name << endl;
}

bool Movies::AddMovies(string Name, string Rating, int Watched)
{
    for (const Movie &MovsTmp : Movs)
    {
        if (MovsTmp.Name == Name)
        {
            cout << "Cant add the movie \"" << Name << "\", it already exists in the database." << endl;
            return (false);
        }
    }
    Movie::ActiveMovies++;
    cout << "Number of Active Movies: " << Movie::GetActiveMovies() << endl;
    Movs.push_back({Name, Rating, Watched});
    return (true);
}

bool Movies::IncrementWatched(const string Name)
{
    for (Movie &MovsTmp : Movs)
    {
        if (MovsTmp.Name == Name)
        {
            cout << "Incrementing the number of watching of: " << Name << endl;
            MovsTmp.Watched++;
            return (true);
        }
    }
    cout << "Cant increment the number of watching of: " << Name << ", it doesn't exist in the database" << endl;
    return (false);
}

void Movies::Display() const
{
    cout << "Registered movies: " << endl;

    if (Movs.size() == 0)
    {
        cout << "No registered movies." << endl;
    }
    for (const Movie &MovsTmp : Movs)
    {
        cout << "Name: " << MovsTmp.Name << " - Rating: " << MovsTmp.Rating << " - Watched: " << MovsTmp.Watched << endl;
    }
}

Movies::~Movies()
{
    cout << "End - Number of Active Movies: " << Movie::GetActiveMovies() << endl;
    for (auto MovsTmp : Movs)
    {
        cout << "Destructor Constructor Used For: " << MovsTmp.Name << endl;
        Movie::ActiveMovies--;
        cout << "Number of Active Movies: " << Movie::GetActiveMovies() << endl;
    }
}

int main()
{
    Movies MyMovies{};
    MyMovies.Display();
    cout << endl;

    // Ajouter des films
    MyMovies.AddMovies("La Fleur", "PG", 10);
    cout << endl;
    MyMovies.AddMovies("La Fleur", "PG", 10);
    cout << endl;
    MyMovies.AddMovies("Cendrillon", "R", 500);
    cout << endl;
    MyMovies.AddMovies("L'Enfant", "PG-13", 20);
    cout << endl;

    // Augmenter le nombre de vue des films existant dans la base de données
    MyMovies.IncrementWatched("La Fleur");
    MyMovies.IncrementWatched("La Fleur");
    MyMovies.IncrementWatched("Cendrillon");
    MyMovies.IncrementWatched("L'Enfant");
    cout << endl;

    // Montrer le contenu de la base de données
    MyMovies.Display();
    cout << endl;

    return (0);
}