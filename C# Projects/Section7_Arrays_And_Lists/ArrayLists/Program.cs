using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace ArrayLists
{
    class Program
    {
        private static void AddElements(ArrayList ArrayL) {

            for (int i=1; i<=ArrayL.Capacity; i++) {
               ArrayL.Add(i);
            }
        }

        private static void DisplayArrayL(ArrayList ArrayL) {

            foreach (object ArrayLTmp in ArrayL) {
                Console.Write($"{ArrayLTmp} ");               
            }
            System.Console.WriteLine();
        }

        static void Main(string[] args)
        {
            // Undefined amount of objects
            ArrayList ArrayL = new ArrayList();
            // Defined amount of objects
            ArrayList ArrayL2 = new ArrayList(5);

            AddElements(ArrayL2);
            DisplayArrayL(ArrayL2);
            ArrayL2.Remove(2);
            DisplayArrayL(ArrayL2);
        }
    }
}
