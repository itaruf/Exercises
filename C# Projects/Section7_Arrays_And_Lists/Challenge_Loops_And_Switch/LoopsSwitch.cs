using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Program
{
    public class LoopsSwitch
        {
        static bool Success = false;
        static int Value;
        static bool BValue;
        public static void CheckForString(string Input) {
            
            Success = Input.GetType() == typeof(string);
            if (Success) {
                System.Console.WriteLine($"Input: {Input}");
                System.Console.WriteLine($"Datatype: {Input.GetType()}");
            }
            else {
                System.Console.WriteLine("Not a String");
            }
        }

        public static void CheckForInt(string Input) {

            Success = Int32.TryParse(Input, out Value);
            if (Success) {
                System.Console.WriteLine($"Input: {Value}");
                System.Console.WriteLine($"Datatype: {Value.GetType()}");
            }
            else {
                System.Console.WriteLine("Not an Int");
            }
        }

        public static void CheckForBoolean(string Input) {

            Success = Boolean.TryParse(Input, out BValue);
            if (Success) {
                System.Console.WriteLine($"Input: {BValue}");
                System.Console.WriteLine($"Datatype: {BValue.GetType()}");
            }
            else {
                System.Console.WriteLine("Not a Boolean");
            }
        }

        public static void AskForInput(ref string Input) {

            do {
                System.Console.Write("Enter a String, an Int or a Boolean: ");
                Input = Console.ReadLine();
                System.Console.WriteLine();

                CheckForInt(Input);

                if (!Success) 
                    CheckForBoolean(Input);
                if (!Success)
                    CheckForString(Input);

            } while (!Success);
        }
        public static void Input() {

            int Choice = 0;
            string Input = "";
            AskForInput(ref Input);

            do {
                do {
                    System.Console.Write("\nPress 1 for Integer\nPress 2 for String\nPress 3 for Boolean\nPress 4 to exit the program\nChoice: ");
                    Input = Console.ReadLine();

                    System.Console.WriteLine();

                    CheckForInt(Input);
                    Choice = Value;

                } while (!Success);

                switch(Choice) {
                    case 1:
                        System.Console.Write("\nEnter an Integer: ");
                        Input = Console.ReadLine();
                        CheckForInt(Input);
                        break;
                    case 2:
                        System.Console.Write("\nEnter a String: ");
                        Input = Console.ReadLine();
                        CheckForString(Input);
                        break;
                    case 3:
                        System.Console.Write("\nEnter a Boolean: ");
                        Input = Console.ReadLine();
                        CheckForBoolean(Input);                    
                        break;
                    case 4:
                        System.Console.Write("\nEnding the program.");
                        System.Environment.Exit(1);
                        break;
                }
            } while (Choice != 1 || Choice != 2 || Choice!= 3 || Choice != 4);
        }

        public static void Main(string[] args)
        {
            LoopsSwitch.Input();
        }
    }
}