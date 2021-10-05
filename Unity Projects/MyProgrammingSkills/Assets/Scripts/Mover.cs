using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Mover : MonoBehaviour
{
    [Header("Player Stats")]
    [SerializeField] public float PlayerSpeedMovement = 5f;

    public Rigidbody2D rigidbody;

    private float DeltaX;
    private float DeltaY;

    void Start()
    {
        rigidbody = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        DeltaX = Input.GetAxis("Horizontal") * Time.deltaTime * PlayerSpeedMovement;
        DeltaY = Input.GetAxis("Vertical") * Time.deltaTime * PlayerSpeedMovement;

        Run();
    }

    private void Run()
    {
         this.transform.position = new Vector2(this.transform.position.x + DeltaX, this.transform.position.y);
        rigidbody.velocity = new Vector2(DeltaX, rigidbody.velocity.y);

        this.transform.position = new Vector2(this.transform.position.x, this.transform.position.y + DeltaY);
        rigidbody.velocity = new Vector2(rigidbody.velocity.x, DeltaY);
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.name == "Trigger")
        {
            GetComponent<Mover>().enabled = false;
            LoadDemoScene();
        }
        if (collision.gameObject.name == "End")
        {
            SceneManager.LoadScene("Menu");
        }
    }
    void LoadDemoScene()
    {
        SceneManager.LoadScene("Demo");
        //DontDestroyOnLoad(transform.gameObject);
    }
}
