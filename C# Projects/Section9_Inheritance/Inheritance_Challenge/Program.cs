using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Inheritance
{
    class Program
    {
        static void Main(string[] args)
        {
            Post Letter = new Post();
            System.Console.WriteLine(Letter.ToString());

            System.Console.WriteLine();

            Post Letter2 = new Post("Joyeux anniversaire Cookie", "Imane", false);
            System.Console.WriteLine(Letter2.ToString());

            System.Console.WriteLine();

            Letter2.Update("Joyeux anniversaire Skitty", true);
            System.Console.WriteLine(Letter2.ToString());
           
            System.Console.WriteLine();

            ImagePost ImageLetter = new ImagePost("Image de l'anniversaire de Skitty", "Imane", "https://...", false);
            System.Console.WriteLine(ImageLetter.ToString());

            System.Console.WriteLine();

            VideoPost VideoLetter = new VideoPost();
            Console.WriteLine($"{VideoLetter.ToString()}");

            System.Console.WriteLine();
            
            VideoPost VideoLetter2 = new VideoPost("Vidéo de l'anniversaire de Skitty", "Imane", "https://...", 30, false);
            Console.WriteLine($"{VideoLetter2.ToString()}");
            
            VideoLetter2.Play();
            System.Console.WriteLine($"The video is playing. Press any key to stop it.");
            System.Console.ReadKey();
        }
    }
}
