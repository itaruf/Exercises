using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_31
{
    class Program
    {
        static void Main(string[] args)
        {
            Score S1 = new Score(1,120);
            Score S2 = new Score(2,80);
            Score S3 = new Score(2,70);
            Score S4 = new Score(7,70);
            Score S5 = new Score(3,90);
            Score S6 = new Score(1,150);
            Score S7 = new Score(2,50);
            Score S8 = new Score(2,120);
            Score S9 = new Score(3,140);
            
            Score[] Scores = {S1, S2, S3, S4, S5, S6, S7, S8, S9};

            ScoreManager SM = new ScoreManager(Scores);
            
            Console.WriteLine($"{SM.GetLastScore()}");
            System.Console.WriteLine();

            Console.WriteLine($"{SM.GetHighScore()}");
            System.Console.WriteLine();

            SM.GetTop3OfUser(2);
        }
    }
    public class Score {
        public int UserID {get;set;}
        public int ScoreValue {get;set;}
        public Score(int UserID, int ScoreValue){
            this.UserID = UserID;
            this.ScoreValue = ScoreValue;
        }
    } 
    public class ScoreManager
    {
        private Score[] Scores;
        public ScoreManager(List<Score> Scores)
        {
            this.Scores = Scores.ToArray();
        }
        public ScoreManager(Score[] Scores)
        {
            this.Scores = Scores;
        }
        public List<Score> GetScores() {
            List<Score> ScoresList = new List<Score>(Scores.Length);
            foreach(Score ScoreTmp in Scores) {
                ScoresList.Add(ScoreTmp);
            }
            return(ScoresList);
        }
        public int GetLastScore() {
            return(Scores[Scores.Length - 1].ScoreValue);
        }
        public int GetHighScore() {
           int IndexMax = 0;
           int Max = 0;
           for (int i=0; i<Scores.Length; i++) {
               if (Scores[i].ScoreValue > Max) {
                   Max = Scores[i].ScoreValue;
                   IndexMax = i;
               }
           }
           return(Scores[IndexMax].ScoreValue);
        }
        public void GetTop3OfUser(int UserId) {
            List<int> UserIDScoreValue = new List<int>();
            List<Score> ScoresList = GetScores();

            foreach(Score ScoreTmp in ScoresList) {
                if (ScoreTmp.UserID == UserId) {
                    UserIDScoreValue.Add(ScoreTmp.ScoreValue);
                }
            }
            UserIDScoreValue.Sort();
            UserIDScoreValue.Reverse();

            for (int i=0; i<3; i++) {
                try {
                    Console.Write($"{UserIDScoreValue[i]} ");
                }
                catch(IndexOutOfRangeException) {
                    continue;
                }
            }
        }
    }
}
