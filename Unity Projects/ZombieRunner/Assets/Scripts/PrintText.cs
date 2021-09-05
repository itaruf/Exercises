using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
public class PrintText : MonoBehaviour
{
    // Start is called before the first frame update
    private Text numberOfHearts;
    private Player player;
    void Start()
    {
        player = GameObject.FindGameObjectWithTag("Player").GetComponent<Player>();
        numberOfHearts = gameObject.GetComponent<Text>();
    }

    // Update is called once per frame
    void Update()
    {
        if (player)
        {
            numberOfHearts.text = (player.numberOfHearts).ToString();
            //Debug.Log(numberOfHearts.text);
        }
        else
        {
            Debug.Log("Not Found");
        }
    }
}
