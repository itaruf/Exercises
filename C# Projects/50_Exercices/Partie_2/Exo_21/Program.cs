using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_21
{
    class Program
    {
        static void Main(string[] args)
        {
            Helper Helper1 = new Helper();
            Helper1.ToEuroLabel(100);
            Console.WriteLine(Helper1.ToEuroLabel(100));
            Console.WriteLine(Helper1.ToEuroLabel(500.25));            
            Console.WriteLine(Helper1.ToEuroLabel(6000000.58));
        }
    }
}
