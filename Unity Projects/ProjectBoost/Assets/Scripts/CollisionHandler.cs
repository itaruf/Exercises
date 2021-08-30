using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CollisionHandler : MonoBehaviour
{
    // Start is called before the first frame update
    public LevelManager levelManager;
    public GameObject levelManagerGO;
    public bool hasLost;
    void Start() { 

        hasLost = false;
        levelManagerGO = GameObject.FindGameObjectWithTag("Level Manager");
        levelManager = levelManagerGO.GetComponent<LevelManager>();
    }

    // Update is called once per frame
    void Update()
    {
    }
    private void OnCollisionEnter(Collision collision)
    {
        switch(collision.gameObject.tag)
        {
            case "Friendly":
                Debug.Log($"Friendly Object hit");
                break;
            default:
                Debug.Log($"Unfriendly Object hit");
                hasLost = !hasLost;
                // Fully reset everything (resetting variables aswell)
                //SceneManager.LoadScene(levelManager.CurrentLevelIndex);
                StartCoroutine(levelManager.OpenNextLevel());
                break;
        }
    }
}
