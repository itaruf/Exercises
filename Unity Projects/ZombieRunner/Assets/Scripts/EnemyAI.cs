using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AI;

public class EnemyAI : MonoBehaviour
{
    // Start is called before the first frame update
    [SerializeField] Transform target;
    NavMeshAgent navMeshAgent;
    private bool isFollowingTarget;
    private float range = 5f;
    [SerializeField] public bool isHungry = true;
    [SerializeField] public float damageDealt = 1f;
    private int health = 1;
    private bool wasHit = false;
    private Player player;
    private float turnSpeed = 5f;

    public bool IsFollowingTarget { get => isFollowingTarget; set => isFollowingTarget = value; }
    public float Range { get => range; set => range = value; }
    public bool WasHit { get => wasHit; set => wasHit = value; }

    void Start()
    {
        navMeshAgent = gameObject.GetComponent<NavMeshAgent>();
        player = GameObject.FindGameObjectWithTag("Player").GetComponent<Player>();
    }

    // Update is called once per frame
    void Update()
    {
        FaceTarget();
        if (Vector3.Distance(GetPlayerPosition(), gameObject.transform.position) > range)
            MoveToPlayer();
        else 
            StopMovement();
        CheckIfWasHit();
    }

    private void CheckIfWasHit()
    {
        if (WasHit)
        {
            Destroy(gameObject);
        }
    }

    void MoveToPlayer()
    {
        navMeshAgent.SetDestination(GetPlayerPosition());
        navMeshAgent.isStopped = false;
        isFollowingTarget = true;
    }
    void FaceTarget()
    {
        Vector3 direction = (player.transform.position - transform.position).normalized;
        Quaternion lookRotation = Quaternion.LookRotation(new Vector3(direction.x, 0, direction.z));
        transform.rotation = Quaternion.Slerp(transform.rotation, lookRotation, Time.deltaTime * turnSpeed);
    }
    void StopMovement()
    {
        isFollowingTarget = false;
        navMeshAgent.isStopped = true;
    }
    Vector3 GetPlayerPosition()
    {
        return (target.position);
    }
}