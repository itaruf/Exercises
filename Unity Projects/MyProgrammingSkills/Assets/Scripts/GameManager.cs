using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
public class GameManager : MonoBehaviour
{
    public int currentSceneIndex = 0;
    public GameObject background;
    public GameObject commandsUI;
    private Image bg;
    void Start()
    {
        bg = background.GetComponent<Image>();
        StartCoroutine(FadeIn());
    }

    private void Update()
    {
        OpenCombat();
    }

    IEnumerator FadeIn()
    {
        float targetAlpha = 0f;
        Color curColor = bg.color;
        while (Mathf.Abs(curColor.a - targetAlpha) > 0.0001f)
        {
            Debug.Log(bg.material.color.a);
            curColor.a = Mathf.Lerp(curColor.a, targetAlpha, 0.5f * Time.deltaTime);
            bg.color = curColor;
            yield return null;
        }
        bg.gameObject.SetActive(false);
    }
    public void OpenCombat()
    {
        if (Input.GetKeyDown(KeyCode.R))
        {
            SceneManager.LoadScene("Combat");
        }
    }
    public void LoadNextLevel()
    {
        currentSceneIndex = SceneManager.GetActiveScene().buildIndex;
        SceneManager.LoadScene(++currentSceneIndex);
    }
    public void LoadNextLevel(int indexScene)
    {
        SceneManager.LoadScene(indexScene);
    }

    public void Quit()
    {
        Application.Quit();
    }
    public void PanelOpener()
    {
        if (commandsUI != null)
        {
            bool isActive = commandsUI.activeSelf;
            commandsUI.SetActive(!isActive);
        }
    }
}
