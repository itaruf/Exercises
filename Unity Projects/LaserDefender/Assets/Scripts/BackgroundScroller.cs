using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BackgroundScroller : MonoBehaviour
{
    [SerializeField] float BackgroundScrollField = 0.5f;
    Material MyMaterial;
    Vector2 OffSet;
    void Start()
    {
        MyMaterial = GetComponent<Renderer>().material;
        OffSet = new Vector2(0, BackgroundScrollField);
    }
    void Update()
    {
        MyMaterial.mainTextureOffset += OffSet * Time.deltaTime;
    }
}
