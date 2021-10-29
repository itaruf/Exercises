using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameOverConditions : MonoBehaviour
{
    private PlayerStats playerStats;
    public bool hasLost;
    public bool playOnce;
    [SerializeField] public float restartLevelDelay = 3f;

    void Start()
    {
        playerStats = GetComponent<PlayerStats>();
        playOnce = false;
    }

    void Update()
    {
        if (hasLost && !playOnce)
        {
            Debug.Log("Lost !");
            playerStats.movementSpeed = 0f;
            playOnce = true;
            AudioManager.StopMusic();
            AudioManager.PlayAudioAsset(AudioManager.ClipsName.GAMEOVER, null);
        }
        CheckPlayerMovementSpeed();
    }
    public void CheckPlayerMovementSpeed()
    {
        if (playerStats.movementSpeed == 0)
        {
            hasLost = true;
        }
    }

    /*private void OnTriggerEnter(Collider other)
    {
        if(other.CompareTag("Wall") || other.CompareTag("Nurse"))
        {
            hasLost = true;
            StartCoroutine(RestartScene());
        }
    }*/
    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Wall"))
        {
            hasLost = true;
            StartCoroutine(RestartScene());
        }
    }
    IEnumerator RestartScene()
    {
        yield return new WaitForSeconds(restartLevelDelay);
        AudioManager.PlayMusic();
        SceneManager.LoadScene("LD");
    }
}
