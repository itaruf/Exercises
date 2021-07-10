using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "State")] // 
public class State : ScriptableObject
{
    // Member attributes
    [TextArea(10,10)] [SerializeField] string StoryText;
    [SerializeField] State[] NextStates;
    // Member methods
    public string GetStateStory()
    {
        return (StoryText);
    }

    public State[] GetNextStates()
    {
        return (NextStates);
    }
}
