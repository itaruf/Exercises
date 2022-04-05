using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Mover : MonoBehaviour
{
    [SerializeField] float playerMovementSpeed = 5f;
    [SerializeField] float waitTimeBeforeEnablingGravity = 2f;
    private Rigidbody constraints;
    private float timer;
    // Start is called before the first frame update
    void Start()
    {
        gameObject.GetComponent<MeshRenderer>().enabled = false;
        constraints = gameObject.GetComponent<Rigidbody>();
        constraints.constraints = RigidbodyConstraints.FreezePosition;
        StartCoroutine(EnableGravity());
    }

    // Update is called once per frame
    void Update()
    {
        timer = Time.time;
        if (timer >= waitTimeBeforeEnablingGravity)
        {
            Move();
        }
    }
    void Move()
    {
        float DeltaX = Input.GetAxis("Horizontal") * playerMovementSpeed * Time.deltaTime;
        float DeltaZ = Input.GetAxis("Vertical") * playerMovementSpeed * Time.deltaTime;
        //float DeltaY = Input.GetAxis("Jump") * playerMovementSpeed * Time.deltaTime;

        gameObject.transform.position = new Vector3(gameObject.transform.position.x + DeltaX, gameObject.transform.position.y, gameObject.transform.position.z);
        gameObject.transform.position = new Vector3(gameObject.transform.position.x, gameObject.transform.position.y, gameObject.transform.position.z + DeltaZ);
        //gameObject.transform.position = new Vector3(gameObject.transform.position.x, gameObject.transform.position.y + DeltaY, gameObject.transform.position.z);
    }
    IEnumerator EnableGravity()
    {
        yield return new WaitForSeconds(waitTimeBeforeEnablingGravity);
        Debug.Log("Enabling Gravity");
        gameObject.GetComponent<Rigidbody>().useGravity = true;
        gameObject.GetComponent<MeshRenderer>().enabled = true;
        constraints.constraints = RigidbodyConstraints.None;
    }
}
