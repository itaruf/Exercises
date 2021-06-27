using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Interface
{
    public class Dog
    {
        private string Name {get; set;}
        private bool IsNaughty {get; set;}
        public Dog() : this("Undefined", false){  
        }
        public Dog(string Name, bool IsNaughty)
        {
            this.Name = Name;
            this.IsNaughty = IsNaughty;
        }
        public bool getIsNaughty() {
            return this.IsNaughty;
        }
        public void setIsNaughty(bool IsNaughty) {
            this.IsNaughty = IsNaughty;
        }
        public string getName() {
            return this.Name;
        }
        public void setName(string Name) {
            this.Name = Name;
        }
        // Member methods
        public void GiveTreat(int NumOfTreats) {
            System.Console.WriteLine($"{this.Name} said \"WOOF\" {NumOfTreats} times!");
            
        }
    }
    public class DogShelter : IEnumerable<Dog> {
        public List<Dog> Dogs = new List<Dog>();
        public void getDogs() {
            foreach(Dog Doggo in this.Dogs) {
                Console.WriteLine($"Doggo: {Doggo.getName()}");
            }
        }
        public void setDogs(Dog Doggo) {
            this.Dogs.Add(Doggo);
        }
        public void setDogs(List<Dog> Doggos) {
            this.Dogs = Doggos;
        }

        IEnumerator<Dog> IEnumerable<Dog>.GetEnumerator() // Generic
        {
            return(Dogs.GetEnumerator());
        }

        IEnumerator IEnumerable.GetEnumerator() // Non generic
        {
            throw new NotImplementedException();
        }
        public DogShelter(): this(new Dog()) {
        }
        public DogShelter(Dog Doggo) {
            this.Dogs.Add(Doggo);
        }
    }
}