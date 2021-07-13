using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_30
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime DT = new DateTime(2020,6,8);
            System.Console.WriteLine(ToShortDate(DT));
            System.Console.WriteLine(ToFrenchFullDate(DT));
        }
         public static string ToShortDate(DateTime D) {
           return ($"{D.Date.ToString("yyyy/MM/dd HH:mm")}");
        }
         public static string ToFrenchFullDate(DateTime D) {
           /* return ($"{D.ToString("F", new System.Globalization.CultureInfo("fr-FR"))}"); */
            return ($"{D.ToString("dd/MM/yyyy HH:mm")}");
        }
    }
}
