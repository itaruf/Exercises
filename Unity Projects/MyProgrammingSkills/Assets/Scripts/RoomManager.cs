using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class RoomManager : MonoBehaviour
{
    public Dialogue dialogue;
    public GameObject player;
    public GameObject panel;
    public GameObject cookieHappyIcon;
    public GameObject cookieAngryIcon;
    public GameObject cookie;
    public GameObject next;
    public GameObject arrows;
    public GameObject background;
    public GameObject playerHappyIcon;
    public GameObject playerChockedIcon;
    public ParticleSystem VRBug;

    public bool cookieMoveToPoint = false;
    public bool cookieMoveToPoint2 = false;
    public bool cookieMoveToPoint3 = false;
    public bool cookieMoveToPoint4 = false;

    public bool playerMoveToPoint = false;
    public bool playerMoveToPoint2 = false;

    public List<GameObject> cookiePositions;
    public List<GameObject> playerPositions;

    private Image bg;
    public float speedLecture = 4f;
    public float movementSpeed = 1f;

    public bool stopMusic = false;
    private float DeltaX;
    private float DeltaY;
    void Start()
    {
        bg = background.GetComponent<Image>();
        StartCoroutine(FadeIn());
        StartCoroutine(RoomScene());
    }

    void Update()
    {
        DeltaX = Input.GetAxis("Horizontal") * Time.deltaTime * movementSpeed;
        DeltaY = Input.GetAxis("Vertical") * Time.deltaTime * movementSpeed;

        MoveGameObjects();
    }

    public void MoveGameObjects()
    {
        if (cookieMoveToPoint)
        {
            MoveToPosition(cookie, cookiePositions[0]);
        }

        if (cookieMoveToPoint2)
        {
            MoveToPosition(cookie, cookiePositions[1]);
        }

        if (cookieMoveToPoint3)
        {
            MoveToPosition(cookie, cookiePositions[2]);
        }

        if (cookieMoveToPoint4)
        {
            MoveToPosition(cookie, cookiePositions[3]);
        }

        if (playerMoveToPoint)
        {
            MoveToPosition(player, playerPositions[0]);
        }

        if (playerMoveToPoint2)
        {
            MoveToPosition(player, playerPositions[1]);
        }
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

    IEnumerator WaitInput()
    {
        yield return new WaitForSeconds(speedLecture);
        ActivateDeactiveObject(next);
        yield return new WaitWhile(() => !Input.anyKey);
        ActivateDeactiveObject(next);
        yield return new WaitForSeconds(1f);
    }

    IEnumerator RoomScene()
    {
        // Player questions the scene
        panel.SetActive(true);

        yield return new WaitForSeconds(3f);

        dialogue.LinesToDisplayNormal($"\"............\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"\".............................\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"\".............................................\"");
        yield return StartCoroutine(WaitInput());

        playerHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"...That should do it for now !\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"\"............\"");
        yield return StartCoroutine(WaitInput());

        playerHappyIcon.SetActive(false);
        dialogue.LinesToDisplayNormal($"My name is Jake, I'am one hell of a programmer in my spare-time and... in my head !");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"In fact, I'm a salesman who just happens to love video games.");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"So here I'am working on my very own VR game prototype !");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"Quite ambitious isn't it ? I've been working on it for quite a while now.");
        yield return StartCoroutine(WaitInput());

        playerHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"Let's take a break for now. The end is on the corner Cookie !\"");
        yield return StartCoroutine(WaitInput());

        playerHappyIcon.SetActive(false);
        cookieHappyIcon.SetActive(true);
        cookieMoveToPoint = true;
        dialogue.LinesToDisplayNormal($"\"Meow !\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"This is Cookie, my cute and innocent little cat !");
        yield return StartCoroutine(WaitInput());

        cookieMoveToPoint = false;
        dialogue.LinesToDisplayNormal($"\"Meow !\"");
        yield return StartCoroutine(WaitInput());
        cookieHappyIcon.SetActive(false);

        playerHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"Let's move around here a bit, Cookie !\"");
        ActivateDeactiveObject(arrows);
        cookieMoveToPoint2 = true;
        player.GetComponent<Mover>().enabled = true;
        yield return new WaitForSecondsRealtime(3f);
        cookieMoveToPoint2 = false;
        yield return new WaitForSecondsRealtime(3f);
        cookieMoveToPoint3 = true;
        yield return new WaitForSecondsRealtime(3f);
        cookieMoveToPoint3 = false;
        yield return new WaitForSecondsRealtime(3f);
        cookieMoveToPoint4 = true;
        yield return new WaitForSecondsRealtime(3f);
        cookieMoveToPoint4 = false;
        player.GetComponent<Mover>().enabled = false;
        ActivateDeactiveObject(arrows);

        dialogue.LinesToDisplayNormal($"\"Nevermind, I shouldn't waste my time and get back to work\".");
        yield return StartCoroutine(WaitInput());

        playerHappyIcon.SetActive(false);
        cookieAngryIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"...\"");
        yield return StartCoroutine(WaitInput());
        cookieAngryIcon.SetActive(false);

        playerHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"Let's have a try ! Been a while since I put my VR headset tho...\"");
        playerMoveToPoint = true;
        yield return StartCoroutine(WaitInput());
        yield return new WaitForSecondsRealtime(2f);
        playerMoveToPoint = false;

        playerMoveToPoint2 = true;
        yield return new WaitForSecondsRealtime(2f);
        playerMoveToPoint2 = false;

        dialogue.LinesToDisplayNormal($"\"Well, there were still quite some bugs... but that should be fine...\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"\"And I definitely need to work on the graphisms next !\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"\"...Hmm okay.. not bad...\"");
        yield return StartCoroutine(WaitInput());

        // Events : particles
        stopMusic = true;
        VRBug.Play();
        playerHappyIcon.SetActive(false);
        cookieHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"Meow ..?\"");
        yield return StartCoroutine(WaitInput());
        cookieHappyIcon.SetActive(false);

        playerHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"Not now Cookie, I'm busy.\"");
        yield return StartCoroutine(WaitInput());

        playerHappyIcon.SetActive(false);
        playerChockedIcon.SetActive(true);
        dialogue.LinesToDisplayNormal($"\"That's weird, I feel like it's hot as hell all of a sudden... \"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal($"\"Wait what's this... woah !!!\"");
        yield return StartCoroutine(WaitInput());
        VRBug.Stop();
        SceneManager.LoadScene("Level1Demo");
    }

    public void MoveToPosition(GameObject gameObject1, GameObject pointToGo)
    {
        gameObject1.transform.position = Vector3.Lerp(gameObject1.transform.position, pointToGo.transform.position, Time.deltaTime*movementSpeed);
    }

    public void ActivateDeactiveObject(GameObject go)
    {
        if (go != null)
        {
            bool isActive = go.activeSelf;
            go.SetActive(!isActive);
        }
    }
    public void MoveCookie()
    {
    }
}
