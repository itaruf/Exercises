using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_46
{
    class Program
    {
        public static void Main(string[] args)
        {
            object[] Datas = new object[] {
                1, 'c', 3
            };
            Console.WriteLine($"{Compute(Datas)}");
        }
        public delegate object[] BeforeDelegate(object[] Datas);
        public static int Compute(object[] DataSet) 
         {
             //Modifier la ligne ci-dessous
             BeforeDelegate TodoBefore = CleanDataSet;
             DataSet = TodoBefore(DataSet);
             /* Console.WriteLine($"{DataSet[0]}");
             Console.WriteLine($"{DataSet[1]}"); */
             var Result = SumData(TodoBefore, DataSet);
             return (Result);
        }
        public static object[] CleanDataSet(object[] Datas)
        {
            var CleanSet = new List<object>();
            
            foreach(var D in Datas)
            {
                if(D.GetType() == typeof(int))
                {
                    CleanSet.Add(D);
                }
            }
            return (CleanSet.ToArray());
        }
        public static int SumData(BeforeDelegate CleanData, object[] Datas)
        {
            var Result = 0;
            try {
                foreach(var O in Datas){
                    Result +=((int)O);
                };
            }
            catch(Exception){
                Console.WriteLine("Les données sont corrompues");
                return (0);
            }
            return (Result);
        }
    }
}