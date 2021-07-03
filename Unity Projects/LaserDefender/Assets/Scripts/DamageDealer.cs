using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DamageDealer : MonoBehaviour
{
    [SerializeField] public int Damage = 100;
    public int GetDamage()
    {
        return (Damage);
    }
    public void Hit()
    {
        Destroy(gameObject);
    }
}
