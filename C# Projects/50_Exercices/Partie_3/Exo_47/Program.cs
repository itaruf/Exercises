using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_47
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee E1 = new Employee("Imane", new DateTime(2021,6,12));
            Employee E2 = new Employee("Cookie", DateTime.Now); 
            Employee E3 = new Employee("Skitty", DateTime.Now);   

            List<Employee> Employees = new List<Employee>(); 
            
            Employees.Add(E1);
            Employees.Add(E2);
            Employees.Add(E3);

            Console.WriteLine($"{E1.Name}");
            Console.WriteLine($"{E1.HireDate.ToString()}");
            System.Console.WriteLine();

            Console.WriteLine($"{E2.Name}");
            Console.WriteLine($"{E2.HireDate.ToString()}");
            System.Console.WriteLine();

            Exercise E = new Exercise();
            IEnumerable<Employee> IEmployees = E.GetRecentlyHiredEmployees(Employees); 

            foreach (Employee Item in IEmployees.ToList()) {
                Console.WriteLine($"{Item.Name}");   
                Console.WriteLine($"{Item.HireDate}");  
            }
            /* Console.WriteLine($"{IEmployees.ToList().ElementAt(0).Name}");
            Console.WriteLine($"{IEmployees.ToList().ElementAt(1).Name}"); */
        }
    }
    public class Employee
    {
        public string Name { get; set; }
        public DateTime HireDate { get; set; }
        public Employee(string Name, DateTime HireDate)
        {
            this.Name = Name;
            this.HireDate = HireDate; 
        }
    }
    public class Exercise
    {
        public IEnumerable<Employee> GetRecentlyHiredEmployees(List<Employee> Datas){
            return (Datas.Where(IsRecentlyHired));
        }
        Func<Employee, bool> IsRecentlyHired = x => x.HireDate >= DateTime.Today.AddDays(-30);
    } 
}
