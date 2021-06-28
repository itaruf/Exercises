using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RacketPlayer1 : MonoBehaviour
{
    public float MovementSpeed;
    // Start is called before the first frame update
    private void FixedUpdate()
    {
        float Vertical = Input.GetAxisRaw("Vertical");

        Rigidbody2D RGB2D = this.GetComponent<Rigidbody2D>();
        RGB2D.velocity = new Vector2(0, Vertical) * MovementSpeed;
    }
}
