using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_48
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Animal> Animals = new List<Animal>() {
                new Animal("Cookie"),
                new Animal("Skitty"), 
                new Animal("Mimi"),
                new Animal("Imane") 
                
            };
            Animal[] MyAnimals = new Animal[2];
            MyAnimals = GetFirstAndLast<Animal>(Animals);
            Console.WriteLine($"{MyAnimals[0].Name}, {MyAnimals[1].Name}");
            
        }
        public static T[] GetFirstAndLast<T>(List<T> MyList) where T : class {

            if (MyList.Count < 2) {
                return (null);
            }

            T[] MyArray = new T[2];

            MyArray[0] = MyList[0];
            MyArray[1] = MyList[1];
            
            return(MyArray);
        }
    }

    public class Animal {
        public string Name;
        public Animal(string Name) {
            this.Name = Name;
        } 
    }
}
