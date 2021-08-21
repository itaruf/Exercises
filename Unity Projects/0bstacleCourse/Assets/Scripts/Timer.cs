using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Timer : MonoBehaviour
{
    public float Chrono;

    public Timer() : this(0f)
    {
    }
    public Timer(float chrono)
    {
        this.Chrono = chrono;
    }
    public float GetChrono()
    {
        return (Chrono);
    }

    // Start is called before the first frame update
    void Start()
    {
 
    }

    // Update is called once per frame
    void Update()
    {
        gameObject.GetComponent<TextMesh>().text = Mathf.Round(Time.time).ToString();
    }
}
