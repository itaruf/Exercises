using System;

namespace JaggedArrays
{
    class Program
    {
        static void Main(string[] args)
        {
                       
            // Jagged array = Arrays within an array
            int[][] JaggedArray = new int[3][]; // Jagged Array which contains 3 cases in which is stored an array of x elements

            JaggedArray[0] = new int[] {1,2,3};
            JaggedArray[1] = new int[] {4,5};
            JaggedArray[2] = new int[] {6};

            foreach (int[] JaggedArrayTmp in JaggedArray) {
                foreach (int JATmp in JaggedArrayTmp) {
                    Console.Write($"{JATmp} ");
                }
                System.Console.WriteLine();
            }
        }
    }
}
