using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class NumberWizard : MonoBehaviour
{
    // Member attributes
    [SerializeField] int Max, Min, Guess;
    [SerializeField] TextMeshProUGUI GuessText;

    // Member methods
    void Start()
    {
        StartGame();
    }

    public void MyGuess()
    {
        GuessText.text = Guess.ToString();
    }

    public int RandomNumber(int A, int B)
    {
        Guess = Random.Range(A, B);
        return (Guess);
    }
    void StartGame()
    {

        NextGuess();
    }

    public void OnPressHigher()
    {
        Min = Guess + 1;
        NextGuess();
    }

    public void OnPressLower()
    {
        Max = Guess - 1;
        NextGuess();
    }
  
    void NextGuess()
    {
        RandomNumber(Min, Max + 1);
        MyGuess();
    }
}
