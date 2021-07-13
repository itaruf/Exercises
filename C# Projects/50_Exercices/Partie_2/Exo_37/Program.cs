using System;

namespace Exo_37
{
    class Program
    {
        static void Main(string[] args)
        {
            Tuple<char,char> Initiales = new Tuple<char, char>(' ', ' ');
            Initiales = GetInitial("Imane Taruf");
            Console.WriteLine($"{Initiales.Item1}, {Initiales.Item2}"); 
            
        }
        public static Tuple<char,char> GetInitial(string Name) {
            string[] SplitName  = Name.Split(" ");
            /* Console.WriteLine($"{SplitName[0][0]}");
            Console.WriteLine($"{SplitName[1][0]}");

            (char, char) Initiales = (SplitName[0][0], SplitName[1][0]); */

            /* Initiales.Item1 = SplitName[0][0];
            Initiales.Item2 = SplitName[1][0]; */

            Tuple<char,char> Initiales = new Tuple<char, char>(SplitName[0][0], SplitName[1][0]);
            return (Initiales);
        }
    }
}
