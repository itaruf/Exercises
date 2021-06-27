using System;

namespace Simple_Inheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            TV MyTV = new TV(true, "Samsung");
            MyTV.ListenDevice();
        }
    }
}
