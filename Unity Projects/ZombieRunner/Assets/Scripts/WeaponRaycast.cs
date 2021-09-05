using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WeaponRaycast : MonoBehaviour
{
    private RaycastHit hit;
    public Camera FPCamera;
    public GameObject player;
    public GameObject muzzleFlash;
    private ParticleSystem pMuzzleFlash;
    [SerializeField] float maxDistance;
    // Start is called before the first frame update
    void Start()
    {
        pMuzzleFlash = muzzleFlash.GetComponent<ParticleSystem>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Mouse0))
        {
            Debug.Log("Shooting");
            Shoot();
        }
    }
    private void Shoot()
    {
        if (Physics.Raycast(player.transform.position, FPCamera.transform.forward, out hit, Mathf.Infinity))
        {
            if (hit.collider.CompareTag("Enemy"))
            {
                //pMuzzleFlash.transform.position = hit.collider.bounds.center; // display the VFX on the center of the hit object
                pMuzzleFlash.transform.position = hit.point; // display the VFX on the hit area of the object
                pMuzzleFlash.Play();
                hit.collider.GetComponent<EnemyAI>().WasHit = true;
                Debug.Log("Hit !");
                Debug.DrawRay(player.transform.position, FPCamera.transform.forward, Color.yellow);
            }
        }
    }
}
