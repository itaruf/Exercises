using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpinOnPosition : MonoBehaviour
{
    private float yDegreeToRotatePerFrame = 0.5f;
    private float xAngle; 
    private float yAngle;
    private float zAngle;

    // Start is called before the first frame update
    void Start()
    {
        xAngle = transform.rotation.eulerAngles.x;
        yAngle = yDegreeToRotatePerFrame;
        zAngle = transform.rotation.eulerAngles.z;
    }

    // Update is called once per frame
    void Update()
    {
        transform.Rotate(transform.rotation.eulerAngles.x, yDegreeToRotatePerFrame, transform.rotation.eulerAngles.z);
    }
}