using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Interface
{
    class Program 
    {
        private static void DisplayDoggos(DogShelter Dogs)  {

            foreach(Dog Doggo in Dogs) {
                if (!Doggo.getIsNaughty()) {
                    Doggo.GiveTreat(2);
                }
                else {
                    Console.WriteLine($"{Doggo.getName()} is naughty and shouldn't be treated with a treat !");
                }
            }
        }
        static void Main(string[] args)
        {
            Ticket Ticket1 = new Ticket(5);
            Ticket Ticket2 = new Ticket(5);

            Console.WriteLine($"{Ticket1.Equals(Ticket2)}");

            Chair ImaneChair = new Chair("FOOSH", "Pink","Gold");
            Chair CookieChair = new Chair("MEOW", "Black", "Wood");

            Car ImaneCar = new Car("BOOM", 250.0f, "Pink");

            ImaneCar.DestroyablesNearby.Add(ImaneChair);
            ImaneCar.DestroyablesNearby.Add(CookieChair);

            ImaneCar.Destroy();

            System.Console.WriteLine();

            Dog Belle = new Dog();
            Console.WriteLine($"{Belle.getName()}");
            Console.WriteLine($"{Belle.getIsNaughty()}");

            System.Console.WriteLine();

            Dog Cookie = new Dog("Cookie", true);
            Console.WriteLine($"{Cookie.getName()}");
            Console.WriteLine($"{Cookie.getIsNaughty()}");

            System.Console.WriteLine();

            DogShelter Dogs = new DogShelter();
            Dogs.getDogs();
            System.Console.WriteLine();

            Dogs.setDogs(Belle);
            Dogs.setDogs(Cookie);
        
            Dogs.getDogs();
            System.Console.WriteLine();

            List<Dog> Doggos = new List<Dog>();

            Dog Skitty = new Dog("Skitty", false);
            Dog Mimi = new Dog("Mimi", true);

            Doggos.Add(Skitty);
            Doggos.Add(Mimi);

            Dogs.setDogs(Doggos);
            Dogs.getDogs();
            System.Console.WriteLine();

            DisplayDoggos(Dogs);
        }
    }
}
