using System;

namespace Exo_50
{
    class Program
    {
        public struct Time {
            public int Hours { get; set; }
            public int Minutes { get; set; }
            public Time(int H, int M) {
                Hours = H;
                Minutes = M;
            }
            static void Main(string[] args) {

                var Midi45 = new Time(12, 45);
                var HalfHour = new Time(0, 30);
                var Result = new Time();

                Convertion(Midi45, HalfHour, ref Result);
                Display(Result);
            }

            public static void Convertion(Time Time1, Time Time2, ref Time Result) {

                float TMP = (float) Time1.Minutes + (float) Time2.Minutes;
                /* Console.WriteLine($"{TMP}"); */
                
                if (TMP >= 60) {
                    TMP /= 60;
                }
                /* Console.WriteLine($"{TMP}"); */
                Result.Hours = Time1.Hours + Time2.Hours + (int) TMP;
                /* Console.WriteLine($"{TMP - (float) Math.Truncate(TMP)}"); */
                
                Result.Minutes = (int) ( (TMP - (float) Math.Truncate(TMP)) * 100);

                /* Console.WriteLine($"{Result.Hours}");
                Console.WriteLine($"{Result.Minutes}"); */
                
            }
            public static void Display(Time Result) {
                Console.WriteLine(string.Format($"{Result.Hours} heure(s) et {Result.Minutes} minute(s)"));
            }
        }
    }
}
