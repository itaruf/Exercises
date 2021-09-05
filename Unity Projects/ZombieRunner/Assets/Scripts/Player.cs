using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
    public int numberOfHearts = 3;
    private GameObject heart;
    private GameObject totalHearts;
    private GameObject instantiatedHeart;
    private Vector3 previousHeartPosition;
    private RectTransform heartScale;
    private List <GameObject> instantiatedHearts;
    // Start is called before the first frame update
    void Start()
    {
        heart = GameObject.FindGameObjectWithTag("Heart");
        totalHearts = GameObject.FindGameObjectWithTag("Hearts");
        heartScale = heart.GetComponent<RectTransform>();
        instantiatedHearts = new List<GameObject>();

        StartingHeartPosition();
        CurrentLifePoints();
        //InvokeRepeating("DestroyHeart", 5, 5);
        StartCoroutine(DestroyHeart());
    }

    // Update is called once per frame
    void Update()
    {
        
    }
    IEnumerator DestroyHeart()
    {
        yield return new WaitForSeconds(3f);

        if (instantiatedHearts.Count > 0)
        {
            Debug.Log($"List: " + instantiatedHearts.Count);
            GameObject.Destroy(instantiatedHearts[instantiatedHearts.Count - 1]);
            instantiatedHearts.RemoveAt(instantiatedHearts.Count - 1);
            StartCoroutine(DestroyHeart());
        }
    }

    /*void DestroyHeart()
    {
        if (instantiatedHearts.Count > 0)
        {
            Debug.Log($"List: " + instantiatedHearts.Count);
            GameObject.Destroy(instantiatedHearts[instantiatedHearts.Count - 1]);
            instantiatedHearts.RemoveAt(instantiatedHearts.Count - 1);
        }
    }*/
    void StartingHeartPosition()
    {
        previousHeartPosition = heart.transform.position;
    }
    void CurrentLifePoints()
    {
        instantiatedHearts.Add(heart);
        for (int i=1; i<numberOfHearts; i++)
        {
            instantiatedHeart = GameObject.Instantiate(heart, heartScale);
            instantiatedHearts.Add(instantiatedHeart);
            instantiatedHeart.transform.position = new Vector3(previousHeartPosition.x + 100, heart.transform.position.y, heart.transform.position.z);
            //instantiatedHeart.GetComponent<RectTransform>().localScale = heartScale.localScale;

            previousHeartPosition = instantiatedHeart.transform.position;

            instantiatedHeart.transform.SetParent(totalHearts.transform);
        }
        Debug.Log($"Starting Count: "+instantiatedHearts.Count);
    }
}
