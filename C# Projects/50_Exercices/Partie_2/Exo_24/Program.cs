using System;

namespace Exo_24
{
    class Program
    {
        static void Main(string[] args)
        {
            string Sentence = "Hello my name is Imane !";
            string[] NewSentence = Sentence.Split(" ");
            NewSentence[4] = "Cookie";
            Sentence = String.Join(" ", NewSentence);
            Console.WriteLine($"{Sentence}");
        }
    }
}
