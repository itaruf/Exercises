using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_22
{
    class Program
    {
        private static void Display(int[] Array) {
            foreach(int ArrayTmp in Array) {
                Console.Write($"{ArrayTmp} ");
            }
            System.Console.WriteLine();
        }
        public static int[] PairAndSquared(in int[] Array) {
            
            // utilisation de linq
            IEnumerable<int> Tmp = 
            from ArrayTmp in Array
            where ArrayTmp % 2 == 0
            select ArrayTmp;

            return(Tmp.ToArray());
        }
    
        static void Main(string[] args)
        {
            int[] Array = {1,2,3,4,5,6};
            Array = PairAndSquared(Array);
            Display(Array);

            int[] Array2 = {1,3,5,7,9};
            Array2 = PairAndSquared(Array2);
            Display(Array2);
        }
    }
}
