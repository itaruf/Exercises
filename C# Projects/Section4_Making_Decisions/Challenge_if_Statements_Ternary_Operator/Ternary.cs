using System;

namespace Ternary

{
    public class Ternary
    {
       // Fields
        static void Main(string[] args)
        {   
            string TemperatureInput;
            long Temperature = 0;
            bool Success;
            do {
                System.Console.Write("Enter a temperature: ");
                TemperatureInput = Console.ReadLine();
                System.Console.WriteLine();
                try
                {
                     Success = Int64.TryParse(TemperatureInput, out Temperature);
                     if (Success) Temperature = Int64.Parse(TemperatureInput);
                }
                catch (OverflowException)
                {
                    System.Console.WriteLine("Number is too high to be stored.");
                    System.Console.WriteLine();
                    Success = false;
                }
            } while (!Success);
            
            TemperatureInput = Temperature <= 15 ? "It's too cold here!" : Temperature >= 16 && Temperature <= 28 ? "It feels good here!" : Temperature > 28 ? "It's hot here!" : null; 
            System.Console.WriteLine($"Commentary regarding the temperature {Temperature}°C: \"{TemperatureInput}\"");
        }
    }
}