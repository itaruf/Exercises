using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Hashtables
{
    public class Student
    {
        //Member attributes
        private int ID;
        private string Name;
        private float GPA;

        public int getID() {
            return this.ID;
        }

        public void setID(int ID) {
            this.ID = ID;
        }

        public string getName() {
            return this.Name;
        }

        public void setName(string Name) {
            this.Name = Name;
        }

        public float getGPA() {
            return this.GPA;
        }

        public void setGPA(float GPA) {
            this.GPA = GPA;
        }

        public Student() : this(0,"Undefined",0.0f) {
            System.Console.WriteLine("Default constructor called.");
        }
        public Student(int ID, string Name, float GPA) {
            this.ID = ID;
            this.Name = Name;
            this.GPA = GPA;
        }
        ~Student() {
            System.Console.WriteLine("Destructor called.");
        }

    }
}