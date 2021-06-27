using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Maths
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"Ceiling of {15.5}: {Math.Ceiling(15.5)}.");
            Console.WriteLine($"Floor of {15.5}: {Math.Floor(15.5)}.");

            int Num1 = 5;
            int Num2 = -6;

            Console.WriteLine($"Min between {Num1} and {Num2}: {Math.Min(Num1,Num2)}.");
            Console.WriteLine($"Max between {Num1} and {Num2}: {Math.Max(Num1,Num2)}.");       
            Console.WriteLine($"{Num1}^{Num2} = {Math.Pow(Num1,Num2)}.");    
            Console.WriteLine($"Pi is {Math.PI}.");
            Console.WriteLine($"Square{Num1}: {Math.Sqrt(Num1)}");
            Console.WriteLine($"Absolute of {Num2}: {Math.Abs(Num2)}");
            Console.WriteLine($"Cos({Num1}): {Math.Cos(Num1)}");
        }
    }
}
