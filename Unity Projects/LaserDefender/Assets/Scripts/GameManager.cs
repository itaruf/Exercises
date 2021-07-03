using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class GameManager : MonoBehaviour
{
    public static int CurrentSceneIndex = 0;

    public void LoadNextScene()
    {
        CurrentSceneIndex = SceneManager.GetActiveScene().buildIndex;
        Debug.Log("Index current scene: "+CurrentSceneIndex);

        if (!(SceneManager.GetActiveScene().name == "GameOver") && !(SceneManager.GetActiveScene().name == "MainMenu"))
        {
            StartCoroutine(DelayBeforeNextScene()); 
        }
        else
        {
            SceneManager.LoadScene(++CurrentSceneIndex);
        }
    }
    IEnumerator DelayBeforeNextScene()
    {
        yield return new WaitForSeconds(3f);
        SceneManager.LoadScene(++CurrentSceneIndex);
    }
    public void LoadStartScene()
    {
        SceneManager.LoadScene(0);
        Enemy.TotalPoints = 0;
        Player.Health = 1000f;
    }
    public void Quit()
    {
        Debug.Log("Quiting the application.");
        Application.Quit();
    }
}
