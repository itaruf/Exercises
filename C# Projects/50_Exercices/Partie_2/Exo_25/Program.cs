using System;

namespace Exo_25
{
    class Program
    {
        static void Main(string[] args)
        {
            string S1 = "World!";
            string S2 = "Hello";
            
            Console.WriteLine($"{S1} {S2}");

            SwitchStrings(ref S1, ref S2);

            Console.WriteLine($"{S1} {S2}");
        }
    
        public static void SwitchStrings(ref string S1, ref string S2){
           string StrTmp = S1;
           S1 = S2;
           S2 = StrTmp;
        }
    }
}
