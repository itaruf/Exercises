using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Inheritance_Challenge_2
{
    public class Trainee : Employee
    {
        protected int WorkingHours;
        protected int SchoolHours;
        public Trainee() : base() {
            this.WorkingHours = 0;
            this.SchoolHours = 0;
        }
        public Trainee(string Role, string LastName, int WorkingHours, int SchoolHours, float Salary) : base(Role, LastName, Salary) {
            this.WorkingHours = WorkingHours;
            this.SchoolHours = SchoolHours;
        }
        public int getWorkingHours() {
            return this.WorkingHours;
        }
        public void setWorkingHours(int WorkingHours) {
            this.WorkingHours = WorkingHours;
        }
        public int getSchoolHours() {
            return this.SchoolHours;
        }
        public void setSchoolHours(int SchoolHours) {
            this.SchoolHours = SchoolHours;
        }
        public override void Work()
        {
            base.Work();
            System.Console.WriteLine($"Number of working hours: {this.WorkingHours} ");
            System.Console.WriteLine($"Number of school hours: {this.SchoolHours}");
        }
    }
}