using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CoinPickup : MonoBehaviour
{
    [SerializeField] AudioClip CoinPickupSFX;
    public static int ActualScore = 0;
    public static int FinalScore = 0;
    private void OnTriggerEnter2D(Collider2D collision)
    {
        ActualScore += 100;
        FinalScore += 100;
        AudioSource.PlayClipAtPoint(CoinPickupSFX, collision.transform.position);
        Destroy(gameObject);
    }
    public static int GetScore()
    {
        return (ActualScore);
    }
    public void SetScore(in int OldScore)
    {
        ActualScore = OldScore; 
    }
    public static int GetFinalScore()
    {
        return (FinalScore);
    }
    public void SetFinalScore(in int OldFinalScore)
    {
        FinalScore = OldFinalScore;
    }
}
