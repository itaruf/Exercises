using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace DateTimeT
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime MyBirthDay = new DateTime(2000, 10, 19);

            Console.WriteLine($"{MyBirthDay}");

            System.Console.WriteLine();

            Console.WriteLine($"Year: {MyBirthDay.Year}");
            Console.WriteLine($"Month: {MyBirthDay.Month}");
            Console.WriteLine($"Day: {MyBirthDay.Day}");

            System.Console.WriteLine();

            Console.WriteLine($"Current Time: {DateTime.Now}");
            Console.WriteLine($"Current Time (Year): {DateTime.Now.Year}");
            Console.WriteLine($"Current Time (Month): {DateTime.Now.Month}");
            Console.WriteLine($"Current Time (Day): {DateTime.Now.Day}");
            Console.WriteLine($"Current Time: {DateTime.Now.TimeOfDay}");

            bool Success = false;
            do
            {
                System.Console.WriteLine("Enter your birthday in this format: yyyy-mm-dd");
                string Input =  Console.ReadLine();
                Success = DateTime.TryParse(Input, out MyBirthDay);
                if (Success) {
                    TimeSpan DaysPassed = DateTime.Now.Subtract(MyBirthDay);
                    Console.WriteLine($"Days passed since your birthday: {DaysPassed.Days}");
                }
                else {
                    Console.WriteLine($"Invalid input");
                }
            } while (!Success);
        }
    }
}
