using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Dialogue : MonoBehaviour
{
    // Start is called before the first frame update
    private float textSpeed = 0.0000001f;

    public Text text;
    public string line;
    void Start()
    {
    }

    public void LinesToDisplay(string line) 
    {
        text.text = string.Empty;
        text.fontStyle = FontStyle.Normal;
        this.line = line.ToUpper();
        StartDialogue();
    }

    public void LinesToDisplayNormal(string line)
    {
        text.text = string.Empty;
        text.fontStyle = FontStyle.Normal;
        this.line = line;
        StartCoroutine(Scenario());
    }
    // Update is called once per frame
    void Update()
    {

    }
    void StartDialogue()
    {
       /* foreach (char c in line.ToString())
        {
            text.text += c;
        }*/
         StartCoroutine(TypeLine());
    }
    IEnumerator TypeLine()
    {
        foreach (char c in line.ToString())
        {
            text.text += c;
            yield return new WaitForSeconds(textSpeed);
        }
        yield return new WaitForSeconds(2f);
        yield return new WaitWhile(() => !Input.anyKey);
    }
    IEnumerator Scenario()
    {
        foreach (char c in line.ToString())
        {
            text.text += c;
            yield return new WaitForSeconds(textSpeed);
        }
    }
}

