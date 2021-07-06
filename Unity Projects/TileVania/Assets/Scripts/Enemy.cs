using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    [Header("Enemy Configs")]
    [SerializeField] private float EnemyMoveSpeed = 1f;

    private SpriteRenderer EnemySprite;
    Rigidbody2D EnemyRB2D; 
    private void Update()
    {
        EnemyRB2D = GetComponent<Rigidbody2D>();
        EnemySprite = GetComponent<SpriteRenderer>();
        EnemyRB2D.velocity = new Vector2(EnemyMoveSpeed, 0f);
    }
    private void OnTriggerExit2D(Collider2D other)
    {
        if (other.gameObject.name == "Foreground")
        {
            EnemySprite.flipX = !EnemySprite.flipX;
            EnemyMoveSpeed = -EnemyMoveSpeed;
            EnemyRB2D.velocity = new Vector2(EnemyMoveSpeed, 0f);
        }
    }
}
