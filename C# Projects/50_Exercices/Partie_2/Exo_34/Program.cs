using System;
using System.Text.RegularExpressions;

namespace Exo_34
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"{CleanPhoneNumber("Bonjour, appelle-moi au 0836656565")}");
            
        }
        public static string CleanPhoneNumber(string Sentence)
        {
            string pattern = @"(0|\\+33|0033)[1-9][0-9]{8}";
            Regex RX = new Regex(pattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
            MatchCollection Matches = RX.Matches(Sentence);     

            foreach(Match MatchTmp in Matches) {
                GroupCollection Groups = MatchTmp.Groups;
                /* Console.WriteLine($"{Groups[0]}");
                Console.WriteLine($"{Groups[0].Index}"); */
                Sentence = Sentence.Remove(Groups[0].Index);
            }
             return(Sentence);
        }
    }
}
