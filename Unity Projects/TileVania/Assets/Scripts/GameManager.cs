using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class GameManager : MonoBehaviour
{
    public void StartFirstLevel()
    {
        SceneManager.LoadScene(1);
    }
    public void LoadMainMenu()
    {
        FindObjectOfType<GameSession>().ResetGameSession();
    }
}
