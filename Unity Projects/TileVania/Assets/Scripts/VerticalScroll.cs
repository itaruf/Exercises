using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VerticalScroll : MonoBehaviour
{
    [SerializeField] float ScrollRate = 0.2f;
     void Start()
    {
        
    }
    void Update()
    {
        transform.Translate(new Vector2(0f, ScrollRate * Time.deltaTime));
    }
}
