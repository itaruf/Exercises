using System;
using System.Collections.Generic;

namespace AverageScore
{
    public class AverageScore
    {
        public void CalculateAverageScore() {
            
            int InitialNumberOfStudents;
            string Input;
            bool Success;
            float Grade;
            float SumGrades = 0;
            var Style = System.Globalization.NumberStyles.AllowDecimalPoint;
            var Culture = System.Globalization.CultureInfo.InvariantCulture.NumberFormat;

            do {
                System.Console.Write("Enter the number of students: ");
                Input = Console.ReadLine();
                Success = Int32.TryParse(Input, out InitialNumberOfStudents);
                System.Console.WriteLine();
            } while (!Success);
            
            Console.WriteLine($"INOS: {InitialNumberOfStudents} students registered.");
            System.Console.WriteLine();

            List<float> StudentGrades = new List<float>(InitialNumberOfStudents);

            for (int i=0; i<InitialNumberOfStudents; i++) {
                do {
                    System.Console.Write($"Grade n°{i+1}: ");
                    Input = Console.ReadLine();
                    Success = Single.TryParse(Input, Style, Culture, out Grade);
                    if (Success) {
                        Grade = Single.Parse(Input, Culture);
                    }
                    else {
                        System.Console.WriteLine("Invalid input. Try again.");
                    }
                 } while (!Success);
                StudentGrades.Add(Grade);
            }

            foreach (var StudentGradesTMP in StudentGrades) {
                SumGrades += StudentGradesTMP;
            }

            System.Console.WriteLine();
            Console.WriteLine($"The mean of the class of {InitialNumberOfStudents} students is: {SumGrades/InitialNumberOfStudents}");
        }
    }
}