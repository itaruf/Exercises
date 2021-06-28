using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayButton : MonoBehaviour
{
    // Start is called before the first frame update
    void Start() { 
        Time.timeScale = 1;
    }
    public void PlayGame()
    {
        SceneManager.LoadScene("GameBoard");
    }
}
