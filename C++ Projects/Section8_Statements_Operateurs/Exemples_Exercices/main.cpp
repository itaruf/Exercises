#include <iostream>
#include <tuple>

using std::cin;
using std::cout;
using std::endl;

void AssignementOperator()
{
    cout << "AssignmentOperator" << endl;

    //----WRITE YOUR CODE BELOW THIS LINE----
    // Declare num1 as an integer and initialize it to 13.
    int num1{13};
    // Declare num2 as an integer and initialize it to 0.
    int num2{2};
    // Assign the value 5 to num1
    num1 = 5;
    // Assign the value of num1 to num2
    num2 = num1;
    //----WRITE YOUR CODE ABOVE THIS LINE----
    //----DO NOT MODIFY THE CODE BELOW THIS LINE----

    cout << num1 << " " << num2 << std::endl;
}

int ArithmeticOperator(int number)
{
    cout << "ArithmeticOperator" << endl;

    int original_number{number};

    //----WRITE YOUR CODE BELOW THIS LINE----

    //-- Multiply number by 2 and assign the result back to number
    number *= 2;
    //-- Add 9 to number and assign the result back to number
    number += 9;
    //-- Subtract 3 from number and assign the result back to number
    number -= 3;
    //-- Divide number by 2 and assign the result back to number
    number /= 2;
    //-- Subtract original_number from number and assign the result back to number
    number -= original_number;
    //-- Take the modulus 3 (%) of number and assign it back to number
    number %= 3;
    //----WRITE YOUR CODE ABOVE THIS LINE----

    return number;
}

void IncrementOperator()
{
    cout << "IncrementOperator" << endl;

    int i{5};
    cout << i << endl;

    int j = ++i; // First increase i, then affect the current value of i
    cout << j << endl;
    cout << i << endl;

    j = i++; // First affect the current value of i, then increase i
    cout << j << endl;
    cout << i << endl;
}

void DecrementOperator()
{
    cout << "DecrementOperator" << endl;

    int i{5};
    cout << i << endl;

    int j = --i; // First increase i, then affect the current value of i
    cout << j << endl;
    cout << i << endl;

    j = i--; // First affect the current value of i, then increase i
    cout << j << endl;
    cout << i << endl;
}

int main()
{
    AssignementOperator();
    int number{2};
    number = ArithmeticOperator(number);
    cout << number << std::endl;
    IncrementOperator();
    DecrementOperator();
}