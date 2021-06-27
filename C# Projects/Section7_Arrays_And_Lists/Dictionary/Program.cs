using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Dictionary
{
    class Program
    {
        static void Main(string[] args)
        {
            Employee[] Employees = new Employee[5];

            Employees[0] = new Employee("CEO", "Imane", 20, 100);
            Employees[1] = new Employee("Cook", "Amal", 16, 90);
            Employees[2] = new Employee("HR", "Cookie", 5, 70);
            Employees[3] = new Employee("Secretary", "Skitty", 17, 50);
            Employees[4] = new Employee("Developer", "Mimi", 13, 20);

            // Generic
            /* Dictionary<int, string> ADictionary = new Dictionary<int, string>();
            ADictionary.Add(1, "Imane"); */

            Dictionary<string, Employee> EmployeesDirectory = new Dictionary<string, Employee>();

            foreach(Employee EmployeeTmp in Employees) {
                EmployeesDirectory.Add(EmployeeTmp.getRole(), EmployeeTmp);
            }

            // Trying to get an Employee's information
            Employee Value;
            if (EmployeesDirectory.TryGetValue("CEO", out Value)) {
                /* Employee Empl = EmployeesDirectory[Employees[0].getRole()];
                Console.WriteLine($"{Empl.getRole()}, {Empl.getName()}, {Empl.getAge()}, {Empl.getRate()}"); */
                Console.WriteLine($"{Value.getRole()}, {Value.getName()}, {Value.getAge()}, {Value.getRate()}");   
            }

            System.Console.WriteLine();

            // Editing
            if (EmployeesDirectory.TryGetValue("HR", out Value)) {
                Value = EmployeesDirectory["HR"] = new Employee("HR", "Choko", 1, 200);
                Console.WriteLine($"{Value.getRole()}, {Value.getName()}, {Value.getAge()}, {Value.getRate()}");   
            }

            System.Console.WriteLine();

            // Deleting
            if (EmployeesDirectory.TryGetValue("Secretary", out Value)) {
                EmployeesDirectory.Remove("Secretary");
            }
            
            // Using KeyValuePair
            KeyValuePair<string, Employee> KVPEmployees = new KeyValuePair<string, Employee>();

            for (int i=0; i<EmployeesDirectory.Count; i++) {
                KVPEmployees = EmployeesDirectory.ElementAt(i);
                Console.WriteLine($"{KVPEmployees.Value.getRole()}");
                Console.WriteLine($"{KVPEmployees.Value.getName()}");
                Console.WriteLine($"{KVPEmployees.Value.getAge()}");
                Console.WriteLine($"{KVPEmployees.Value.getRate()}");
                System.Console.WriteLine();
            }
        }
    }
}
