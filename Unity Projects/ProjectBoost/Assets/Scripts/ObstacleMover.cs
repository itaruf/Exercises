using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ObstacleMover : MonoBehaviour
{
    [SerializeField] float minXPosition = -33;
    [SerializeField] float maxXPosition = -24;
    [SerializeField] float distancePerFrame = 0.004f;
    private bool hasReachedMaxXPosition;
    // Start is called before the first frame update
    void Start()
    {
        hasReachedMaxXPosition = false;
    }

    // Update is called once per frame
    void Update()
    {
        MoveOnXAxis();
    }

    private bool MyApproximation(float a, float b) {
        return (Mathf.Abs(Mathf.Abs(a) - Mathf.Abs(b)) < 1);
    }

    void MoveOnXAxis()
    {

        if (!Mathf.Approximately(gameObject.transform.position.x, maxXPosition) && !hasReachedMaxXPosition)
        {
            gameObject.transform.position = new Vector3
                (
                gameObject.transform.position.x + distancePerFrame,
                gameObject.transform.position.y,
                gameObject.transform.position.z
                );
            if (MyApproximation(gameObject.transform.position.x, maxXPosition))
            {
                hasReachedMaxXPosition = true;
            }
        }
        else
        {
            gameObject.transform.position = new Vector3
               (
               gameObject.transform.position.x - distancePerFrame,
               gameObject.transform.position.y,
               gameObject.transform.position.z
               );
            if (MyApproximation(minXPosition, gameObject.transform.position.x))
            {
                hasReachedMaxXPosition = false;
            }
        }
    }
}