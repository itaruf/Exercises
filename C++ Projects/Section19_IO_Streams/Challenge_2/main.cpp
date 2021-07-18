#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;
using std::getline;
using std::ios;
using std::vector;

struct Student
{
    string Name;
    string Answers;
    int Note;

    Student(string Name = " ", string Answers = " ", int Note = 0) : Name{Name}, Answers{Answers}, Note{Note}
    {
    }
};

int main()
{
    fstream File{"responses.txt", ios::in};

    if (!File)
    {
        cerr << "Error file opening" << endl;
        return (-1);
    }

    int TotalAnswers{5};
    vector<Student> Students;
    char Answer{};
    int Count{1};

    string Answers{};
    getline(File, Answers);
    Answers.erase(remove(Answers.begin(), Answers.end(), ' '), Answers.end()); // on enlève les espaces blancs
    cout << "Correct answers: " << Answers << endl;

    string AnswersTMP;
    string NameTMP;

    cout << endl;

    while (getline(File, NameTMP))
    {
        getline(File, AnswersTMP);
        Students.emplace_back(NameTMP, AnswersTMP, 0);
    }

    for (auto Item : Students)
    {
        cout << Item.Name << endl;
        cout << Item.Answers << endl;

        for (int i = 0; i < Answers.length(); i++)
        {
            if (Item.Answers[i] == Answers[i])
            {
                Item.Note++;
            }
        }
        cout << Item.Note << "/" << TotalAnswers << endl;
        cout << endl;
    }

    File.close();
    return (0);
}