#include <iostream> // header file
#include <ctime>

int PrintIntroduction(int Difficulty);

bool PlayGame(int Difficulty);

bool PlayGame(int Difficulty)
{
    int CodeA = rand() % Difficulty + Difficulty, CodeB = rand() % Difficulty + Difficulty, CodeC = rand() % Difficulty + Difficulty;
    int CodeSum = CodeA + CodeB + CodeC, CodeProduct = CodeA * CodeB * CodeC;
    std::cout << "Codes: " << CodeA << " " << CodeB << " " << CodeC;

    std::cout << "\n\nCodeSum: " << CodeSum << ", CodeProduct: " << CodeProduct << "\n";
    std::cout << "\nThere are 3 numbers in the code\n";
    std::cout << "Enter the 3 numbers: ";

    int GuessA, GuessB, GuessC;

    std::cin >> GuessA >> GuessB >> GuessC;
    std::cout << "You entered: " << GuessA << " " << GuessB << " " << GuessC;

    int GuessSum = GuessA + GuessB + GuessC;
    int GuessProduct = GuessA * GuessB * GuessC;

    std::cout << "\n\nGuessSum: " << GuessSum << ", GuessProduct: " << GuessProduct;

    if (CodeSum == GuessSum && CodeProduct == CodeProduct)
    {
        std::cout << "\n\nYou win !";
        return (true);
    }
    else
    {
        std::cout << "\n\nYou lose !";
        std::cout << "\nThe game has ended !";
        return (false);
    }
}

int PrintIntroduction(int Difficulty) 
{
    Difficulty++;
    std::cout << "\n\nYou are a secret agent breaking into the " << Difficulty << "th room..."; //std "namespace", :: "scope operator", cout "output function"
    std::cout << std::endl;                                                                     //Saut de ligne
    std::cout << "You need to enter the correct code to continue...\n\n";

    return (Difficulty);
}

int main()
{
    srand(time(NULL)); // initialize rand() according to the time of day

    int Difficulty = 2, MaxDifficulty = 5; 
    bool bLevelComplete = true;

    while (Difficulty < MaxDifficulty && bLevelComplete)
    {
        Difficulty = PrintIntroduction(Difficulty);
        bLevelComplete = PlayGame(Difficulty);
        std::cin.clear();  // pas pour Unreal, Clears any errors
        std::cin.ignore(); // pas pour Unreal, Discards the buffer
    }

    if (Difficulty == MaxDifficulty)
    {
        std::cout << "\nYou successfully ended the game !";
    }
    return (0);
}