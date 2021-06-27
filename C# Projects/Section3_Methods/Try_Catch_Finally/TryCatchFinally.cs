using System;

namespace TryCatchFinally

{
    public class TryCatchFinally
    {
        public void UsingExceptions() {

            for (int i=1; i<=2; i++) {
                if (i == 1) 
                    System.Console.Write($"Enter the {i}rst number: ");
                else 
                    System.Console.Write($"Enter the {i}nd number: ");
                
                string Input = System.Console.ReadLine();

                try
                {
                    int ChosenNumber = Int32.Parse(Input);
                    System.Console.WriteLine();

                    System.Console.WriteLine($"Number chosen: {ChosenNumber}");
                }
                catch (FormatException)
                {
                    System.Console.WriteLine("Please enter a numeric value.");
                    System.Console.WriteLine();
                }
                catch (OverflowException) {
                    System.Console.WriteLine("Invalid input length.");
                    System.Console.WriteLine();
                }
                catch (ArgumentNullException) {
                    System.Console.WriteLine("Empty input is not allowed");
                    System.Console.WriteLine();
                }
                finally { // Toujours appelé peu importe le succès ou l'échec de try
                    System.Console.WriteLine("Try done.");
                    System.Console.WriteLine();
                }
            }
        }
    }
}