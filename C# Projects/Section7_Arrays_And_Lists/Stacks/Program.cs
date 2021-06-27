using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Stacks
{
    class Program
    {
        private static void Reverse(ref List <int> IntList) {

            Stack<int> MyStack = new Stack<int>(IntList.Count);

            foreach (int IntListTmp in IntList) {
                MyStack.Push(IntListTmp);
            }

            IntList.Clear();
            foreach (int MyStackTmp in MyStack) {
                IntList.Add(MyStackTmp);
            }
        }
        private static void Display(in List <int> IntList) {

            foreach (int IntListTmp in IntList) {
                Console.Write($"{IntListTmp} ");
            }
        }   
        static void Main(string[] args)
        {
            Stack<int> MyStack = new Stack<int>();
            MyStack.Push(0);
            MyStack.Push(1);

            if (MyStack.Count > 0) {
                Console.WriteLine($"Top of the stack: {MyStack.Peek()}");
                Console.WriteLine($"Removed element: {MyStack.Pop()}");
            }
            else {
                System.Console.WriteLine("There's nothing to remove.");
            }

            List<int> IntList = new List<int>(5);

            for(int i=0; i<IntList.Capacity; i++) {
                IntList.Add(i+1);
            }

            System.Console.WriteLine("Initial List: ");
            Display(IntList);

            System.Console.WriteLine();

            System.Console.WriteLine("Reversed List: ");
            Reverse(ref IntList);
            Display(IntList);
        }
    }
}
