using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Score : MonoBehaviour
{
    [SerializeField] Text TextScore;

    void Start()
    {
        TextScore.text = 0.ToString();
    }
    void Update()
    {
        TextScore.text = Enemy.GetPoints().ToString();
    }
}
