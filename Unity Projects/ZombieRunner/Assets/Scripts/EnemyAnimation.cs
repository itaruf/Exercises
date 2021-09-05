using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyAnimation : MonoBehaviour
{
    private Animator animator;
    private EnemyAI enemyAI;
    // Start is called before the first frame update
    void Start()
    {
        animator = GetComponent<Animator>();
        enemyAI = GetComponent<EnemyAI>();
    }

    // Update is called once per frame
    void Update()
    {
        if (enemyAI.IsFollowingTarget)
        {
            PlayRunningAnimation();
        }
        else
        {
            PlaySittingAnimation();
        }
    }

    void PlayRunningAnimation()
    {
        //Debug.Log("Playing Running Animation");
        SettingAnimation("isWalking", true);
    }

    void PlaySittingAnimation()
    {
        //Debug.Log("Playing Sitting Animation");
        SettingAnimation("isWalking", false);

    }
    void SettingAnimation(in string animationName, bool state)
    {
        animator.SetBool($"{animationName}", state);
    }
}
