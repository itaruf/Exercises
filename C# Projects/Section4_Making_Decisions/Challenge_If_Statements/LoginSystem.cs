using System;
namespace LoginSystem
{
    public class LoginSystem
    {
        // fields
        string Username;
        string Password;
        bool CheckUsernameValidity() {

            try
            {
                Username = Console.ReadLine();
            }
            catch (FormatException)
            {
                System.Console.WriteLine("The format is invalid.");
                System.Console.WriteLine();
                return(false);
            }
            catch (OverflowException)
            {
                System.Console.WriteLine("Too much characters input.");
                System.Console.WriteLine();
                return(false);
            }
            catch (ArgumentNullException)
            {
                System.Console.WriteLine("Cannot input an empty string.");
                System.Console.WriteLine();
                return(true);
            }
            return(true);
        }
         bool CheckPasswordValidity() {

            try
            {
                Password = Console.ReadLine();
            }
            catch (FormatException)
            {
                System.Console.WriteLine("The format is invalid.");
                System.Console.WriteLine();
                return(false);
            }
            catch (OverflowException)
            {
                System.Console.WriteLine("Too much characters input.");
                System.Console.WriteLine();
                return(false);
            }
            catch (ArgumentNullException)
            {
                System.Console.WriteLine("Cannot input an empty string.");
                System.Console.WriteLine();
                return(true);
            }
            return(true);
        }

        public void CreateUser() {

            do {
                System.Console.Write("Choose an username: ");
            } while (!CheckUsernameValidity());

             do {
                System.Console.Write("Choose a password: ");
            } while (!CheckPasswordValidity());

            System.Console.WriteLine("\nUSER INFORMATION");
            System.Console.WriteLine($"Username: {Username}");
            System.Console.WriteLine($"Password: {Password}");
        }

        public void UserLogin()
        {
            System.Console.WriteLine("\nLOG IN");
            string Input;

            do {
                System.Console.Write("Enter your username: ");
                Input = Console.ReadLine();

                if (Input!=Username) {
                    System.Console.WriteLine("Wrong username.");
                    System.Console.WriteLine();
                }

            } while (Input!=Username);

            do {
                System.Console.Write("Enter your password: ");
                Input = Console.ReadLine();

                if (Input!=Password) {
                    System.Console.WriteLine("Wrong password.");
                    System.Console.WriteLine();
                }

            } while (Input!=Password);

            System.Console.WriteLine($"\nWelcome Back, {Username}!");
        }
    }
}