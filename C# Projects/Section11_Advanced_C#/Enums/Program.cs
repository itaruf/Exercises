using System;

namespace Enums
{
    enum Day{Mo, Tu, We, Th, Fr, Sa, Su};
    enum Month{Ja = 1, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec};
    class Program
    {
        static void Main(string[] args)
        {
            Day Friday = Day.Fr;
            Day Sunday = Day.Su;

            Console.WriteLine($"Friday: {Friday}, Sunday: {Sunday}");
            Console.WriteLine($"December: {Month.Dec}");
            
        }
    }
}
