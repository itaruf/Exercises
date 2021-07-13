using System;

namespace Exo_49
{
    class Program
    {
        static void Main(string[] args)
        {
            Stack MyStack = new Stack(2);
            MyStack.Push(10);
            /* Console.WriteLine($"{MyStack.Pop()}"); */
            Console.WriteLine($"{MyStack.Peek()}");
            MyStack.Display();
            System.Console.WriteLine("\n");

            MyStack.Push(20);
            /* Console.WriteLine($"{MyStack.Pop()}"); */
            Console.WriteLine($"{MyStack.Peek()}");
            MyStack.Display();
            System.Console.WriteLine("\n");

            MyStack.Push(30);
            /* Console.WriteLine($"{MyStack.Pop()}"); */
            Console.WriteLine($"{MyStack.Peek()}");
            MyStack.Display();
            System.Console.WriteLine("\n");

            Console.WriteLine($"{MyStack.Pop()}");
            Console.WriteLine($"{MyStack.Peek()}");
            MyStack.Display();
            System.Console.WriteLine("\n");
        }
    }
    public class Stack
    {
        private int[] MyStack;
        private int Position;

        public Stack(int Size) {
            Position = Size;
            MyStack = new int[Size];
        }
        public void Push(int Value) {
            // Insérer un élément à l'indice 0 du tableau
            Console.WriteLine($"Pushing {Value}");
            if (Position != 0) {
                MyStack[Position - 1] = Value;
                Position--;
            }
            else {
                /* Console.WriteLine($"Position: {Position}"); */
                int[] Buffer = new int[MyStack.Length];
     
                MyStack.CopyTo(Buffer, 0);

                Console.Write($"Printing Buffer: ");
                foreach(int Item in Buffer) {
                    Console.Write($"{Item} ");
                }
                System.Console.WriteLine();

                MyStack = new int[MyStack.Length + 1];
                Console.WriteLine($"New Length: {MyStack.Length}");
                
                for (int i= MyStack.Length - 1; i>0; i--) {
                    MyStack[i] = Buffer[i - 1];
                }

                MyStack[Position] = Value;
            }
            
        }
        public int Pop() {
            // Retirer l'élément à l'indice 0 du tableau
            if (MyStack.Length == 0) {
                Console.WriteLine($"Empty Stack");
                return (0);
            }
            else {
                Console.WriteLine($"Popping {MyStack[0]}");
                int Poped = MyStack[0];
                /* Console.WriteLine($"Position: {Position}"); */
                int[] Buffer = new int[MyStack.Length-1];
     
                for (int i=0; i<Buffer.Length; i++) {
                    Buffer[i] = MyStack[i+1];
                }

                Console.Write($"Printing Buffer: ");
                foreach(int Item in Buffer) {
                    Console.Write($"{Item} ");
                }
                System.Console.WriteLine();

                MyStack = new int[Buffer.Length];
                Console.WriteLine($"New Length: {MyStack.Length}");
                
                Buffer.CopyTo(MyStack, 0);
                return(Poped);
            }
        }
        public int Peek() {
            if (MyStack.Length == 0) {
                Console.WriteLine($"Empty Stack");
                return (0);
            }
            else {
                Console.Write($"Returning stack's head: ");
                return(MyStack[0]);
            }
        }
        public void Display() {
            foreach(int Item in MyStack) {
                Console.Write($"{Item} ");
            }
        }   
    }
}
