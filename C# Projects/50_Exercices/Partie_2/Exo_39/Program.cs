using System;

namespace Exo_39
{
    class Program
    {
        static void Main(string[] args)
        {
            object[] Arr = new object[] {
                1,
                2,
                3
            };
            int Index = 3;
            object Val = 2;

            DoStuff(Arr, Index, Val);

            Index = 2;

            DoStuff(Arr, Index, Val);
        }
        public static void DoStuff(object[] Arr, int Index, object Val) 
        {
            Val = (int) Val;
            try {
                Arr[Index] = Val;
            }
            catch(ArrayTypeMismatchException) {
                Console.WriteLine($"Mauvais type.");
            }
            catch(ArgumentOutOfRangeException) {
                Console.WriteLine($"En dehors des limites du tableau !");
            }
            catch(IndexOutOfRangeException) {
                Console.WriteLine($"En dehors des limites du tableau !");
            }
            catch(Exception) {
                Console.WriteLine($"Erreur.");
            }
        }
    }
}