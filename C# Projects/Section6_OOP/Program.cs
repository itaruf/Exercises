using System;

namespace Program
{
    class Program
    {
        ~Program() {
            System.Console.WriteLine("Destructor Called For Box");
        }
        static void Main(string[] args)
        {
            Person Imane = new Person("Imane", "T");

            System.Console.WriteLine($"First Name: {Imane.GetFirstName()}");
            System.Console.WriteLine($"Last Name: {Imane.GetLastName()}");
            
            System.Console.WriteLine();
            
            Imane.SetFirstName("New Imane");
            Imane.SetLastName("New T.");

            System.Console.WriteLine($"First Name: {Imane.GetFirstName()}");
            System.Console.WriteLine($"Last Name: {Imane.GetLastName()}");

            System.Console.WriteLine();

            Person Cookie = new Person("Cookie", "T");

            System.Console.WriteLine($"First Name: {Cookie.GetFirstName()}");
            System.Console.WriteLine($"Last Name: {Cookie.GetLastName()}");
            
            System.Console.WriteLine();
            
            Cookie.SetFirstName("New Cookie");
            Cookie.SetLastName("New T.");

            System.Console.WriteLine($"First Name: {Cookie.GetFirstName()}");
            System.Console.WriteLine($"Last Name: {Cookie.GetLastName()}");

            System.Console.WriteLine();

            Person Amal = new Person("Amal");

            System.Console.WriteLine($"First Name: {Amal.GetFirstName()}");
            System.Console.WriteLine($"Last Name: {Amal.GetLastName()}");

            System.Console.WriteLine();

            Person Skitty = new Person();

            System.Console.WriteLine($"First Name: {Skitty.GetFirstName()}");
            System.Console.WriteLine($"Last Name: {Skitty.GetLastName()}");

            System.Console.WriteLine();

            Box FirstBox = new Box(10.5f, 20.5f, 5.5f);
            FirstBox.SetVolume();

            System.Console.WriteLine($"L: {FirstBox.GetLength()}");
            System.Console.WriteLine($"H: {FirstBox.GetHeight()}");
            System.Console.WriteLine($"W: {FirstBox.GetWidth()}");
            System.Console.WriteLine($"V: {FirstBox.GetVolume()}");
            FirstBox.DisplayAllInfo();

            System.Console.WriteLine();

            Box SecondBox = new Box();

            SecondBox.SGLength = 10.2f;
            SecondBox.SGHeight = 10.2f;
            SecondBox.SGWidth = 10.2f;
            SecondBox.SGVolume = SecondBox.SGLength * SecondBox.SGHeight * SecondBox.SGWidth;

            System.Console.WriteLine($"L: {SecondBox.SGLength}");
            System.Console.WriteLine($"H: {SecondBox.SGHeight}");
            System.Console.WriteLine($"W: {SecondBox.SGWidth}");
            System.Console.WriteLine($"V: {SecondBox.SGVolume}");
            SecondBox.DisplayAllInfo();

            System.Console.WriteLine();

            Box ThirdBox = new Box();
            ThirdBox.DisplayAllInfo();
        }
    }
}
