using System;

namespace Exo_33
{
    class Program
    {
        private static int Result;
        public static void Main(string[] args)
        {
            Result = Factorial(5);
            Console.WriteLine($"{Result}");
        }
        public static int Factorial(int n){
            if (n < 0) {
                Console.WriteLine($"Can't use negative numbers.");
                return(-1);
            }
            else if (n == 0) {
                return(1);
            }
            else {
                return (n * Factorial(n -1));
            }
        }
    }
}
