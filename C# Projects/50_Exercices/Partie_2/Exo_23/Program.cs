using System;

namespace Exo_23
{
    class Program
    {
        static void Main(string[] args)
        {
            var a = Add(1, 2);
            var b = Add(17, 13, 4);
            var c = Add(90, 10, 5, 4);
            
            Console.WriteLine(a); //3
            Console.WriteLine(b); //34
            Console.WriteLine(c); //109
        }
    
        // Compléter la fonction Add
        public static int Add(params int[] Numbers){
            int sum = 0;
            for (int i=0; i<Numbers.Length; i++) {
                sum += Numbers[i];
            }
            return(sum);
        }
    }
}
