using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WallsBehavior : MonoBehaviour
{
    public Material GreenMaterial;
    // Start is called before the first frame update
    void Start()
    {
        GreenMaterial = Resources.Load<Material>("Materials/Green");
        Debug.Log(gameObject.GetComponent<MeshRenderer>().materials[0].color);
        Debug.Log(GreenMaterial.color);
    }

    // Update is called once per frame
    void Update()
    {
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            Debug.Log(collision.gameObject.name + " detected");
            Color wallNewColor = gameObject.GetComponent<MeshRenderer>().materials[0].color = GreenMaterial.color;
            collision.gameObject.GetComponent<MeshRenderer>().materials[0].color = wallNewColor;

            gameObject.tag = "Hit By The Player";
        }

    }
}
