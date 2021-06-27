using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;
using System.ComponentModel.DataAnnotations;

namespace TicTacToe
{
    
    public class TicTacToe
    {
        [Required(AllowEmptyStrings = true)]
        List<int> RemainingFields = new List<int>();
        Player Player1 = new Player("Player 1", true, "0");
        Player Player2 = new Player("Player 2", false, "X");

        bool bPartyEnded = false;
        public class Player {
            public string Name;
            public bool bTurn;
            public string Symbol;
            public Player(string Name, bool bTurn, string Symbol) {

                this.Name = Name;
                this.bTurn = bTurn;
                this.Symbol = Symbol;
            }
            ~Player() {

                System.Console.WriteLine("Destructor called.");
            }

            public string GSName {
                get {
                    return(Name);
                }
                set {
                    Name = value;
                }
            }

            public bool GSbTurn {
                get {
                    return(bTurn);
                }
                set {
                    bTurn = value;
                }
            }
        };
        string[,] Grid = new string[3,3]
        {
            {"1","2","3"},
            {"4","5","6"},
            {"7","8","9"},
        };
        public void DisplayGrid() {

            for (int i=0; i<Grid.GetLength(0); i++) {
                for (int k=0; k<Grid.GetLength(0); k++) {
                    System.Console.Write("-----   ");
                }
                System.Console.WriteLine();
                for (int j=0; j<Grid.GetLength(1); j++) {
                    System.Console.Write($"  {Grid[i,j]}\t");
                }

                System.Console.WriteLine();
            }
            for (int k=0; k<Grid.GetLength(0); k++) {
                System.Console.Write("-----   ");
            }
        System.Console.WriteLine("\n");
        }
        public void Play(Player APlayer) {

            CheckTurn(APlayer);
            StopGame(APlayer);
            if (bPartyEnded) {
                Console.WriteLine($"{APlayer.Name} has won !");
                System.Console.WriteLine();
            }
            if (!bPartyEnded && RemainingFields.Count == 0) {
                Console.WriteLine($"Draw !");
                bPartyEnded = true;
                System.Console.WriteLine();
            }
            else {
                DisplayGrid();
            }
        }
        public void CheckTurn(Player APlayer) {
            
            AskFieldToMark(APlayer);
            StopGame(APlayer);
        }
        public void GetRemainingFieldsToMark() {
            
            RemainingFields.Clear();

            for (int i=0; i<Grid.GetLength(0); i++) {
                for (int j=0; j<Grid.GetLength(1); j++) {
                    if (!Grid[i,j].Contains(Player1.Symbol) && !Grid[i,j].Contains(Player2.Symbol)) {
                        RemainingFields.Add(Int32.Parse(Grid[i,j]));
                    }
                }
            }
             if (RemainingFields.Count != 0) {
                System.Console.WriteLine("Available field(s): ");
                foreach (int RFTmp in RemainingFields) {
                    System.Console.Write($"{RFTmp} ");
                }
                System.Console.WriteLine("\n");
            }
        }
        public void AskFieldToMark(Player APlayer) {

            GetRemainingFieldsToMark();

            bool bSuccess = false;
            string Input = "";
            int FieldNum = 0;
            if (RemainingFields.Count != 0) {
                do {
                    System.Console.Write($"{APlayer.GSName}: Choose your field: ");
                    Input = Console.ReadLine();
                    System.Console.WriteLine();
                    // Doit être un integer entre 1 et 9
                    bSuccess = Int32.TryParse(Input, out FieldNum);

                    if (bSuccess) {
                        if (RemainingFields.Contains(FieldNum)) {
                            MarkAField(ref APlayer, ref FieldNum);
                        }
                        else {
                            System.Console.WriteLine("Enter an available field value");
                            bSuccess = false;
                        }
                    }
                    else {
                        System.Console.WriteLine("Enter an available field value.");
                    }
                } while (!bSuccess);
            }
        }
        public void MarkAField(ref Player APlayer, ref int FieldNum) {

            for (int i=0; i<Grid.GetLength(0); i++) {
                for (int j=0; j<Grid.GetLength(1); j++) {
                    if (Grid[i,j] == FieldNum.ToString()) {
                        Grid[i,j] = APlayer.Symbol;
                        i = Grid.GetLength(0) - 1;
                        break;
                    }
                }
            }
        }
        public void StopGame(Player APlayer) {

            for (int i=0; i<Grid.GetLength(0); i++) {
                for (int j=0; j<Grid.GetLength(1); j++) {
                    if (Grid[i,j].Contains(APlayer.Symbol)) {
                        switch(i,j) {
                            case (0,0):
                                if (Grid[0,1] == APlayer.Symbol && Grid[0,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }
                                else if (Grid[1,0] == APlayer.Symbol && Grid[2,0] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }
                                else if (Grid[1,1] == APlayer.Symbol && Grid[2,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }
                                break;
                            case (0,1):
                                if (Grid[0,0] == APlayer.Symbol && Grid[0,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }
                                else if (Grid[1,1] == APlayer.Symbol && Grid[2,1] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }                      
                                break;
                            case (0,2):
                                if (Grid[0,0] == APlayer.Symbol && Grid[0,1] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[1,2] == APlayer.Symbol && Grid[2,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[1,1] == APlayer.Symbol && Grid[2,0] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }                            
                                break;
                            case (1,0):
                                if (Grid[0,0] == APlayer.Symbol && Grid[2,0] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[1,1] == APlayer.Symbol && Grid[1,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                break;
                            case (1,1):
                                if (Grid[0,0] == APlayer.Symbol && Grid[2,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[0,1] == APlayer.Symbol && Grid[2,1] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[0,2] == APlayer.Symbol && Grid[2,0] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }
                                else if (Grid[1,0] == APlayer.Symbol && Grid[1,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }                                    
                                break;
                            case (1,2):
                                if (Grid[1,2] == APlayer.Symbol && Grid[2,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[1,0] == APlayer.Symbol && Grid[1,1] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }                     
                                break;
                            case (2,0):
                                if (Grid[0,0] == APlayer.Symbol && Grid[1,0] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[1,1] == APlayer.Symbol && Grid[0,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[0,2] == APlayer.Symbol && Grid[2,0] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }
                                else if (Grid[2,1] == APlayer.Symbol && Grid[2,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }                                    
                                break;
                            case (2,1):
                                if (Grid[2,0] == APlayer.Symbol && Grid[2,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[1,1] == APlayer.Symbol && Grid[0,1] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }                                    
                                break;
                            case (2,2):
                                if (Grid[2,0] == APlayer.Symbol && Grid[2,1] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                } 
                                else if (Grid[1,2] == APlayer.Symbol && Grid[0,2] == APlayer.Symbol) {
                                    bPartyEnded = true;
                                }                                   
                                break;
                        }
                        i = Grid.GetLength(0) - 1;
                        j = Grid.GetLength(1) - 1;
                    }
                }
            }
        }
        public static void Main() {
            
            string Input;

            do {
                TicTacToe TTT = new TicTacToe();
        
                Console.WriteLine($"{TTT.Player1.Name} is \"{TTT.Player1.Symbol}\".");
                Console.WriteLine($"{TTT.Player2.Name} is \"{TTT.Player2.Symbol}\".");

                System.Console.WriteLine();
                TTT.DisplayGrid(); 
                do {
                    if (!TTT.bPartyEnded) {
                        TTT.Play(TTT.Player1);
                    }               
                    if (!TTT.bPartyEnded) {
                        TTT.Play(TTT.Player2);
                    }
                } while (!TTT.bPartyEnded);
                
                System.Console.Write("Play Again ? (Any Key / N): ");
                Input = Console.ReadLine();
                System.Console.WriteLine();
            } while (Input != "N");
        }
    }
}