using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    [SerializeField] public float MoveSpeed = 10f;
    [SerializeField] public float PlayerPadding = 0.05f;
    [SerializeField] public GameObject PLaser;
    [SerializeField] public float ProjectileSpeed = 20f;
    [SerializeField] public float ProjectileFiringPeriod = 2f;

    Camera GameCamera;

    float MinX, MaxX, MinY, MaxY;

    Coroutine FireCoroutine;
    void Start()
    {
        SetUpMoveBoundaries();
    }

    private void SetUpMoveBoundaries()
    {
        GameCamera = Camera.main;
        MinX = GameCamera.ViewportToWorldPoint(new Vector3(0, 0, 0)).x + PlayerPadding;
        MaxX = GameCamera.ViewportToWorldPoint(new Vector3(1, 0, 0)).x - PlayerPadding;

        MinY = GameCamera.ViewportToWorldPoint(new Vector3(0, 0, 0)).y + PlayerPadding;
        MaxY = GameCamera.ViewportToWorldPoint(new Vector3(0, 1, 0)).y - PlayerPadding;
    }
    void Update()
    {
        // Movement needs to happen in update
        Move();
        Fire();
    }

    private void Fire()
    {
        if (Input.GetKeyDown(KeyCode.Mouse0))
        {
            FireCoroutine = StartCoroutine(FireContinuously());
        }
        if (Input.GetKeyDown(KeyCode.Mouse1))
        {
            StopCoroutine(FireCoroutine);
        }
    }

    IEnumerator FireContinuously()
    {
        while (true)
        { 
            GameObject Laser = Instantiate(PLaser, transform.position, Quaternion.identity) as GameObject;
            Laser.AddComponent<Rigidbody2D>();
            Laser.AddComponent<CapsuleCollider2D>();
            Laser.GetComponent<Rigidbody2D>().velocity = new Vector2(0, ProjectileSpeed);

            yield return new WaitForSeconds(ProjectileFiringPeriod);
        }
    }
    private void Move()
    {
        var deltaX = Input.GetAxis("Horizontal") * Time.deltaTime * MoveSpeed;
        var deltaY = Input.GetAxis("Vertical") * Time.deltaTime * MoveSpeed;

        var NewXPos = Mathf.Clamp(this.transform.position.x + deltaX, MinX, MaxX); 
        var NewYPos = Mathf.Clamp(this.transform.position.y + deltaY, MinY, MaxY); 

        this.transform.position = new Vector2(NewXPos, NewYPos);
    }  
}
