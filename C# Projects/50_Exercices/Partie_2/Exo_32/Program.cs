using System;

namespace Exo_32
{
    class Program
    {

        [Flags] enum Names {
            Albert = 1,
            Alice = 2,
            Robert = 4,
            David = 8,
            Cynthia = 16
        }        
        static void Main(string[] args)
        {
            /* 
            //var names = Enum.GetName(typeof(Names), 1);
            //Console.WriteLine(names);

            var names = Names.Albert | Names.Robert;
            Console.WriteLine(names);
            // En retirant [Flags], les valeurs sont affichées
            */

            var names = Names.Albert | Names.Robert;
            Console.WriteLine(names);
        }
    }
}
