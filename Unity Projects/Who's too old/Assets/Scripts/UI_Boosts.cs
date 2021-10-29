using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class UI_Boosts : MonoBehaviour
{
    public DoorManager doorManager;
    public PlayerStats playerStats;
    public Pacemaker pacemaker;
    public Cachet cachet;
    public Oxygen oxygene;
    [SerializeField] private Image warningOpeningImage;
    [SerializeField] private Image warningClosingImage;

    [SerializeField] private Image iconPacemaker;
    [SerializeField] private Image iconPills;
    [SerializeField] private Image iconOxygen;

    [SerializeField] private Image worldPosOxygen;
    [SerializeField] private Slider worldPosOxygenSlider;
    [SerializeField] private Gradient worldPosOxygenColorGradient;

    [SerializeField] private GameObject cachetGo;
    [SerializeField] private Image doorImage;
    [SerializeField] private Color32 doorRed;
    [SerializeField] private Color32 doorOrange;
    [SerializeField] private Color32 doorGreen;

    private bool fadeInOpening = false, fadeInClosing = false;
    private bool fadePacemaker = false;
    private bool cachetUsed = false, firstTimeCachet = true;

    private float timerWarningOpening = 0.0f, timerWarningClosing = 0.0f;
    private float timerPacemaker = 0.0f;
    private float timerOxygene = 0.0f;

    void Start()
    {
        WarningOpening();
    }

    void Update()
    {
        #region Warnings Update
        if (fadeInOpening)
        {
            if(warningOpeningImage.enabled == false)
            {
                warningOpeningImage.enabled = true;
                timerWarningOpening = 0;
                warningOpeningImage.color = new Color(warningOpeningImage.color.r, warningOpeningImage.color.g, warningOpeningImage.color.b, 1);
            }
            timerWarningOpening += Time.deltaTime;
            warningOpeningImage.color = new Color(warningOpeningImage.color.r, warningOpeningImage.color.g, warningOpeningImage.color.b, Mathf.PingPong(timerWarningOpening, 0.75f));
        }
        else if(fadeInClosing)
        {
            if (warningClosingImage.enabled == false)
            {
                warningClosingImage.enabled = true;
                timerWarningOpening = 0;
                warningClosingImage.color = new Color(warningClosingImage.color.r, warningClosingImage.color.g, warningClosingImage.color.b, 1);
            }
            timerWarningOpening += Time.deltaTime;
            warningClosingImage.enabled = true;
            warningClosingImage.color = new Color(warningClosingImage.color.r, warningClosingImage.color.g, warningClosingImage.color.b, Mathf.PingPong(timerWarningOpening, 0.75f));
        }
        #endregion

        #region Pacemaker Update
        if (playerStats.hasPacemaker)
        {
            
            EnablePacemaker();
        }

        if (fadePacemaker)
        {
            if (iconPacemaker.enabled == false)
            {
                iconPacemaker.enabled = true;
                timerPacemaker = 0;
                iconPacemaker.color = new Color(iconPacemaker.color.r, iconPacemaker.color.g, iconPacemaker.color.b, 1);
            }
            timerPacemaker += Time.deltaTime;
            iconPacemaker.color = new Color(iconPacemaker.color.r, iconPacemaker.color.g, iconPacemaker.color.b, Mathf.PingPong(timerPacemaker, 0.75f));
        }
        #endregion

        #region Cachet Update
        if(!playerStats.hasCachet && firstTimeCachet)
        {
            firstTimeCachet = false;
            cachetUsed = true;
        }

        if (cachetUsed)
        {
            StartCoroutine("Cachet");
            cachetUsed = false;
        }

        if(playerStats.hasCachet)
        {
            cachetGo.SetActive(true);
        }
        else
        {
            cachetGo.SetActive(false);
        }
        #endregion

        #region Oxygene Update
        if (oxygene.hasOxygenBuff)
        {
            Debug.Log("Coucou");
            timerWarningOpening += Time.deltaTime;
            iconOxygen.color = new Color(iconOxygen.color.r, iconOxygen.color.g, iconOxygen.color.b, Mathf.PingPong(timerOxygene, 0.75f));
        }
        else
        {
            timerOxygene = 0;
            iconOxygen.color = new Color(iconOxygen.color.r, iconOxygen.color.g, iconOxygen.color.b, 1);
        }
        #endregion

        #region WorldPosOxygen
        SetupOxygenValue();
        #endregion
    }

    #region Warnings
    public void WarningOpening()
    {
        StartCoroutine("WarningOpeningDoor");
    }

    public void WarningClosing()
    {
        StartCoroutine("WarningClosingDoor");
    }

    IEnumerator WarningOpeningDoor()
    {
        yield return new WaitForSeconds(doorManager._doorTimerClosed - 4.5f);
        fadeInOpening = true;
        yield return new WaitForSeconds(4.5f);
        fadeInOpening = false;
        warningOpeningImage.enabled = false;
        WarningClosing();
    }

    IEnumerator WarningClosingDoor()
    {
        doorImage.enabled = true;
        doorImage.color = new Color32(77,255,51,255);
        yield return new WaitForSeconds(doorManager._doorTimerOpened / 3);
        doorImage.color = new Color32(255, 202, 51, 255);
        yield return new WaitForSeconds(doorManager._doorTimerOpened / 3);

        doorImage.color = new Color32(255, 51, 51, 255);
        yield return new WaitForSeconds((doorManager._doorTimerOpened / 3) - 4.5f);
        fadeInClosing = true;
        yield return new WaitForSeconds(4.5f);
        fadeInClosing = false;
        warningClosingImage.enabled = false;
        WarningOpening();
        doorImage.enabled = false;
    }
    #endregion

    #region Pacemaker
    public void EnablePacemaker()
    {
        StartCoroutine("PaceMaker");
    }
    IEnumerator PaceMaker()
    {
        iconPacemaker.enabled = true;
        yield return new WaitForSeconds((pacemaker.buffTimer * 2) / 3);
        fadePacemaker = true;
        yield return new WaitForSeconds(pacemaker.buffTimer / 3);
        iconPacemaker.enabled = false;
        fadePacemaker = false;
        iconPacemaker.color = new Color(iconPacemaker.color.r, iconPacemaker.color.g, iconPacemaker.color.b, 1);
    }
    #endregion

    #region Cachet
    IEnumerator Cachet()
    {
        iconPills.enabled = true;
        yield return new WaitForSeconds(3.0f);
        iconPills.enabled = false;
    }
    #endregion

    #region WorldPosOxygen
    public void SetupOxygenValue()
    {
        int oxygenValue;
        oxygenValue = (int)oxygene.oxygenCapacity;
        worldPosOxygenSlider.value = oxygenValue;
        worldPosOxygen.color = worldPosOxygenColorGradient.Evaluate(worldPosOxygenSlider.normalizedValue);
    }
    #endregion
}
