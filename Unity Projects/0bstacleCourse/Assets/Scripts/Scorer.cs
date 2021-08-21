using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Scorer : MonoBehaviour
{
    [SerializeField] int ScorePoint = 0;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        Debug.Log("Current Score Point: " + ScorePoint);
    }

    private void OnCollisionEnter(Collision collision)
    {
        //if (collision.gameObject.GetComponent<BoxCollider>() && !collision.gameObject.CompareTag("Hit By The Player"))
        if (collision.gameObject.CompareTag("Obstacle"))
        {
            ScorePoint++;
        }
        else if (collision.gameObject.CompareTag("Hit By The Player"))
        {
            Debug.Log($"{collision.gameObject.name} was already hit by the player.");
        }
    }
}
