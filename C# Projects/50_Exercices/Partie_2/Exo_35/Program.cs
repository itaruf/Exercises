using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_35
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] ChangeToGive = GiveChange(44, 100);
            Display(ChangeToGive);
        }
        public static void Display (int[] ChangeToGive) {
            foreach (int Item in ChangeToGive) {
                System.Console.Write($"{Item} ");
            }
        }
        public static int[] GiveChange(int AmountToPay, int AmountGiven) {

            List<int> ChangeToGive = new List<int>();

            if (AmountToPay > AmountGiven) {
                return(ChangeToGive.ToArray());
            }

            int Change = Math.Abs(AmountToPay - AmountGiven);
            
            if (Change == 0) {
                return(ChangeToGive.ToArray());
            }

            List<int> Money = new List<int>()
            {
                100,
                50,
                20,
                10,
                5,
                2,
                1
            };

            if (Money[0] <= Change) {
                ChangeToGive.Add(Money[0]); // + 100
                Change -= Money[0];
            }
            if (Money[1] <= Change) {
                ChangeToGive.Add(Money[1]); // + 50
                Change -= Money[1];
            }
            if (Money[2] <= Change) {
                ChangeToGive.Add(Money[2]); // + 20
                Change -= Money[2];
            }
            if (Money[3] <= Change) {
                ChangeToGive.Add(Money[3]); // + 10
                 Change -= Money[3];
            }
            if (Money[4] <= Change) {
                ChangeToGive.Add(Money[4]); // + 5
                 Change -= Money[4];
            }
            if (Money[5] <= Change) {
                ChangeToGive.Add(Money[5]); // + 2
                 Change -= Money[5];
            }
            if (Money[6] <= Change) {
                ChangeToGive.Add(Money[6]); // + 1
                 Change -= Money[6];
            }
            return(ChangeToGive.ToArray());
        }
    }
}
