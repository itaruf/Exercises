using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Program
{
    public class Person
    {
        // Member attributes
        private string FirstName;
        private string LastName;

        // Constructors:
        // Default Constructor
        public Person() : this("Undefined", "Undefined"){
            System.Console.WriteLine("Default Constructor Called.");
        }
        // Overloaded Constructors
        public Person(string FirstName, string LastName) {
            System.Console.WriteLine("Overloaded Constructor Called.");
            this.FirstName = FirstName;
            this.LastName = LastName;
        }
        public Person(string FirstName) : this(FirstName, "Undefined") {
            System.Console.WriteLine("(2)Overloaded Constructor Called.");
            this.FirstName = FirstName;
        }
        // Member methods
        public void SetFirstName(string FirstName) {
            this.FirstName = FirstName;
        }
        public void SetLastName(string LastName) {
            this.LastName = LastName;
        }
        public string GetFirstName() {
            
            return(FirstName);
        }
        public string GetLastName() {

            return(LastName);
        }
        //Destructor
        ~Person() {
            System.Console.WriteLine("Destructor Called For Person");
        }
    }
}   