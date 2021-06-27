using System;

namespace Program
{
    class Program
    {
        public static void Main(string[] args)
        {
            string Imane = "Imane";
            string Amal = "Amal";
            string Cookie = "Cookie";

            var Greet = new Greet.Greet();
            Greet.GreetFriend(Imane);
            System.Console.WriteLine();

            Greet.GreetFriend(Amal); 
            System.Console.WriteLine();

            Greet.GreetFriend(Cookie);
            System.Console.WriteLine();
            
            /*Learning inputs reading*/
            var TCF = new TryCatchFinally.TryCatchFinally();
            TCF.UsingExceptions();
        }
    }
}
