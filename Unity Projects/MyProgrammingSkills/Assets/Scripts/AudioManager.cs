using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{

    public RoomManager roomManager;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (roomManager.stopMusic)
        {
            gameObject.GetComponent<AudioSource>().Stop();
            roomManager.stopMusic = false;
        }
    }
}
