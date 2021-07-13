using System;

namespace Exo_29
{
    class Program
    {
        static void Main(string[] args)
        {
            Person p1 = new Person("John", 31);
            Person p2 = p1; // pointeur alloué sur le tas qui va pointer sur p1
            
            p2.Name = "Alice";
            p2.Age = 42;
            
            Console.WriteLine($"My Name is {p1.Name} and i am {p1.Age} years old");
            Console.WriteLine($"My Name is {p2.Name} and i am {p2.Age} years old");
        }
    }

    public struct Person
    {
        public Person(string Name, int Age)
        {
            this.Name = Name;
            this.Age = Age;
        }

        public string Name { get; set; }
        public int Age { get; set; }
    }
}
