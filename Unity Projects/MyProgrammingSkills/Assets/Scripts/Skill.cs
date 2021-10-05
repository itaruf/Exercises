using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Skill
{
    public string name;
    public float value;
    public float PP;

    public Skill() : this("", 0, 0)
    {
    }
    public Skill(string name, float value, float PP)
    {
        this.name = name;
        this.value = value;
        this.PP = PP;
    }
    void Start()
    {
        
    }

    void Update()
    {
        
    }
}
