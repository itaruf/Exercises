using System;

namespace ParamsKeyword
{
    class Program
    {
        private static void DisplayStringArray(params string[] Array) {

            foreach (string ArrayTmp in Array) {
                Console.Write($"{ArrayTmp} ");
            }
        }

        private static void DisplayObjectArray(params object[] Array) {
                
                foreach (object ArrayTmp in Array) {
                    Console.Write($"{ArrayTmp} ");
            }
        }

        private static int Min(params int[] Numbers) {

                int Min = int.MaxValue;

                foreach(int NumbersTmp in Numbers) {
                    if (Min > NumbersTmp) {
                        Min = NumbersTmp;
                    }
                }
                return(Min);
        }
        static void Main(string[] args) 
        {
            string[] ArrayString = {"a","b","c"};
            object[] ArrayObjects = {"a",'c',1};

            DisplayStringArray(ArrayString);

            System.Console.WriteLine();

            DisplayObjectArray(ArrayObjects);

            System.Console.WriteLine();

            int MinValue = Min(1,2,3,4,5);
            System.Console.WriteLine($"{MinValue}");
            
        }
    }
}
