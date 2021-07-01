using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameStatus : MonoBehaviour
{
    [Range(0.1f, 10f)] [SerializeField] private float TimeScale = 1f;
    [SerializeField] public int Score = 0;
    [SerializeField] public Text ScoreText;

    // Update is called once per frame
    void Update()
    {
        Score = Block.GetScore();
        ScoreText.text = Block.GetScore().ToString();
        Time.timeScale = TimeScale;
    }

    public void RestartGame()
    {
        Destroy(gameObject);
    }
}
