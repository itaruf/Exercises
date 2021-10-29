using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class OldPerson : MonoBehaviour
{

    public enum ItemToDrop { Pacemaker, Oxygen, Meds};

    public ItemToDrop itemDropped;
    public Image imageSideOne;
    public Image imageSideTwo;
    public GameObject canva;
    public List<Sprite> images;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void SetImage(int position)
    {
        canva.SetActive(true);
        imageSideOne.sprite = images[position];
        imageSideTwo.sprite = images[position];
    }

    public void UnsetImage()
    {
        canva.SetActive(false);
        imageSideOne.sprite = null;
        imageSideTwo.sprite = null;
    }
}
