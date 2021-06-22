#include <iostream>
#include <vector>

using std::cin;
using std::cout;
using std::endl;
using std::vector;

vector<int> UseArray()
{
    int arr[10]{};
    arr[0] = 100;
    arr[9] = 1000;

    vector<int> v(arr, arr + sizeof(arr) / sizeof(*arr));

    return (v);
}

vector<int> UseVector()
{
    int numberOfValues = 10;
    vector<int> v;

    for (int i{1}; i <= 10; i++)
    {
        v.push_back(i);
    }

    return (v);
}

void PrintVector(vector<int> v)
{
    cout << "\nPrintVector: " << endl;

    for (int i{0}; i < v.size(); i++)
    {
        cout << v[i] << "\t";
    }
    cout << endl;
}

vector<vector<int>> TwoDVectors(vector<vector<int>> v)
{
    cout << "\nTwoDVectors: " << endl;
    //Access elements of a 2D vector
    cout << v.at(0).at(0) << endl;

    return (v);
}

int main()
{
    vector<int> v;
    v = UseArray();
    PrintVector(v);
    v = UseVector();
    PrintVector(v);

    vector<int> Vint{1, 2, 3};
    /* Vint[5] = 2;
    cout << Vint.at(0) + Vint[5]; */
    PrintVector(Vint);

    vector<vector<int>> _2DVector{
        {1},
        {2},
    };
    _2DVector.at(0).at(0) = 5;
    cout << _2DVector.size() << endl;
    TwoDVectors(_2DVector);
}