using System;

namespace Exo_42
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"{IsPrime(4)}");
            Console.WriteLine($"{IsPrime(2)}");
            Console.WriteLine($"{IsPrime(17)}");
        }
        public static bool IsPrime(int A)
        {
            if (A <= 0) {
                Console.WriteLine($"Number > 0 required.");
                return(false);
            }
            if (A == 1) {
                return(true);
            }
            for (int i=2; i<A; i++) {
                decimal D = (decimal) A / (decimal) i;
                if ( (D % 1) == 0 )
                {
                    return(true);
                }
            }
            return(false);
        } 
    } 
}