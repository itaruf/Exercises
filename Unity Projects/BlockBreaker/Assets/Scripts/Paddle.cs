using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Paddle : MonoBehaviour
{
    [SerializeField] float ScreenWidthInUnit = 12.0f;
    [SerializeField] float MinX = -6.56f, MaxX = 6.56f;
    // Start is called before the first frame update
    void Start()
    {
       /* Vector3 PaddlePos = new Vector3(this.transform.position.x, this.transform.position.y, this.transform.position.z); 
        this.transform.position = PaddlePos;*/
    }

    // Update is called once per frame
    void Update()
    {
        float MousePosInUnit = Input.mousePosition.x / Screen.width * ScreenWidthInUnit - 8; // Position de la souris sur l'écran
        //Debug.Log(MousePosInUnit);

        Vector3 PaddlePos = new Vector3(MousePosInUnit, this.transform.position.y, this.transform.position.z); // On crée une instance Vector2 en l'initialisant avec position du tramplin sur l'écran 
        PaddlePos.x = Mathf.Clamp(MousePosInUnit, MinX, MaxX);
        this.transform.position = PaddlePos; // On assigne cette position au tramplin
    }
}
