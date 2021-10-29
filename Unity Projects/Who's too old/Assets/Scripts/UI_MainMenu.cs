using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class UI_MainMenu : MonoBehaviour
{
    [SerializeField] private Animator buttonsAnimator;
    [SerializeField] private Animator imageCreditAnimator;
    [SerializeField] private AnimationClip buttonsAnimationClip;
    [SerializeField] private AnimationClip imageCreditAnimationClip;

    [SerializeField] private Button playButton;
    [SerializeField] private Button creditsButton;
    [SerializeField] private Button controlsButton;
    [SerializeField] private Button quitButton;


    [SerializeField] private GameObject goCredits;
    [SerializeField] private GameObject goControls;

    [SerializeField] private Sprite playSprite;
    [SerializeField] private Sprite playSpriteHover;

    [SerializeField] private Sprite creditSprite;
    [SerializeField] private Sprite creditSpriteHover;

    [SerializeField] private Sprite controlsSprite;
    [SerializeField] private Sprite controlsSpriteHover;

    [SerializeField] private Sprite quitSprite;
    [SerializeField] private Sprite quitSpriteHover;

    // [SerializeField] private Image blackScreen;
    private float blackScreenTimer = 0.0f;

    [SerializeField] private bool isCredit = false, isControl = false;

    // Start is called before the first frame update
    void Start()
    {
        //StartCoroutine("BlackScreen");
    }

    // Update is called once per frame
  

    public void PlayButton()
    {
        GameObject.Find("Menu Audio").GetComponent<AudioSource>().Stop();
        SceneManager.LoadScene("LD");
    }

    public void QuitButton()
    {
        Application.Quit();
    }

    public void PlaySound()
    {
        //AudioManager.PlayAudioAsset()
    }

    public void CreditsButton()
    {
        if (isControl)
        {
            goCredits.SetActive(true);
            goControls.SetActive(false);
            isControl = false;
            isCredit = true;
        }
        else if(isCredit)
        {
            isCredit = false;
        }

        if (!buttonsAnimator.GetBool("On") == true && !imageCreditAnimator.GetBool("On") == true)
        {
            isCredit = true;
            goCredits.SetActive(true);
            buttonsAnimator.SetBool("Off", false);
            imageCreditAnimator.SetBool("Off", false);
            buttonsAnimator.SetBool("On", true);
            imageCreditAnimator.SetBool("On", true);
            IEnumerator coroutine = WaitForEndOfAnimation(imageCreditAnimationClip);
            StartCoroutine(coroutine);
        }
        else if(!isCredit)
        {

            buttonsAnimator.SetBool("On", false);
            imageCreditAnimator.SetBool("On", false);
            buttonsAnimator.SetBool("Off", true);
            imageCreditAnimator.SetBool("Off", true);
            IEnumerator coroutine = WaitForEndOfAnimation(imageCreditAnimationClip);
            StartCoroutine(coroutine);
            StartCoroutine("DisableBothGameObjects");
            isCredit = false;
        }

        
    }

    public void ControlsButton()
    {
        if(isCredit)
        {
            goCredits.SetActive(false);
            goControls.SetActive(true);
            isCredit = false;
            isControl = true;
        }
        else if (isControl)
        {
            isControl = false;
        }

        if (!buttonsAnimator.GetBool("On") == true && !imageCreditAnimator.GetBool("On") == true)
        {
            isControl = true;
            goControls.SetActive(true);
            buttonsAnimator.SetBool("Off", false);
            imageCreditAnimator.SetBool("Off", false);
            buttonsAnimator.SetBool("On", true);
            imageCreditAnimator.SetBool("On", true);
            IEnumerator coroutine = WaitForEndOfAnimation(imageCreditAnimationClip);
            StartCoroutine(coroutine);
        }
        else if(!isControl)
        {

            buttonsAnimator.SetBool("On", false);
            imageCreditAnimator.SetBool("On", false);
            buttonsAnimator.SetBool("Off", true);
            imageCreditAnimator.SetBool("Off", true);
            IEnumerator coroutine = WaitForEndOfAnimation(imageCreditAnimationClip);
            StartCoroutine(coroutine);
            StartCoroutine("DisableBothGameObjects");
            isControl = false;
        }


    }

    public void DisableButtons()
    {
        playButton.interactable = false;
        creditsButton.interactable = false;
        controlsButton.interactable = false;
        quitButton.interactable = false;
    }

    public void EnableButtons()
    {
        playButton.interactable = true;
        creditsButton.interactable = true;
        controlsButton.interactable = true;
        quitButton.interactable = true;
    }

    IEnumerator WaitForEndOfAnimation(AnimationClip clip)
    {
        DisableButtons();
        yield return new WaitForSeconds(clip.length);
        EnableButtons();
    }

    IEnumerator DisableBothGameObjects()
    {
        yield return new WaitForSeconds(0.60f);
        goControls.SetActive(false);
        goCredits.SetActive(false);
    }

    /* IEnumerator BlackScreen()
     {
         yield return new WaitForSeconds(10.5f);
         blackScreen.color = new Color(blackScreen.color.r, blackScreen.color.g, blackScreen.color.b, blackScreen.color.a + 1);
         Debug.Log(blackScreen.color.a);
         StartCoroutine("BlackScreen");
     }*/


    public void HoverFonctionPlay()
    {
        playButton.image.sprite = playSpriteHover;
    }

    public void FonctionPlay()
    {
        playButton.image.sprite = playSprite;
    }

    public void HoverFonctionCredit()
    {
        creditsButton.image.sprite = creditSpriteHover;
    }

    public void FonctionCredit()
    {
        creditsButton.image.sprite = creditSprite;
    }

    public void HoverFonctionControls()
    {
        controlsButton.image.sprite = controlsSpriteHover;
    }

    public void FonctionControls()
    {
        controlsButton.image.sprite = controlsSprite;
    }

    public void HoverFonctionQuit()
    {
        quitButton.image.sprite = quitSpriteHover;
    }

    public void FonctionQuit()
    {
        quitButton.image.sprite = quitSprite;
    }
}
