using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Mover : MonoBehaviour
{
    [SerializeField] float SpeedMultiplier = 5f;
    [SerializeField] float RotationMultiplier = 150f;
    public bool hasLaunched;
    Rigidbody rb;
    Vector3 mousePosition;

    //KeyBoard
    float xAxis;
    float yAxis;

    float newXPosition;
    float newYPosition;

    //Mouse
    float xMouseRotation;
    float yMouseRotation;

    public bool GetHasLaunched()
    {
        return (hasLaunched);
    }

    public void SetHasLaunched(in bool hasLaunched) 
    {
        this.hasLaunched = hasLaunched;
    }

    // Start is called before the first frame update
    void Start()
    {
        hasLaunched = false;
        rb = GetComponent<Rigidbody>();
    }

    // Update is called once per frame
    void Update()
    {
        xAxis = Input.GetAxis("Horizontal");
        yAxis = Input.GetAxis("Vertical");

        /*xMouseRotation = Input.GetAxis("Mouse X");
        yMouseRotation = Input.GetAxis("Mouse Y");*/

        // Position Updating
        XMovemement();
        YMovement();
        UpdatePosition();

        // Rotation Updating
        Rotate();
        //UpdateRotation();
    }

    void Launching()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            rb.AddRelativeForce(new Vector3(0,10 * Time.deltaTime,0));
        }
    }

    void UpdateRotation(in Vector3 vector3)
    {
        rb.freezeRotation = true; // Freezing rotation so we can manually rotate
        transform.Rotate(RotationMultiplier * Time.deltaTime * vector3);
        rb.freezeRotation = false;
    }

    void Rotate()
    {
        if (Input.GetKey(KeyCode.Q))
        {
            UpdateRotation(Vector3.forward);
            //DisablingGravity();
            SetHasLaunched(true);
        }

        if (Input.GetKey(KeyCode.D))
        {
            UpdateRotation(Vector3.back);
            //DisablingGravity();
            SetHasLaunched(true);
        }
    }

    void XMovemement()
    {
        newXPosition = transform.position.x + (xAxis * SpeedMultiplier * Time.deltaTime);
    }

    void YMovement()
    {
        if (Input.GetKeyDown(KeyCode.Z))
            SetHasLaunched(true);
        newYPosition = transform.position.y + (yAxis * SpeedMultiplier * Time.deltaTime);
    }
    void UpdatePosition()
    {
        transform.position = new Vector3(newXPosition, newYPosition, transform.position.z);
    }

    void EnablingGravity()
    {
        rb.useGravity = true;
    }

    void DisablingGravity()
    {
        rb.useGravity = false;
    }
}
