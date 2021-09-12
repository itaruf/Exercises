#include <iostream>
#include <algorithm>

using namespace std;

int *apply_all(int *array, size_t array_length, int *array2, size_t array2_length)
{
    int *tmp = new int[array_length * array2_length];
    int k = 0;

    for (int j = 0; j < array2_length; j++)
    {
        for (int i = 0; i < array_length; i++)
        {
            tmp[k] = array[i] * array2[j];
            k++;
        }
    }
    return (tmp);
}

int main()
{
    int array[]{1, 2, 3, 4, 5};
    int array2[]{10, 20, 30};

    cout << sizeof(array) / sizeof(*array) << endl;
    cout << sizeof(array2) / sizeof(*array2) << endl;

    int *results = apply_all(&array[0], sizeof(array) / sizeof(*array), &array2[0], sizeof(array2) / sizeof(*array2));

    for (int i = 0; i < sizeof(array) / sizeof(*array) * sizeof(array2) / sizeof(*array2); i++)
    {
        cout << results[i] << " ";
    }
}