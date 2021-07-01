using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Ball : MonoBehaviour
{
    [SerializeField] Paddle Paddle1;
    [SerializeField] float XBumpBall = 2f, YBumpBall = 15f;

    private bool HasStarted = false;
    public Vector3 PaddlePos;
    // State
    Vector3 PaddleToBallVector;

    // Audio
    private AudioSource BallBumpSound;


    Rigidbody2D MyRigidBody2D;
    private float RandomFactor = 0.2f;

    void Start()
    {
        PaddleToBallVector = this.transform.position - Paddle1.transform.position;
        Debug.Log(PaddleToBallVector);
        BallBumpSound = GetComponent<AudioSource>();
        MyRigidBody2D = GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        if (!HasStarted)
        {
            LockBallToPaddle();
        }
        LaunchBallOnClick();
    }
    private void OnCollisionEnter2D(Collision2D collision)
    {
        Vector3 VelocityTweak = new Vector3(
                UnityEngine.Random.Range(0f, RandomFactor),
                UnityEngine.Random.Range(0f, RandomFactor), 
                1
            );

        if (HasStarted)
        {
            MyRigidBody2D.velocity = new Vector3(MyRigidBody2D.velocity.x + VelocityTweak.x, MyRigidBody2D.velocity.y + VelocityTweak.y, 1);

            BallBumpSound.Play();
        }

    }
    private void LaunchBallOnClick()
    {
        if (Input.GetMouseButtonDown(0)) { // Click gauche

            if (this.transform.position == PaddlePos + PaddleToBallVector)
            {
                MyRigidBody2D.velocity = new Vector3(XBumpBall, YBumpBall, 1f);
                HasStarted = true;
            }
        }
    }

    void LockBallToPaddle()
    {
        PaddlePos = new Vector3(Paddle1.transform.position.x, Paddle1.transform.position.y, Paddle1.transform.position.z);
        this.transform.position = PaddlePos + PaddleToBallVector; // Créer un offset
    }
}
