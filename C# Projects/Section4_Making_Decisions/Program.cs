using System;

namespace Program
{
    class Program
    {
        public static void TryParse() {

            string NumberAsString = "128"; 
            int ParsedString;

            bool success = int.TryParse(NumberAsString, out ParsedString);
            
            if (success) {
                Console.WriteLine($"Successful parsing {ParsedString}");
                System.Console.WriteLine();
            }
            else {
                Console.WriteLine($"Unsuccessful parsing");
                System.Console.WriteLine();
            }
        }

        static void Main(string[] args)
        {
            //TryParse();
            
            var ULS = new LoginSystem.LoginSystem();
            ULS.CreateUser();
            ULS.UserLogin();
        }
    }
}
