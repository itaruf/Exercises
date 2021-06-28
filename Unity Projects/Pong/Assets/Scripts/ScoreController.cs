using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class ScoreController : MonoBehaviour
{
    private int ScorePlayer1 = 0;
    private int ScorePlayer2 = 0;

    public GameObject ScoreTextPlayer1;
    public GameObject ScoreTextPlayer2;

    public int GoalToWin;

    private void Update()
    {       
        if (this.ScorePlayer1 >= this.GoalToWin || this.ScorePlayer2 >= this.GoalToWin)
        {
            Debug.Log("Goal reached");
            SceneManager.LoadScene("GameOver");
        }
    }
    private void FixedUpdate() // Update UI
    {
        Text UiScorePlayer1 = this.ScoreTextPlayer1.GetComponent<Text>();
        UiScorePlayer1.text = this.ScorePlayer1.ToString();

        Text UiScorePlayer2 = this.ScoreTextPlayer2.GetComponent<Text>();
        UiScorePlayer2.text = this.ScorePlayer2.ToString();
    }
    public void GoalPlayer1()
    {
        this.ScorePlayer1++;
    }
    public void GoalPlayer2()
    {
        this.ScorePlayer2++;
    }
}
