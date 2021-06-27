using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Inheritance_Challenge_2
{
    public class Boss : Employee
    {
        protected string CompanyCar;
        public Boss() : base() {
            CompanyCar = "Undefined";
        }
        public Boss(string CompanyCar, string Role, string LastName, float Salary) : base(Role, LastName, Salary)
        {
            this.CompanyCar = CompanyCar;
        }
        public string getCompanyCar() {
            return this.CompanyCar;
        }
        public void setCompanyCar(string CompanyCar) {
            this.CompanyCar = CompanyCar;
        }
        public void Lead() {
            System.Console.WriteLine($"{this.LastName} is a boss");
        }
    }
}