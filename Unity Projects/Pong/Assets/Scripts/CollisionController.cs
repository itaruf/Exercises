using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollisionController : MonoBehaviour
{
    public BallMovement BallMovement;
    public ScoreController ScoreController;
    
    void BounceFromRacket(Collision2D Col)
    {
        Vector3 BallPosition = this.transform.position;
        Vector3 RacketPosition = Col.gameObject.transform.position; // On récupère la position de l'objet que la balle rencontre

        float RacketHight = Col.collider.bounds.size.y;

        float X;

        if (Col.gameObject.name == "RacketPlayer1")
        {
            X = 1;
        }
        else
        {
            X = -1;
        }

        float Y = (BallPosition.y - RacketPosition.y) / RacketHight;

        this.BallMovement.IncreaseHitCounter();
        this.BallMovement.MoveBall(new Vector2(X, Y)); 
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.name == "RacketPlayer1" || collision.gameObject.name == "RacketPlayer2")
        {
            this.BounceFromRacket(collision);
        }
        else if (collision.gameObject.name == "WallLeft")
        {
            Debug.Log("Collision with WallLeft");
            this.ScoreController.GoalPlayer2();
            StartCoroutine(this.BallMovement.StartBall(true));
        }
        else if (collision.gameObject.name == "WallRight")
        {
            Debug.Log("Collision with WallRight");
            this.ScoreController.GoalPlayer1();
            StartCoroutine(this.BallMovement.StartBall(false));
        }
    }
}
