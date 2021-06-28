using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallMovement : MonoBehaviour
{
    public float MovementSpeed;
    public float ExtraSpeedPerHit;
    public float MaxExtraSpeed;

    int HitCounter = 0;
    // Start is called before the first frame update
    void Start()
    {
        StartCoroutine(this.StartBall());
    }
    public void PositionBall(bool IsStartingPlayer1)
    {
        this.GetComponent<Rigidbody2D>().velocity = new Vector2(0, 0);

        if (IsStartingPlayer1)
        {
            this.gameObject.transform.localPosition = new Vector3(-90, 20, 0); // Au tour du player 1
        }
        else
        {
            this.gameObject.transform.localPosition = new Vector3(90, 20, 0); // Au tour du player 2
        }
    }
    public IEnumerator StartBall(bool IsStartingPlayer1 = true) // default parameter
    {
        this.PositionBall(IsStartingPlayer1);
        this.HitCounter = 0;

        yield return (new WaitForSeconds(2)); // On attend 2 secondes après la réinitialisation de la partie

        if (IsStartingPlayer1)
        {
            this.MoveBall(new Vector2(-1, 0)); // Bouger la balle en direction du player 1
        }
        else
        {
            this.MoveBall(new Vector2(1, 0)); // Bouger la balle en direction du player 
        }
    }

    public void MoveBall(Vector2 Direction)
    {
        // Normaliser le vector
        Direction = Direction.normalized;
        float Speed = this.MovementSpeed + (this.HitCounter * this.ExtraSpeedPerHit);

        Rigidbody2D RB2D = this.gameObject.GetComponent<Rigidbody2D>();
        RB2D.velocity = Direction * Speed;
    }

    public void IncreaseHitCounter()
    {
        if (this.HitCounter * this.ExtraSpeedPerHit <= this.MaxExtraSpeed) 
            this.HitCounter++;
    }
}
