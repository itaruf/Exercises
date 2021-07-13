using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Globalization;

namespace Exo_26
{
    class Program
    {
        static void Main(string[] args)
        {
            bool Success;
            Success = IsPalindrome("Kayak");
            Console.WriteLine($"{Success}");

            Success = IsPalindrome("Bob");
            Console.WriteLine($"{Success}");

            Success = IsPalindrome("Robert Trebor");            
            Console.WriteLine($"{Success}");

            Success = IsPalindrome("Engage le jeu, que je le gagne");
            Console.WriteLine($"{Success}");

            Success = IsPalindrome("Test");
            Console.WriteLine($"{Success}");
        }
        public static void Display(List<char> CharList) {
            foreach (char Item in CharList) {
                Console.Write($"{Item}");
            }
        }

      public static void Display(string[] ArrayString) {
            foreach (string Item in ArrayString) {
                Console.Write($"{Item}");
            }
        }
        public static bool IsPalindrome(string Sentence){

            Sentence = Sentence.ToUpper(new CultureInfo("en-US", false));
            
            List<char> CharToBan = new List<char>();
            CharToBan.Add(',');
            CharToBan.Add('\"');
            CharToBan.Add('!');
            CharToBan.Add('?');
            CharToBan.Add('.');
            CharToBan.Add(';');

            bool Result = true;
            string[] SentenceTmp = Sentence.Split(" ");

           for (int j=0; j<SentenceTmp.Length; j++) {
                for (int i=0; i<SentenceTmp[j].Length; i++) {
                    if (CharToBan.Contains(SentenceTmp[j][i])) {
                        //System.Console.WriteLine($"{SentenceTmp[j][i]} REMOVED");
                        SentenceTmp[j] = SentenceTmp[j].Remove(i,1);
                    }
                }
            }

            /* Display(SentenceTmp);
            System.Console.WriteLine(); */

            List<char> CharList = new List<char>(Sentence.Length);

            Sentence = String.Join("", SentenceTmp);

            for (int i = Sentence.Length - 1; i>=0; i--)
            {
                CharList.Add(Sentence[i]);
            }    
            
            /* Display(CharList);
            System.Console.WriteLine(); */

            for (int i=0; i<CharList.Count; i++) {
                if (CharList[i] != Sentence[i]) {
                    Result = false;
                    break;
                }
            }

            return(Result);
        }
    }
}
