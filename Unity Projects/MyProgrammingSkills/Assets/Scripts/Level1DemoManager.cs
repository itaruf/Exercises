using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class Level1DemoManager : MonoBehaviour
{
    public Dialogue dialogue;
    public GameObject player;
    public GameObject panel;
    public GameObject next;
    public GameObject playerIcon;
    public GameObject background;
    private Image bg;

    public float speedLecture = 4f;

    void Start()
    {
        bg = background.GetComponent<Image>();
        StartCoroutine(FadeIn());
        ActivateDeactiveObject(panel);
        player.GetComponent<Mover>().enabled = false;
        StartCoroutine(StartLevel1Demo());
    }

    void Update()
    {
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
    }
    public void ActivateDeactiveObject(GameObject go)
    {
        if (go != null)
        {
            bool isActive = go.activeSelf;
            go.SetActive(!isActive);
        }
    }
    IEnumerator WaitInput()
    {
        yield return new WaitForSeconds(speedLecture);
        ActivateDeactiveObject(next);
        yield return new WaitWhile(() => !Input.anyKey);
        ActivateDeactiveObject(next);
        yield return new WaitForSeconds(1f);
    }

    IEnumerator StartLevel1Demo()
    {
        yield return new WaitForSeconds(3f);
        ActivateDeactiveObject(panel);
        dialogue.LinesToDisplayNormal("\"...\"");
        yield return StartCoroutine(WaitInput());

        playerIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"Where am I ..?\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Wait a minute, this is... my game ?\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"This is the world I was working on ...! Or atleast it does look like it ?\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("...");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Everything is so messed up around here\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"What's wrong with the graphisms anyway ?\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Whatever, let's just take that headset off from my head now.\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"...\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"...........\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Huh..? I feel like my body isn't responding to anything...\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Wait a second, where is my body ?! Oh gosh...\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"That's just a dream, yes it is... just a very bad dream !\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"...\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"...........\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"...Let's walk around a bit, it could be a fun dream too...\"");
        yield return StartCoroutine(WaitInput());

        ActivateDeactiveObject(panel);
        player.GetComponent<Mover>().enabled = true;
    }
}
