#include <iostream>
#include <vector>
#include <algorithm>

using std::cin;
using std::cout;
using std::endl;
using std::find;
using std::vector;

void Menu();
void PrintList(vector<int> List);
vector<int> AddNumberToList(vector<int> List);
void MeanList(vector<int> List);
void MinList(vector<int> List);
void MaxList(vector<int> List);

void Menu()
{
    vector<char> ValidChoices{'P', 'A', 'M', 'S', 'L', 'Q'};
    vector<int> List{3, 2, 1, 4, 5};
    char choice{};
    bool NonValid{};

    do
    {
        do
        {
            cout << "\nP - Print numbers" << endl;
            cout << "A - Add a number" << endl;
            cout << "M - Display mean of the numbers" << endl;
            cout << "S - Display the smallest number" << endl;
            cout << "L - Display the largest number" << endl;
            cout << "Q - Quit" << endl;
            cout << "\nEnter your choice: ";

            cin >> choice;
            choice = toupper(choice);
            NonValid = find(ValidChoices.begin(), ValidChoices.end(), choice) == ValidChoices.end();

            if (NonValid)
            {
                cout << "\nUnknown selection, please try again." << endl;
            }

        } while (NonValid);

        switch (choice)
        {
        case ('P'):
            PrintList(List);
            break;
        case ('A'):
            List = AddNumberToList(List);
            break;

        case ('M'):
            MeanList(List);
            break;

        case ('S'):
            MinList(List);
            break;

        case ('L'):
            MaxList(List);
            break;

        case ('Q'):
            break;
        }
    } while (toupper(choice) != 'Q');
}

void PrintList(vector<int> List)
{
    cout << "\nPrinting the list: " << endl;
    for (int ListTmp : List)
    {
        cout << ListTmp << "\t";
    }
    cout << endl;
}

vector<int> AddNumberToList(vector<int> List)
{
    int NumberToAdd{};

    do
    {
        cin.clear();               // On réinitialise l'état de cin
        cin.ignore(INT_MAX, '\n'); // On efface le dernier input utilisateur
        cout << "\nNumber to add: ";
        cin >> NumberToAdd;
    } while (cin.fail());

    List.push_back(NumberToAdd);
    return (List);
}

void MeanList(vector<int> List)
{
    double Sum{};
    for (auto ListTmp : List)
    {
        Sum += ListTmp;
    }
    cout << "Mean: " << static_cast<double>(Sum / List.size()) << endl;
}

void MinList(vector<int> List)
{
    int Min{List.at(0)};
    for (int i = 1; i < List.size(); i++)
    {
        if (Min > List.at(i))
        {
            Min = List.at(i);
        }
    }
    cout << "Min: " << Min << endl;
}

void MaxList(vector<int> List)
{
    int Max{List.at(0)};
    for (int i = 1; i < List.size(); i++)
    {
        if (Max < List.at(i))
        {
            Max = List.at(i);
        }
    }
    cout << "Max: " << Max << endl;
}
int main()
{
    Menu();
    return (0);
}