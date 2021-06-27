using System;
using System.Collections.Generic;

namespace PlayerScore

{
    public class PlayerScore
    {
       // Fields
       static float Highscore = 0.0f;
       float HighscorePlayer = 0.0f;
       string PlayerName = "";

        static void Main(string[] args)
        {
            
            var Player1 = new PlayerScore();
            Player1.PlayerName = "Imane";
            Player1.HighscorePlayer = 5.5f;

            var Player2 = new PlayerScore();
            Player2.PlayerName = "Amal";
            Player2.HighscorePlayer = 10.0f;

            var Player3 = new PlayerScore();
            Player3.PlayerName = "Cookie";
            Player3.HighscorePlayer = 10.0f;

            var Player4 = new PlayerScore();
            Player4.PlayerName = "Skitty";
            Player4.HighscorePlayer = 2.0f;

            /* System.Console.WriteLine(Player1.HighscorePlayer);
            System.Console.WriteLine(Player2.HighscorePlayer); 
            System.Console.WriteLine(); */

            List<PlayerScore> Players = new List<PlayerScore>();
            Players.Add(Player1);
            Players.Add(Player2);           
            Players.Add(Player3);
            Players.Add(Player4);

            Console.WriteLine($"Current Highscore is: {Highscore}");
            System.Console.WriteLine();

            foreach(var PlayersTmp in Players)
            {
                if (PlayersTmp.HighscorePlayer > Highscore) {
                    Highscore = PlayersTmp.HighscorePlayer;
                    System.Console.WriteLine($"New highscore is {Highscore} held by {PlayersTmp.PlayerName}.");
                }
                else if (PlayersTmp.HighscorePlayer == Highscore) {
                    System.Console.WriteLine($"{PlayersTmp.PlayerName} has reached a score which is the same as the current highscore {Highscore}!");
                }
                else {
                    System.Console.WriteLine($"The current highscore {Highscore} couldn't be topped by {PlayersTmp.PlayerName}.");
                }
            }
        }
    }
}