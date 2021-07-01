using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public void LoadNextScene()
    {
        int CurrentSceneIndex = SceneManager.GetActiveScene().buildIndex;

        //SceneManager.LoadScene(++CurrentSceneIndex);

        if (!(SceneManager.GetActiveScene().name == "GameOver"))
        {
            SceneManager.LoadScene(++CurrentSceneIndex);
        }
    }
    public void LoadStartScene()
    {
        SceneManager.LoadScene(0);
        //FindObjectOfType<GameStatus>().RestartGame();
    }

    public void Quit()
    {
        Debug.Log("Quiting the application.");
        Application.Quit();
    }
}
