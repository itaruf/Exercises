using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RacketPlayer2 : MonoBehaviour
{
    // Start is called before the first frame update
    public float MovementSpeed;
    // Start is called before the first frame update
    private void FixedUpdate()
    {
        float Vertical = Input.GetAxisRaw("Vertical2");

        Rigidbody2D RGB2D = this.GetComponent<Rigidbody2D>();
        RGB2D.velocity = new Vector2(0, Vertical) * MovementSpeed;
    }
}
