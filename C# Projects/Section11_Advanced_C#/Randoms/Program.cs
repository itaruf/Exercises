using System;

namespace Randoms
{
    class Program
    {
        static void Main(string[] args)
        {
            Random Dice = new Random();
            int DiceValue;
            int NumberOfRand = 10;

            for (int i=0; i<NumberOfRand; i++) {
                DiceValue = Dice.Next(1,7); // from 1 to 6
                Console.WriteLine(DiceValue);
            }      
        }
    }
}
