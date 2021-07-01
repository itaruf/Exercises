using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Block : MonoBehaviour
{
    public static int DestroyedBlock = 0;
    public static int Score = 0;
    private int MaxNumberOfHits = 2;

    [SerializeField] GameObject BlockSparklesVFX;
    [SerializeField] int NumberOfHits;
    [SerializeField] Sprite[] HitSprites;
    // Cache reference
    public Level Level;

    private GameManager GM;

    private void Start()
    {
        DestroyedBlock = 0;
        Level = FindObjectOfType<Level>();
        Level.CountBreakableBlocks();
        Debug.Log(Level.BreakableBlocks);
    }
    private void TriggerSparklesVFX()
    {
        GameObject Sparkles = Instantiate(BlockSparklesVFX, this.transform.position, this.transform.rotation);
    }

    private void HandleHit()
    {
        NumberOfHits++;

        if (NumberOfHits == MaxNumberOfHits)
        {
            TriggerSparklesVFX();
            Destroy(gameObject);
            DestroyedBlock += 1;
            Score += 1;
        }
        else
        {
            ShowNextHitSprite();
        }
    }

    private void ShowNextHitSprite()
    {
        GetComponent<SpriteRenderer>().sprite = HitSprites[NumberOfHits - 1];
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (this.tag == "Breakable")
        {
            HandleHit();
            //Debug.Log(DestroyedBlock);
        }
    }

    public static int GetScore()
    {
        return (Score);
    }


}
