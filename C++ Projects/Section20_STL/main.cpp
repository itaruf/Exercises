#include <iostream>
#include <vector>

using namespace std;

// Class
class GFG
{

public:
    float x, y;

    // Parameterized Constructor
    GFG(float x, float y)
        : x(x), y(y)
    {
    }

    // Copy Constructor
    GFG(const GFG &GFG)
        : x(GFG.x), y(GFG.y)
    {
        cout << "Copied" << endl;
    }
    // Move Constructor
    GFG(GFG &&GFG) : x{GFG.x}, y{GFG.y}
    {
        cout << "Moved" << endl;
        GFG.x = 0;
        GFG.y = 0;
    }
};

// Driver Code
int main()
{
    // Vector of object of GFG class
    // is created
    vector<GFG> vertices;
    vertices.reserve(3);

    // Inserting elements in the object
    // created using push_back() method

    // Custom input entries
    cout << "First" << endl;
    vertices.push_back(std::move(GFG(1, 2)));
    cout << endl;

    cout << "Second" << endl;

    vertices.push_back(std::move(GFG(4, 5)));
    cout << endl;

    cout << "Third" << endl;
    vertices.push_back(std::move(GFG(7, 8)));
    cout << endl;

    return 0;
}