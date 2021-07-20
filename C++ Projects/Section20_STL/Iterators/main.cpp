#include <iostream>
#include <vector>
#include <set>
#include <map>
#include <list>

using namespace std;

void Display(const vector<int> &V)
{
    cout << "[ ";
    for (auto const &Item : V)
    {
        cout << Item << " ";
    }
    cout << "]" << endl;
}

void Test1()
{
    vector<int> Nums{1, 2, 3, 4, 5};
    auto It = Nums.begin(); // It est associé au vector Nums

    cout << *It << endl;

    It++;
    cout << *It << endl;

    It += 2;
    cout << *It << endl;

    It -= 2;
    cout << *It << endl;

    It = Nums.end() - 1;
    cout << *It << endl;
}

void Test2()
{
    vector<int> Nums{1, 2, 3, 4, 5};
    vector<int>::iterator It = Nums.begin();

    while (It != Nums.end())
    {
        cout << *It << endl;
        It++;
    }

    Display(Nums);

    It = Nums.begin();
    while (It != Nums.end())
    {
        *It = 0;
        It++;
    }

    Display(Nums);
}

void Test3()
{

    vector<int> Nums{1, 2, 3, 4, 5};

    vector<int>::const_iterator It = Nums.begin();
    // auto It = Nums.cbegin(); // équivalent à la ligne au-dessus

    while (It != Nums.end())
    {
        cout << *It << endl;
        It++;
    }

    It = Nums.begin();
    while (It != Nums.end())
    {
        It++;
    }
}

void Test4()
{
    vector<int> V{1, 2, 3, 4};
    auto It = V.rbegin();

    while (It != V.rend())
    {
        cout << *It << endl;
        It++;
    }

    list<string> Names{"Larry", "Moe", "Curly"};
    auto It2 = Names.crbegin();
    cout << *It2 << endl;
    It2++;
    cout << *It2 << endl;

    map<string, string> Favorites{{"Imane", "FOOD"}, {"Cookie", "Food"}, {"Skitty", "Food"}};

    auto It3 = Favorites.begin();

    while (It3 != Favorites.end())
    {
        cout << It3->first << " : " << It3->second << endl;
        It3++;
    }
}

void Test5()
{
    vector<int> V{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    auto start = V.begin() + 2;
    auto finish = V.end() - 3;

    while (start != finish)
    {
        cout << *start << endl;
        start++;
    }
}
int main()
{

    Test1();
    cout << endl;
    Test2();
    cout << endl;
    Test3();
    cout << endl;
    Test4();
    cout << endl;
    Test5();
    return (0);
}