using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class AdventureGame : MonoBehaviour
{
    // Member attributes
    [SerializeField] public Text TextComponent;
    [SerializeField] public State StartingState;

    State OnGoingState; 
    void Start()
    {
        OnGoingState = StartingState;
        TextComponent.text = OnGoingState.GetStateStory();
    }

    // Update is called once per frame
    void Update()
    {
        ManageStage();
    }

    private void ManageStage()
    {
        var NextStates = OnGoingState.GetNextStates();
        // <=> State[] NextStates = OnGoingState.GetNextStates();

        if (Input.GetKeyDown(KeyCode.Q)) {
            OnGoingState = StartingState;
        }
        for (int i=0; i<NextStates.Length; i++)
        {
            if (Input.GetKeyDown(KeyCode.Alpha1 + i))
            {
                OnGoingState = NextStates[i];
            }
        }

        TextComponent.text = OnGoingState.GetStateStory();
    }
}
