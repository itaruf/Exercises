using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    [SerializeField] public float Health = 100;
    [SerializeField] public float ShotCounter;
    [SerializeField] public float MinTimeBetweenShots = 0.2f;
    [SerializeField] public float MaxTimeBetweenShots = 3f;
    [SerializeField] public GameObject PLaser;
    [SerializeField] private float ProjectileSpeed = 10f;
    [SerializeField] public GameObject ExplosionParticles;
    [SerializeField] private float DurationOfExplosion = 0.5f;
    [SerializeField] AudioClip DeathSound;
    [SerializeField] AudioClip ShootSound;
    [SerializeField] float DeathSoundVolume = 0.05f;
    [SerializeField] float ShootSoundVolume = 0.05f;
    [SerializeField] int PointsGivenOnDeath = 100;

    public EnemySpawner ESpawner;
    public static int TotalPoints = 0;

    void Start()
    {
        ShotCounter = Random.Range(MinTimeBetweenShots, MaxTimeBetweenShots);
    }

    private void Update()
    {
        CountDownAndShoot();
    }

    private void CountDownAndShoot()
    {
        ShotCounter -= Time.deltaTime;
        if (ShotCounter <= 0f)
        {
            Fire();
            ShotCounter = Random.Range(MinTimeBetweenShots, MaxTimeBetweenShots);
        }
    }

    private void Fire()
    {
        GameObject Laser = Instantiate(PLaser, transform.position, Quaternion.identity);

        AudioSource.PlayClipAtPoint(ShootSound, Camera.main.transform.position, ShootSoundVolume);

        Laser.AddComponent<Rigidbody2D>();
        Laser.AddComponent<CapsuleCollider2D>();
        //Laser.AddComponent<DamageDealer>();
        Laser.GetComponent<Rigidbody2D>().velocity = new Vector2(0, -ProjectileSpeed);

        //
        if (!Laser) return;

        new WaitForSeconds(3f);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        DamageDealer DDealer = collision.gameObject.GetComponent<DamageDealer>();
        if (!DDealer) return;
        ProcessHit(DDealer);
    }
    public static int GetPoints()
    {
        return (TotalPoints);
    }
    private void ProcessHit(DamageDealer DDealer)
    {
        Health -= DDealer.GetDamage();
        DDealer.Hit();

        if (Health <= 0)
        {
            TotalPoints += PointsGivenOnDeath;

            Destroy(gameObject);
            EnemySpawner.NumberOfEnemies -= 1;
            Debug.Log($"Remaining enemies: {EnemySpawner.NumberOfEnemies}");

            AudioSource.PlayClipAtPoint(DeathSound, Camera.main.transform.position, DeathSoundVolume);

            GameObject ExplosionParticlesClone = Instantiate(ExplosionParticles, transform.position, Quaternion.identity);
            Destroy(ExplosionParticlesClone, DurationOfExplosion);

        }
    }
}
