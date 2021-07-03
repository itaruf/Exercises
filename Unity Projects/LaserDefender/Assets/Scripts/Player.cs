using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    [Header("Player")]
    [SerializeField] public float MoveSpeed = 10f;
    [SerializeField] public float PlayerPadding = 0.05f;
    [SerializeField] public static float Health = 1000;

    [Header("Projectile")]
    [SerializeField] public GameObject PLaser;
    [SerializeField] public float ProjectileSpeed = 10f;
    [SerializeField] public float ProjectileFiringPeriod = 0.5f;
    [SerializeField] public GameObject ExplosionParticles;
    [SerializeField] private float DurationOfExplosion = 0.5f;
    [SerializeField] AudioClip DeathSound;
    [SerializeField] AudioClip ShootSound;
    [SerializeField] float DeathSoundVolume = 0.05f;
    [SerializeField] float ShootSoundVolume = 0.05f;

    public GameManager GM;
    private Vector3 PlayerPosition;

    Camera GameCamera;

    float MinX, MaxX, MinY, MaxY;

    Coroutine FireCoroutine;
    void Start()
    {
        GM = FindObjectOfType<GameManager>();
        new WaitForSecondsRealtime(5f);
        SetUpMoveBoundaries();
    }
    public void OnCollisionEnter2D(Collision2D collision)
    {
        Debug.Log("Collision detected between 2 spaceships: " + this.gameObject + " and: " + collision.gameObject);
        Health = 0;
        Destroy(collision.gameObject);
        Die();
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        //Destroy(PLayser);
        DamageDealer DDealer = collision.gameObject.GetComponent<DamageDealer>();
        if (!DDealer) return;
        ProcessHit(DDealer);
    }
    private void SetUpMoveBoundaries()
    {
        GameCamera = Camera.main;
        MinX = GameCamera.ViewportToWorldPoint(new Vector3(0, 0, 0)).x + PlayerPadding;
        MaxX = GameCamera.ViewportToWorldPoint(new Vector3(1, 0, 0)).x - PlayerPadding;

        MinY = GameCamera.ViewportToWorldPoint(new Vector3(0, 0, 0)).y + PlayerPadding;
        MaxY = GameCamera.ViewportToWorldPoint(new Vector3(0, 1, 0)).y - PlayerPadding;
    }
    private void Fire()
    {
        if (Input.GetKeyDown(KeyCode.Mouse0))
        {
            AudioSource.PlayClipAtPoint(ShootSound, Camera.main.transform.position, ShootSoundVolume);
            FireContinuously();
        }
    }
    private void FireContinuously()
    {
        Vector3 LaserSpawnPosition = new Vector3(this.transform.position.x, this.transform.position.y + 1, this.transform.position.z);
        GameObject Laser = Instantiate(PLaser, LaserSpawnPosition, Quaternion.identity);

        Laser.AddComponent<Rigidbody2D>();
        Laser.AddComponent<CapsuleCollider2D>();

        Laser.GetComponent<Rigidbody2D>().velocity = new Vector2(0, ProjectileSpeed);
        if (!Laser) return;
    }
    private void Move()
    {
        var deltaX = Input.GetAxis("Horizontal") * Time.deltaTime * MoveSpeed;
        var deltaY = Input.GetAxis("Vertical") * Time.deltaTime * MoveSpeed;

        var NewXPos = Mathf.Clamp(this.transform.position.x + deltaX, MinX, MaxX); 
        var NewYPos = Mathf.Clamp(this.transform.position.y + deltaY, MinY, MaxY); 

        this.transform.position = new Vector2(NewXPos, NewYPos);
    }
    private void Die()
    {
        if (Health <= 0)
        {
            AudioSource.PlayClipAtPoint(DeathSound, Camera.main.transform.position, DeathSoundVolume);

            GameObject ExplosionParticlesClone = Instantiate(ExplosionParticles, transform.position, Quaternion.identity);
            Destroy(ExplosionParticlesClone, DurationOfExplosion);

            Destroy(gameObject);
            GM.LoadNextScene();
        }
    }
    private void ProcessHit(DamageDealer DDealer){

        Health -= DDealer.GetDamage();
        DDealer.Hit();
 
    }

    public static float GetPlayerHealth()
    {
        return (Health);
    }
    void Update()
    {
        // Movement needs to happen in update
        Move();
        Fire();
        Die();
    }
}
