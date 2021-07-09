using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public void LoadNextScene()
    {
        int CurrentSceneIndex = SceneManager.GetActiveScene().buildIndex;
        SceneManager.LoadScene(++CurrentSceneIndex);
    }
    public void LoadStartScene()
    {
        SceneManager.LoadScene("StartMenu");
    }
    public void Quit()
    {
        Debug.Log("Quiting the application.");
        Application.Quit();
    }
}
