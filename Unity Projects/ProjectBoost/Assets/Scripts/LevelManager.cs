using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class LevelManager : MonoBehaviour
{
    private int currentLevelIndex = 0;
    public int CurrentLevelIndex { get => currentLevelIndex; set => currentLevelIndex = value; }

    // Start is called before the first frame update
    void Start()
    {
        CurrentLevelIndex = SceneManager.GetActiveScene().buildIndex;
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public IEnumerator OpenNextLevel()
    {
        yield return (new WaitForSeconds(2f));
        SceneManager.LoadScene(CurrentLevelIndex);
    }
}
