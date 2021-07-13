using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_40
{
    class Program
    {
        static void Main(string[] args)
        {            
            var misterBond = new Person(true, 35);
            var mrsRobinson = new Person(false, 35);

            Console.WriteLine(misterBond.Age);
            Console.WriteLine(mrsRobinson.Age);
        }
    }
    public class Person
    {
        public bool IsMan { get; set; }
        private int? _Age;
        public int? Age
        {
            get
            {
               if (IsMan) {
                   return(_Age);
               }
               else {
                   return(null);
               }
            } 
            set
            {
                _Age = value;
            }
        }
        public Person(bool IsMan, int Age)
        {
            this.IsMan = IsMan;
            this.Age = Age;
        }
    }
}
