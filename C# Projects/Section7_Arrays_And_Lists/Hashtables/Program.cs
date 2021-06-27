using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Hashtables
{
    class Program
    {
        private static void UseHashtable() {

            // Non generic
            Hashtable StudentsTable = new Hashtable();

            Student[] Students = new Student[6];

            Students[0] = new Student(1, "Imane", 100.0f);
            Students[1] = new Student(2, "Amal", 90.0f);
            Students[2] = new Student(3, "Cookie", 50.0f);
            Students[3] = new Student(4, "Skitty", 40.0f);
            Students[4] = new Student(5, "Mimi", 20.0f);
            Students[5] = new Student(5, "Choko", 5.0f);

            foreach (Student StudentTmp in Students) {
                if (StudentsTable.ContainsKey(StudentTmp.getID())) {
                    Console.WriteLine($"A student with the ID {StudentTmp.getID()} already exists");   
                }
                else {
                    StudentsTable.Add(StudentTmp.getID(), StudentTmp);
                    Console.WriteLine($"Student {StudentTmp.getName()} with ID {StudentTmp.getID()} added.");
                }
            }
        }
        static void Main(string[] args)
        {
            Hashtable StudentsTable = new Hashtable();

            Student Stud1 = new Student(1, "Imane", 100.0f);
            Student Stud2 = new Student(2, "Amal", 90.0f);
            Student Stud3 = new Student(3, "Cookie", 50.0f);
            Student Stud4 = new Student();

            StudentsTable.Add(Stud1.getID(), Stud1); // Stud1.getId() est une clé, Stud1 est une valeur associée
            StudentsTable.Add(Stud2.getID(), Stud2);
            StudentsTable.Add(Stud3.getID(), Stud3);
            StudentsTable.Add(Stud4.getID(), Stud4);

            Student StoredStudent1 = (Student) StudentsTable[Stud1.getID()];

            Console.WriteLine($"ID: {StoredStudent1.getID()}, Name: {StoredStudent1.getName()}, GPA: {StoredStudent1.getGPA()}");
            
            System.Console.WriteLine();
           
            foreach (DictionaryEntry Entry in StudentsTable) {
               Console.WriteLine($"{ ((Student) Entry.Value).getID()}, { ((Student) Entry.Value).getName() }, { ( (Student) Entry.Value).getGPA() } ");
            }

            System.Console.WriteLine();

            foreach (Student StudentTmp in StudentsTable.Values) {
               Console.WriteLine($"{(StudentTmp).getID()}, {StudentTmp.getName()}, {StudentTmp.getGPA()} ");
            }

            System.Console.WriteLine();

            UseHashtable();
        }
    }
}
