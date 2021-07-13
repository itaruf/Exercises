using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_36
{
    class Program
    {
        static void Main(string[] args)
        {
            WaitingList WL = new WaitingList();
            WL.Add("Imane");
            WL.AddMultiple(new List<string>{"Cookie","Skitty"});
            WL.Remove("Cookie");
            Console.WriteLine($"{WL.Count()}");
            Console.WriteLine($"{WL.CheckNext()}");
            Console.WriteLine($"{WL.Next()}");     
            Console.WriteLine($"{WL.CheckNext()}");       
            WL.Reset();
        }
        public class WaitingList {
            private Queue<string> Names;
            public WaitingList()
            {
                this.Names = new Queue<string>();
            }
            public Queue<string> GetNames() {
                return(this.Names);
            }
             public void SetNames(Queue<string> Names) {
                this.Names = Names;
            }
            public void Add(string Name)
            {
                this.Names.Enqueue(Name);
            }
            public void AddMultiple(List<string> Names)
            {
                foreach(string NameTmp in Names) {
                    this.Names.Enqueue(NameTmp);
                }
            }
            public void Remove(string Name)
            {
                this.Names = new Queue<string>(this.Names.Where(x => x!= Name));
            }
            public int Count()
            {
            return (this.Names.Count);
            }
            public string CheckNext()
            {
            return(this.Names.Peek());
            }
            public string Next()
            {
            return(this.Names.Dequeue());
            }
            public void Reset()
            {
                this.Names.Clear();
            }
        }
    }
}
