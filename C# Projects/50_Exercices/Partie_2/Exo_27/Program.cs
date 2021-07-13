using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_27
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] IntAray = {10,2,3,10,10,10,2,5};
            Dictionary<int,int> Dico = new Dictionary<int, int>();

            Dico = StoreAndCount(IntAray);

            System.Console.WriteLine();

            Display(ref Dico);
        }
        public static void Display(ref Dictionary <int,int> Dico) {
            foreach(KeyValuePair<int, int> DicoTmp in Dico) {
                System.Console.WriteLine($"Key: {DicoTmp.Key}, Number of Ocurrences: {DicoTmp.Value}");
            }
        }
        public static Dictionary <int,int> StoreAndCount(int[] IntArray) {

            Dictionary<int,int> Dico = new Dictionary<int, int>();

            foreach(int Key in IntArray) {
                try {
                    Dico.Add(Key, 1);
                    Console.WriteLine($"{Key} added.");
                }
                catch (ArgumentException){
                    Dico[Key]++;
                    Console.WriteLine($"{Key} duplicated : one added to its associated value which is {Dico[Key]} now.");
                }
            }
            return (Dico);
        }
    }
}