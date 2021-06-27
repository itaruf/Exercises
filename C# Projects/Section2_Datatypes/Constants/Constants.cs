using System;
namespace Program
{
    public class Constants
    {
        // constants as fields
        const int NumberOfMonths = 12;
        const int NumberOfDaysInWeek = 7;
        const double Pi = Math.PI;

        public void DisplayConstants() {
            
            System.Console.WriteLine("Number of days in a week: "+NumberOfDaysInWeek);
            System.Console.WriteLine("Number of months in a year: "+NumberOfMonths);
            System.Console.WriteLine("Pi: "+Pi);
        }
    }

}