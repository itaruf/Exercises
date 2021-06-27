using System;

namespace Structs
{
    struct Game  {
        public string Name;
        public string Developer;
        public double Rating;
        public string ReleaseDate;

        public void Display() {

            Console.WriteLine($"Game's Name: {Name}");
            Console.WriteLine($"Developer: {Developer}");
            Console.WriteLine($"Game's Rating: {Rating}");
            Console.WriteLine($"Game's Release: {ReleaseDate}");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            Game Game1;
            Game1.Name = "Pokémon Go";
            Game1.Developer = "Nintendo";
            Game1.Rating = 10;
            Game1.ReleaseDate = "05.05.2016";

            Game1.Display(); // Ne peut être utilisé que si tous les attributs ont été assignés
        }
    }
}
