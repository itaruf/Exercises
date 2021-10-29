using Rewired;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using UnityEngine;

// Speeds up the player's character movement speed for a limited period of time. Stoppable
public class Oxygen : MonoBehaviour
{
    private PlayerStats playerStats;
    private Pacemaker pacemaker;
    private Player playerEntity;
    private GameOverConditions gameOverConditions;
    [Header("Oxygen Properties")]
    [SerializeField] private int playerID = 0;
    [SerializeField] public float buffTimer = 5f;
    [SerializeField] public float oxygenCapacity = 99f;
    [SerializeField] public float movementSpeedBoost = 0.3f;
    [SerializeField] public float oxygenCapacityDecreaseValue = 33f;
    [SerializeField] bool refillOxygenCapacity;
    private float initialOxygenCapacity;
    private float initialBuffTimer;
    public bool hasOxygenBuff;
    void Start()
    {
        initialBuffTimer = buffTimer;
        initialOxygenCapacity = oxygenCapacity;
        playerEntity = ReInput.players.GetPlayer(playerID);
        playerStats = GetComponent<PlayerStats>();
        pacemaker = GetComponent<Pacemaker>();
        gameOverConditions = GetComponent<GameOverConditions>();
    }

    void Update()
    {
        Debug.Log(hasOxygenBuff);
        if (!gameOverConditions.hasLost)
        {
            if (playerStats.hasOxygen) Debug.Log("Oxygen Available");
            if (refillOxygenCapacity)
            {
                oxygenCapacity = initialOxygenCapacity;
                refillOxygenCapacity = false;
            }
            if (!hasOxygenBuff && CheckOxygenCapacity() && !pacemaker.hasPacemakerBuff)
                StartCoroutine(ActivateMovementSpeedBoost());
        }
        else
        {
            StopAllCoroutines();
        }
    }
    IEnumerator StartChrono()
    {
        yield return new WaitForSeconds(1f);
        buffTimer--;
        Debug.Log(buffTimer);
        if (buffTimer != 0)
        {
            playerStats.movementSpeed = Mathf.Clamp(playerStats.movementSpeed + movementSpeedBoost, playerStats.minSpeedValue, playerStats.maxSpeedValue);
            StartCoroutine(StartChrono());
        }
        else
        {
            //AudioManager.PlayAudioAsset(AudioManager.ClipsName.OXYGEN_CLOSING, null);
            if (!CheckOxygenCapacity())
            {
                DisableOxygen();
            }
            hasOxygenBuff = false;
            buffTimer = initialBuffTimer;
            yield break;
        }
    }
    IEnumerator ActivateMovementSpeedBoost()
    {
        while (true)
        {
            // Si le joueur obtient de l'oxygène et n'est pas buff
            if (playerStats.hasOxygen)
            {
                // Si on maintient la touche
                if (playerEntity.GetAxis("ItemOne") == 1 && !hasOxygenBuff)
                {
                    if (CheckOxygenCapacity())
                    {
                        StartCoroutine(StartChrono());
                        Debug.Log("Oxygen Used !");
                        oxygenCapacity -= oxygenCapacityDecreaseValue;
                        //Debug.Log("Oxygen Capacity: " + oxygenCapacity);
                        hasOxygenBuff = true;
                    }
                    else break;
                }
            }
            else break;
            yield return new WaitForSeconds(1f);
        }
    }

    void DisableOxygen()
    {
        if (!CheckOxygenCapacity())
        {
            playerStats.hasOxygen = false;
            Debug.Log("Oxygen Faided !");
        }
        hasOxygenBuff = false;
    }
    bool CheckOxygenCapacity()
    {
        if (oxygenCapacity <= 0)
        {
            return (false);
        }
        return (true);
    }
}
