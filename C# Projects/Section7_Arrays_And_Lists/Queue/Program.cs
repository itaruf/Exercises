using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;
namespace Queue
{
    class Program
    {
        private static void Display(in Queue<Order> MyQueue) {

            if (MyQueue.Count > 0) {
                System.Console.WriteLine("Displaying an Order Queue: ");
                foreach (Order OrdersTmp in MyQueue) {
                    Console.WriteLine($"FO: {OrdersTmp.FirstOrder}, SO: {OrdersTmp.SecondOrder} ");
                }
                System.Console.WriteLine();
            }
            else  {
                System.Console.WriteLine("The Order Queue is empty");
                System.Console.WriteLine();
            }
        }
        private static void Display(in Order[] Orders) {

            if (Orders.Length > 0) {
                System.Console.WriteLine("Displaying an Order Array: ");
                foreach (Order OrdersTmp in Orders) {
                    Console.WriteLine($"FO: {OrdersTmp.FirstOrder}, SO: {OrdersTmp.SecondOrder} ");
                }
                System.Console.WriteLine();
            }
            else  {
                System.Console.WriteLine("The Order Queue is empty");
                System.Console.WriteLine();
            }
        }

        private static void Display(in List <int> IntList) {

            if (IntList.Count > 0) {
                System.Console.WriteLine("Displaying an Int List: ");
                foreach (int IntListTmp in IntList) {
                    Console.Write($"{IntListTmp} ");
                }
                System.Console.WriteLine();
            }
            else  {
                System.Console.WriteLine("The Order Queue is empty");
                System.Console.WriteLine();
            }
        }  
        private static void Display(in Queue <int> MyQueue) {
            
            if (MyQueue.Count > 0) {
                System.Console.WriteLine("Displaying an Int Queue: ");
                foreach (int MyQueueTmp in MyQueue) {
                    Console.Write($"{MyQueueTmp} ");
                }
                System.Console.WriteLine();
            }
            else  {
                System.Console.WriteLine("The Order Queue is empty");
                System.Console.WriteLine();
            }            
        }

        private static void Delete(Queue<Order> MyQueue) {

            while (MyQueue.Count != 0) {
                System.Console.WriteLine("Dequeuing.");
                MyQueue.Dequeue();
                Console.WriteLine($"Remaning element in the queue: {MyQueue.Count}");
                Display(in MyQueue);
            }
        }
        
        private static void CreateOrders(Order[] Orders) {

            Orders[0] = new Order(1,4);
            Orders[1] = new Order(2,5);
            Orders[2] = new Order(3,6);
        }
        static void Main(string[] args)
        {
            Queue<int> MyQueue = new Queue<int>(5);
            List<int> IntList = new List<int>(5);

            for(int i=0; i<IntList.Capacity; i++) {
                IntList.Add(i+1);
                MyQueue.Enqueue(i+1);
            }

            Display(in IntList);
            Display(in MyQueue);

            //Using Dequeue()
            do {
                if (MyQueue.Count > 0) {
                    System.Console.WriteLine("Dequeuing.");
                    MyQueue.Dequeue();
                }
                if (MyQueue.Count == 0){
                    System.Console.WriteLine("Queue is empty.");
                }
                Display(in MyQueue); // the first element is removed => first in, first out                
            } while (MyQueue.Count>0);

            //
            Queue<Order> QueueOfOrders = new Queue<Order>();
            Order[] Orders = new Order[3];

            CreateOrders(Orders);
            Display(Orders);
            
            foreach (Order OrdersTmp in Orders){
                QueueOfOrders.Enqueue(OrdersTmp);
            }

            Display(QueueOfOrders);
            Delete(QueueOfOrders);
        }
    }
}
