using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Rewired;
using UnityEngine.SceneManagement;

public class PlayerController : MonoBehaviour
{

    private enum InputQTE { QTEA, QTEB, QTEC, QTED };


    public float forwardSpeed = 2f;
    [SerializeField] private int playerID = 0;
    [SerializeField] private Player  playerEntity;


    private bool canTurn = false;
    private bool isInQTE = false;
    private Rigidbody _rigidbody;
    private PlayerStats stats;
    private InputQTE goodInput;
    private bool isQTESuccess = false;
    private OldPerson oldMan;
    private GameObject turnZone;
    private bool hasEnd;
    // Start is called before the first frame update
    void Start()
    {
        _rigidbody = GetComponent<Rigidbody>();
        playerEntity = ReInput.players.GetPlayer(playerID);
        stats = GetComponent<PlayerStats>();
    }

    // Update is called once per frame
    void FixedUpdate()
    {
        if (isInQTE)
        {
            if(playerEntity.GetButtonDown("QTEA") && goodInput == InputQTE.QTEA)
            {
                isQTESuccess = true;
            }
            else if (playerEntity.GetButtonDown("QTEB")  && goodInput == InputQTE.QTEB)
            {
                isQTESuccess = true;
            }
            else if (playerEntity.GetButtonDown("QTEC")  && goodInput == InputQTE.QTEC)
            {
                isQTESuccess = true;
            }
            else if (playerEntity.GetButtonDown("QTED") && goodInput == InputQTE.QTED)
            {
                isQTESuccess = true;
            }


            if (isQTESuccess)
            {
                isInQTE = false;
                switch (oldMan.itemDropped) 
                {
                    case OldPerson.ItemToDrop.Meds:
                        if(!stats.hasCachet)
                            stats.hasCachet = true;
                        break;
                    case OldPerson.ItemToDrop.Oxygen:
                        if (!stats.hasOxygen)
                        {
                            stats.oxygen.oxygenCapacity = 99f;
                            stats.hasOxygen = true;
                        }                           
                        
                        break;
                    case OldPerson.ItemToDrop.Pacemaker:
                        if (!stats.hasPacemaker)
                            stats.hasPacemaker = true;
                        break;
                }
                oldMan = null;
            }
        }
        if (canTurn)
        {
            float rotation = playerEntity.GetAxis("Turn");
            if (playerEntity.GetButtonDown("LeftTurn"))
                rotation = -1;
            if (playerEntity.GetButtonDown("RightTurn"))
                rotation = 1;

            if(-1==rotation  || rotation==1 )
            {
                //gameObject.transform.Rotate(new Vector3(0,90,0)*rotation);
                StartCoroutine(AnimRotation(transform.eulerAngles, new Vector3(0, 90 * rotation, 0)));
                Debug.Log(turnZone);
                canTurn = false;
            }
        }

        _rigidbody.velocity = gameObject.transform.forward * forwardSpeed;
    }

    private IEnumerator AnimRotation(Vector3 rotInit, Vector3 rotOffSet)
    {
        float time = 0f;
        Vector3 rotFinal = rotInit + rotOffSet;
        while (time < 1) {
            gameObject.transform.eulerAngles = Vector3.Slerp(rotInit, rotFinal, time);
            time += Time.deltaTime * forwardSpeed;
            yield return null;
        }
        gameObject.transform.eulerAngles = rotFinal;
        //gameObject.transform.position = turnZone.transform.position;
        turnZone = null;
    }
    private void OnTriggerEnter(Collider other)
    {
        if (other.tag.Equals("TurnZone"))
        {
            canTurn = true;
            turnZone = other.gameObject;
            if (turnZone.transform.childCount > 0)
            {
                turnZone.transform.GetChild(0).gameObject.SetActive(true);
                Debug.Log("easyzarzar");
            }
        }
        if (other.tag.Equals("OldPeople"))
        {
            isInQTE = true;
            oldMan = other.gameObject.GetComponent<OldPerson>();
            StartQTE();
        }
        if (other.tag.Equals("Ending"))
        {
            SceneManager.LoadScene("Menu");
        }
    }

    private void OnTriggerExit(Collider other)
    {
        if (other.tag.Equals("TurnZone"))
        {
            canTurn = false;
            turnZone = null;
        }
        if (other.tag.Equals("OldPeople"))
        {
            isInQTE = false;
            oldMan.UnsetImage();
            oldMan = null;
            
        }
    }

    private void StartQTE()
    {
        int random = Random.Range(0, 4);
        goodInput = (InputQTE) random;
        Debug.Log(goodInput);
        oldMan.SetImage(random);
    }
}
