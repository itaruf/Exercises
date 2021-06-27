using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Inheritance_Challenge_2
{
    public class Employee
    {
        protected string Role;
        protected string LastName;
        protected float Salary;
        public Employee() : this("Undefined", "Undefined", 0.0f) {
            System.Console.WriteLine("Default constructor called in Employee");
        }
        public Employee(string Role, string LastName, float Salary)
        {
            System.Console.WriteLine("Constructor called in Employee");
            this.Role = Role;
            this.LastName = LastName;
            this.Salary = Salary;
        }
        public string getRole() {
            return this.Role;
        }
        public void setRole(string Role) {
            this.Role = Role;
        }
        public string getLastName() {
            return this.LastName;
        }
        public void setLastName(string LastName) {
            this.LastName = LastName;
        }
        public float getSalary() {
            return this.Salary;
        }
        public void setSalary(float Salary) {
            this.Salary = Salary;
        }
        public virtual void Work() {
            Console.WriteLine($"{this.LastName} is working");
        }
        public virtual void Pause() {
            Console.WriteLine($"{this.LastName} is taking a pause.");     
        }
        public virtual void Display() {
            Console.WriteLine($"Role: {this.Role}, Last Name: {this.LastName}, Salary: {this.Salary}");
        }
    }
}