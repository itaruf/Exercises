using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Inheritance_Challenge_2
{
    public class Program
    {
        static void Main(string[] args)
        {
            Employee Imane = new Employee();

            Imane.Work();
            Imane.Pause();
            Imane.Display();

            System.Console.WriteLine();

            Boss Cookie = new Boss("Mercedes","CEO","Cookie",5000.0f);

            Cookie.Work();
            Cookie.Pause();
            Cookie.Lead();
            Cookie.Display();     

            Trainee Skitty = new Trainee("Apprentice","Skitty", 5, 10,5000.0f);

            System.Console.WriteLine();

            Skitty.Work();
            Skitty.Pause();
            Skitty.Display(); 
        }
    }
}
