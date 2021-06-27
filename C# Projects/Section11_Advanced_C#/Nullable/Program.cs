using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Nullable
{
    class Program
    {
        static void Main(string[] args)
        {
            int? Num1 = null; 
            int? Num2 = 1337;

            double? Num3 = new Double?();
            double? Num4 = 3.14;

            bool? BoolValue = new bool?();
            
            Console.WriteLine($"{Num1}, {Num2}, {Num3}, {Num4}, {BoolValue}");
            System.Console.WriteLine();

            bool? IsMale = null;

            if (IsMale == true) {
                System.Console.WriteLine("Male.");
            }
            else if (IsMale == false) {
                System.Console.WriteLine("Female.");
            }
            else {
                System.Console.WriteLine("No gender specified");
            }

            System.Console.WriteLine();

            double? Num5 = 13.1;
            double Num6 = (double) Num5;

            double? Num7 = null;
            double Num8 = Num7 ?? (double) Num6; // if (Num7 == null) { Num8 = (double) Num6 }

            Console.WriteLine($"{Num6}");
            Console.WriteLine($"{Num8}");            
        }
    }
}
