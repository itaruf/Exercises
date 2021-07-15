#include <memory>
#include <iostream>
#include <vector>
#include <string>

using std::cin;
using std::cout;
using std::endl;
using std::getline;
using std::istream;
using std::make_shared;
using std::make_unique;
using std::ostream;
using std::shared_ptr;
using std::string;
using std::unique_ptr;
using std::vector;

class Test
{
private:
    int Data;

public:
    Test() : Data{0}
    {
        cout << "\tTest constructor (" << Data << ")" << endl;
    }
    Test(int Data) : Data{Data}
    {
        cout << "\tTest constructor (" << Data << ")" << endl;
    }
    int GetData() const
    {
        return (Data);
    }
    ~Test()
    {
        cout << "\tTest destructor (" << Data << ")" << endl;
    }
};

// Function prototypes
unique_ptr<vector<shared_ptr<Test>>> Make();
void Fill(vector<shared_ptr<Test>> &V, int Num);
void Display(const vector<shared_ptr<Test>> &V);

int main()
{
    unique_ptr<vector<shared_ptr<Test>>> PVector;
    PVector = Make();

    cout << "How many Data points do you want to enter: ";
    int Num;
    cin >> Num;

    Fill(*PVector, Num);
    Display(*PVector);

    return (0);
}

unique_ptr<vector<shared_ptr<Test>>> Make()
{
    unique_ptr<vector<shared_ptr<Test>>> P{make_unique<vector<shared_ptr<Test>>>()};
    return (P);
}

void Fill(vector<shared_ptr<Test>> &V, int Num)
{
    int Choice;
    for (int i = 1; i <= Num; i++)
    {
        cout << "Enter data point [" << i << "] (integer): ";
        cin >> Choice;
        shared_ptr<Test> T{make_shared<Test>(Choice)};
        V.push_back(T);
        cout << endl;
    }
}

void Display(const vector<shared_ptr<Test>> &V)
{
    cout << "Displaying vector: " << endl;
    for (auto Item : V)
    {
        cout << Item->GetData() << " ";
    }
    cout << endl;
}