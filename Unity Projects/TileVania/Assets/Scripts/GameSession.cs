using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class GameSession : MonoBehaviour
{
    [Header("Player Stats")]
    [SerializeField] public int PlayerLives = 3;
    [SerializeField] public Text PlayerLivesText;
    [SerializeField] public Text ActualScoreText;
    [SerializeField] public Text FinalScoreText;

    //Member attributes
    CoinPickup CP;
    private int CurrentSceneIndex = 0;

    private void Awake()
    {
        CurrentSceneIndex = SceneManager.GetActiveScene().buildIndex;
        int NumGameSessions = FindObjectsOfType<GameSession>().Length;    
        
        if (NumGameSessions > 1)
        {
            Destroy(gameObject);
        }
        else
        {
            DontDestroyOnLoad(gameObject);
        }
    }
    private void Update()
    {
        FinalScoreText.text = CoinPickup.FinalScore.ToString();
        ActualScoreText.text = CoinPickup.ActualScore.ToString();
        PlayerLivesText.text = PlayerLives.ToString();
    }
    public void ProcessPlayerDeath()
    {
        if (PlayerLives > 1)
        {
            TakeLife();
        }
        else
        {
            ResetGameSession();
        }
    }
    private void TakeLife()
    {
        PlayerLives--;
        CoinPickup.FinalScore -= CoinPickup.ActualScore;
        CoinPickup.ActualScore = 0;

        Debug.Log($"AS: {CoinPickup.ActualScore}");
        Debug.Log($"FS: {CoinPickup.FinalScore}");

        SceneManager.LoadScene(CurrentSceneIndex);
    }
    public void ResetGameSession()
    {
        PlayerLives = 3;
        CoinPickup.ActualScore = 0;
        CoinPickup.FinalScore = 0;
        SceneManager.LoadScene(0);
        //FindObjectOfType<GameManager>().LoadMainMenu();
    }
}