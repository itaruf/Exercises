using System;

namespace Exo_41
{
    class Program
    {
        public static int index = 0;
        public static int Result = 0;
        public static void Main(string[] args)
        {
            Result = Fibonacci(3);
            Console.WriteLine($"{Result}");
            Result = Fibonacci(5);
            Console.WriteLine($"{Result}");
            Result = Fibonacci(9);
            Console.WriteLine($"{Result}");
        }
        public static int Fibonacci(int position) 
        {
            if (position == 1) {
                return(1);
            }
            if (position == 2) {
                return(1);
            }
            return (Fibonacci(position - 2) + Fibonacci(position - 1));
        }
    }
}
