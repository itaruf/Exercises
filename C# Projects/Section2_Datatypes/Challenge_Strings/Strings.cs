using System;
namespace Program
{
    public class Strings
    {
        public void UseStringsMethods() {
            string Mystring = "";
            System.Console.Write("Please enter your name and press enter: ");
            Mystring = System.Console.ReadLine();

            System.Console.WriteLine(Mystring.ToUpper());
            System.Console.WriteLine(Mystring.ToLower());
            System.Console.WriteLine("The string entered is: "+Mystring);
            
            int StartIndex = 2;

            if (StartIndex > Mystring.Length - 1) {
                System.Console.WriteLine("Starting index out-ranging the length");

            }
            else {
                System.Console.WriteLine(Mystring.Substring(StartIndex));
            }
        }
        public void FindOccurrence() {
            string Mystring = "";
            System.Console.Write("Please enter a string and press enter: ");
            Mystring = System.Console.ReadLine();

            char CharacterToSearch = '?';
            System.Console.Write("Enter the character to search: ");
            CharacterToSearch = Console.ReadLine()[0];

            for (int IndexOccur=0; IndexOccur<Mystring.Length; IndexOccur++) {
                if (Mystring[IndexOccur] == CharacterToSearch) {
                    System.Console.WriteLine("Index of the occurrence: "+IndexOccur);
                    break;
                }
                else if (IndexOccur == Mystring.Length - 1 && Mystring[IndexOccur] != CharacterToSearch) {
                    System.Console.WriteLine("Character not found.");
                }
            }
        }
        public void NameConcatenation() {

            string FirstName = "";
            System.Console.Write("Enter your first name: ");
            FirstName = Console.ReadLine();
            
            string LastName = "";
            System.Console.Write("Enter your last name: ");
            LastName = Console.ReadLine();

            System.Console.WriteLine(FirstName + " " + LastName);
        }
    }
}