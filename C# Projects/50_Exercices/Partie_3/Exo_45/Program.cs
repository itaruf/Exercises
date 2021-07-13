using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_45
{
    class Program
    {
        static void Main(string[] args)
        {
            foreach(var item in OneToHundred())
            {
                Console.WriteLine(item);
            }
        }
        public static int[] OneToHundred() {
            IEnumerable<int> Range = Enumerable.Range(1,100);
            return(Range.ToArray());
        }  
     } 
 }
