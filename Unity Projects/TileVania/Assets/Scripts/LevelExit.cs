using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
public class LevelExit : MonoBehaviour
{
    private int CurrentLevelIndex = 0;

    [Header("Level Configs")]
    [SerializeField] private float LoadDelay = 0f;
    [SerializeField] private float LevelExitSlowMotion = 0f;
    private void Start()
    {
        CurrentLevelIndex = SceneManager.GetActiveScene().buildIndex;
    }
    public void OnTriggerEnter2D(Collider2D collision)
    {
        Vector3 TMP = collision.GetComponent<BoxCollider2D>().size;
        Vector3 TMP2 = collision.GetComponent<CapsuleCollider2D>().size;

        //collision.GetComponent<BoxCollider2D>().size = Vector3.zero;
        //collision.GetComponent<CapsuleCollider2D>().size = Vector3.zero;
        collision.GetComponent<Rigidbody2D>().constraints = RigidbodyConstraints2D.FreezeAll;
        collision.GetComponent<Rigidbody2D>().gravityScale = 0f;

        Debug.Log($"{collision.name } detected");

        StartCoroutine(LoadNextScene());

        collision.GetComponent<Rigidbody2D>().constraints = RigidbodyConstraints2D.None;
        collision.GetComponent<Rigidbody2D>().constraints = RigidbodyConstraints2D.FreezeRotation;
        collision.GetComponent<Rigidbody2D>().gravityScale = 1f;
        //collision.GetComponent<BoxCollider2D>().size = TMP;
        //collision.GetComponent<CapsuleCollider2D>().size = TMP2;
    }
    IEnumerator LoadNextScene()
    {
        CoinPickup.ActualScore = 0;
        Time.timeScale = LevelExitSlowMotion;

        yield return new WaitForSecondsRealtime(LoadDelay);
      
        Time.timeScale = 1f;
        SceneManager.LoadScene(++CurrentLevelIndex);
    }
}
