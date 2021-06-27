using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Virtual_n_Override
{
    public class Animals
    {
        protected string Name;
        protected int Age;
        protected bool IsHungry;

        public Animals() : this("Undefined", 0, false) {
            System.Console.WriteLine("Default constructor called for Animals.");
        }
        public Animals(string Name, int Age, bool IsHungry) {
            System.Console.WriteLine("constructor called for Animals.");
            this.Name = Name;
            this.Age = Age;
            this.IsHungry = IsHungry;
        }
        public string getName() {
            return this.Name;
        }
        public void setName(string Name) {
            this.Name = Name;
        }
        public int getAge() {
            return this.Age;
        }
        public void setAge(int Age) {
            this.Age = Age;
        }

        public bool getIsHungry() {
            return this.IsHungry;
        }
        public void setIsHungry(bool IsHungry) {
            this.IsHungry = IsHungry;
        }
        public virtual void Eat() {
            if (IsHungry) {
                System.Console.WriteLine($"{Name} is eating");
            }
            else {
                System.Console.WriteLine($"{Name} is not hungry");
            }
        }
        public virtual void Play() {
            Console.WriteLine($"{Name} is playing");
        }
        public virtual void MakeSound() {
            System.Console.WriteLine("AYAYA");
        }
    }
}