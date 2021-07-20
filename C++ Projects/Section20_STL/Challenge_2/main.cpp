#include <list>
#include <string>
#include <vector>
#include <iostream>
#include <iomanip>
#include <array>
#include <algorithm>
#include <stdlib.h>

using namespace std;

struct Song
{
    string Title;
    vector<string> Artists;
    friend ostream &operator<<(ostream &Os, const Song &RHS)
    {
        Os << "Title: " << RHS.Title << " BY: ";
        for (string Item : RHS.Artists)
        {
            Os << Item << " ";
        }
        return (Os);
    }
};
struct PlayList
{
    list<Song> PlayL;
};

static list<Song>::const_iterator It{};

void FirstSong(const PlayList &User);
void Menu(const PlayList &User);
void PlayNextSong(const PlayList &User);
void PlayPreviousSong(const PlayList &User);
void AddAndPlay(PlayList User);
void ListPlayList(const PlayList &User);

bool ValidChoice(const char &Choice)
{
    array<char, 6> ValidChoices{'F', 'N', 'P', 'A', 'L', 'Q'};
    auto It = find(ValidChoices.begin(), ValidChoices.end(), toupper(Choice));

    if (It != ValidChoices.end())
        return (true);
    return (false);
}

void Menu(const PlayList &User)
{
    char Choice{};
    It = User.PlayL.begin();

    do
    {
        do
        {
            cout << "F - Play First Song." << endl;
            cout << "N - Play Next Song." << endl;
            cout << "P - Play Previous Song." << endl;
            cout << "A - Add and Play the new song." << endl;
            cout << "L - List the current playlist." << endl;
            cout << "Enter a selection (Q to Quit): ";
            cin >> Choice;
            cout << endl;
        } while (!ValidChoice(Choice));

        switch (toupper(Choice))
        {
        case 'F':
            FirstSong(User);
            break;
        case 'N':
            PlayNextSong(User);
            break;
        case 'P':
            PlayPreviousSong(User);
            break;
        case 'A':
            AddAndPlay(User);
            break;
        case 'L':
            ListPlayList(User);
            break;
        case 'Q':
            exit(EXIT_SUCCESS);
        default:
            break;
        }
        cout << endl;
    } while (Choice != 'Q' || 'q');
}

void FirstSong(const PlayList &User)
{
    It = User.PlayL.begin();
    cout << "Playing the first song: " << endl;
    cout << User.PlayL.front().Title << " by: ";

    for (auto Item : User.PlayL.front().Artists)
    {
        cout << Item;
    }
    cout << endl;
}

void PlayNextSong(const PlayList &User)
{
    if (next(It, 1) == User.PlayL.end()) // Si on a atteint la fin de la playlist
    {
        It = User.PlayL.begin(); // On revient au début
        cout << *(It) << endl;
    }
    else
    {
        cout << *(++It) << endl;
    }
}

void PlayPreviousSong(const PlayList &User)
{
    if (It == User.PlayL.begin()) // Si on atteint le début de la playlist
    {
        It = prev(User.PlayL.end(), 1); // On joue la fin
        cout << *(It) << endl;
    }
    else
    {
        cout << *(--It) << endl;
    }
}

void AddAndPlay(PlayList User)
{
    cin.clear();
    cin.sync();
    Song NewSong{" ", {" "}};
    cout << "Enter song name: ";
    getline(cin, NewSong.Title);
    cout << "Enter song artist(s) ";
    getline(cin, NewSong.Artists.at(0));

    User.PlayL.insert(It, NewSong);
}

void ListPlayList(const PlayList &User)
{

    for (auto Item : User.PlayL)
    {
        cout << "Title: " << Item.Title << " BY: ";
        for (auto ItemTMP : Item.Artists)
        {
            cout << ItemTMP << " ";
        }
        cout << endl;
    }
}

int main()
{
    PlayList User{};

    Song S1{"God's Plan", {"Drake"}};
    Song S2 = {"Never Be The Same", {"Camila Cabello"}};
    Song S3 = {"Pray For Me", {"The Weekend", "K. Lamar"}};

    User.PlayL.emplace_back(S1);
    User.PlayL.emplace_back(S2);
    User.PlayL.emplace_back(S3);
    /* User.PlayList.emplace_back("Pray For Me ", ("The Weekend", "K. Lamar")); */

    Menu(User);
    return (0);
}