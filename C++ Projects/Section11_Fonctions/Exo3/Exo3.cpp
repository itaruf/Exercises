#include <iostream>
#include <cmath>

using std::cin;
using std::cout;
using std::endl;

void AreaCalc();
int FindArea(int Length);
double FindArea(double Length, double Width);

void AreaCalc()
{
    int SquareArea{FindArea(2)};
    double RectangleArea{FindArea(4.5, 2.3)};

    cout << "The area of the square is " << SquareArea << "\n"
         << "The area of the rectangle is " << RectangleArea;
}

int FindArea(int Length)
{
    return (static_cast<int>(pow(Length, 2)));
}

double FindArea(double Length, double Width)
{
    return (Length * Width);
}

int main()
{
    AreaCalc();
    return (0);
}