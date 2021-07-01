using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    [SerializeField] float Health = 100;

    public float Health1 { get => Health; set => Health = value; }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        DamageDealer DDealer = collision.GetComponent<DamageDealer>();
        Health -= DDealer.GetDamage();
    }
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
