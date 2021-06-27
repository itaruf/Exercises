using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Parameters
{
    public class Program
    {
        static void Main(string[] args)
        {
            var Cars = new List<Car> {
                new Audi("A4", "Pink", 500.0f),
                new BMW("B2", "Red", 250.5f)
            };

            foreach (var CarsTmp in Cars) {
                CarsTmp.Repair(); // Overriden
                System.Console.WriteLine();
            }
            
            Car NewAudi = new Audi("A4", "Pink", 500.0f);
            Car NewBMW = new BMW("B2", "Red", 250.5f);

            NewAudi.setCarIDInform(0, "Imane");
            NewAudi.getCarIDInform();
            NewAudi.ShowDetails(); // Utilise la méthode de la base class

            NewBMW.setCarIDInform(1, "Cookie");
            NewBMW.getCarIDInform();
            NewBMW.ShowDetails(); // Utilise la méthode de la base class

            System.Console.WriteLine();

            Audi MiniAudi = new Audi("A4", "Pink", 500.0f);
            BMW MiniBMW = new BMW("B2", "Red", 250.5f);

            MiniAudi.ShowDetails(); // Utilise la methode dans la classe dérivée
            MiniBMW.ShowDetails(); // Utilise la methode dans la classe dérivée

            M3 MyM3 = new M3("M3", "Black", 10.0f);
            MyM3.Repair();
        }
    }
}
