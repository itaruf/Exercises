using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class HealthDisplay : MonoBehaviour
{
    [SerializeField] public Text PlayerHealth;

    private void Start()
    {
        PlayerHealth.text = 0.ToString();
    }
    void Update()
    {
        PlayerHealth.text = Player.GetPlayerHealth().ToString();
    }
}
