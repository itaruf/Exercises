using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorManager : MonoBehaviour
{
    public int _doorTimerOpened = 20;
    public int _doorTimerClosed = 180;

    private Animator _doorAnimator = null;
    // Start is called before the first frame update
    void Start()
    {
        _doorAnimator = GetComponent<Animator>();
        StartCoroutine("WaitForDoorOpening");
    }

    IEnumerator WaitForDoorOpening()
    {
        yield return new WaitForSeconds(_doorTimerClosed);
        #region Door opened
        _doorAnimator.SetBool("Open", true);
        _doorAnimator.SetBool("Close", false);
        #endregion
        yield return new WaitForSeconds(_doorTimerOpened);
        #region Door Closed
        _doorAnimator.SetBool("Close", true);
        _doorAnimator.SetBool("Open", false);
        #endregion

        StartCoroutine("WaitForDoorOpening");
    }
}
