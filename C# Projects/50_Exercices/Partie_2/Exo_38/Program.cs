using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_38
{
    class Program
    {
        static void Main(string[] args)
        {
            HowManyDays(new DateTime(2000,8,6), new DateTime(2001,3,5));
        }
        public static int HowManyDays(DateTime D1, DateTime D2)
        {
            /* Console.WriteLine($"{D1.AddDays(D2.Day)}");
            Console.WriteLine($"{D1.AddMonths(D2.Month)}");
            Console.WriteLine($"{D1.AddYears(D2.Year)}"); */

            TimeSpan TS = D2 - D1;
            Console.WriteLine($"{TS.TotalDays}");
            return((int) TS.TotalDays);
        }
    }
}
