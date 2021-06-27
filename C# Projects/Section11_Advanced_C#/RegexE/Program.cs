using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Diagnostics;

namespace RegexE
{
    class Program
    {
        static void Main(string[] args)
        {
            string Pattern = @"\d";
            Regex Regex1 = new Regex(Pattern);

            string Text = "Hi there, my number is 12314";

            MatchCollection MyMatchCollection = Regex1.Matches(Text);

            Console.WriteLine($"{MyMatchCollection.Count} hits found.");

            foreach(Match Hit in MyMatchCollection) {
                GroupCollection MyGroup  = Hit.Groups;
                Console.WriteLine($"{MyGroup[0].Value} found at {MyGroup[0].Index}");
            }
        }
    }
}
