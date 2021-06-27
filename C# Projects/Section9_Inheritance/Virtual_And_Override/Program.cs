using System;

namespace Virtual_n_Override
{
    class Program
    {
        static void Main(string[] args)
        {
            Dog Belle = new Dog("Belle", 13, true, true);
            Belle.Eat();
            Belle.Play();
            Belle.MakeSound();

            System.Console.WriteLine();
            
            Dog Rex = new Dog("Rex", 75, false, false);
            Rex.Eat();
            Rex.Play();
            Rex.MakeSound();

        }
    }
}
