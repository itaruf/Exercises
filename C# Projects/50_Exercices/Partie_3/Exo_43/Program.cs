using System;

namespace Exo_43
{
    class Program
    {
        static void Main(string[] args)
        {
            var FirstLock = false;
            var SecondLock = false;

            if (true | Unlock(ref FirstLock, ref SecondLock))
            {
                if (FirstLock && SecondLock)
                {
                    Console.WriteLine("Open");
                } else
                {
                    Console.WriteLine("Close");
                }
                
            }
        }
        public static bool Unlock(ref bool FirstLock, ref bool SecondLock)
        {
            FirstLock = !FirstLock;
            SecondLock = !SecondLock;
            return (SecondLock);
        }
    }
}
