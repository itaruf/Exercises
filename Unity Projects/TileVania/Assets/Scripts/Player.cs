using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class Player : MonoBehaviour
{
    //Configs
    [Header("Player Stats")]
    [SerializeField] public float PlayerSpeedMovement = 5f;
    [SerializeField] public float JumpSpeed = 5f;
    [SerializeField] public float ClimbSpeed = 3f;
    [SerializeField] public float PlayerHealth = 100f;

    //State

    //Cached components references
    private Animator PlayerAnimator;
    private CapsuleCollider2D PlayerCollider;
    private BoxCollider2D PlayerFeetCollider;
    private Rigidbody2D PlayerRB2D;

    //Member attributes
    private float DeltaX;
    private float DeltaY;
    private bool PlayerHasHorizontalSpeed;
    private bool PlayerHasVerticalSpeed;
    private float InitialGravity;
    private bool PlayerHasDied = false;

    private void Awake()
    {
        Physics2D.IgnoreLayerCollision(LayerMask.NameToLayer("Player"), LayerMask.NameToLayer("Enemy"), false);
    }
    void Start()
    {
        PlayerRB2D = GetComponent<Rigidbody2D>();
        PlayerAnimator = GetComponent<Animator>();
        PlayerCollider = GetComponent<CapsuleCollider2D>();
        PlayerFeetCollider = GetComponent<BoxCollider2D>();
        InitialGravity = PlayerRB2D.gravityScale;
    }
    void Update()
    {
        if (PlayerHasDied == false)
        {
            ResetConfigs();
            Run();
            Jump();
            ClimbLadder();
            FlipSprite();
        }
        else
        {
            Die();
        }
    }
    private void ResetConfigs()
    {
        PlayerHasHorizontalSpeed = false;
        PlayerHasVerticalSpeed = false;
        DeltaX = Input.GetAxis("Horizontal") * Time.deltaTime * PlayerSpeedMovement;
        DeltaY = Input.GetAxis("Vertical") * Time.deltaTime * JumpSpeed;
    }
    private bool IsGrounded()
    {
        if (PlayerFeetCollider.IsTouchingLayers(LayerMask.GetMask("Ground")))
        {
            return (true);
        }
        else
        {
            return (false);
        } 
    }
    private bool IsNextToALadder()
    {
        if (PlayerFeetCollider.IsTouchingLayers(LayerMask.GetMask("Ladder")))
        {
            return (true);
        }
        else
        {
            return (false);
        }
    }
    private void Run()
    {
        this.transform.position = new Vector2(this.transform.position.x + DeltaX, this.transform.position.y);
        PlayerRB2D.velocity = new Vector2(DeltaX, PlayerRB2D.velocity.y);

        IsRunning();

        if (PlayerHasHorizontalSpeed)
        {
            SettingAnimation("Running", true);
        }
        else
        {
            SettingAnimation("Running", false);
        }
    }
    private void Jump()
    {
        if (!IsGrounded())
        {
            return;
        }
        if (Input.GetButtonDown("Jump"))
        {
            Vector2 JumpVelocityToAdd = new Vector2(this.transform.position.x, JumpSpeed);
            PlayerRB2D.velocity += JumpVelocityToAdd;

            IsJumping();

            if (PlayerHasVerticalSpeed)
            {
                SettingAnimation("Jumping", true);
            }
            else
            {
                SettingAnimation("Jumping", false);
            }
        }
        if (IsGrounded())
        {
            SettingAnimation("Jumping", false);
        }
    }
    private void Die()
    {
        FindObjectOfType<GameSession>().ProcessPlayerDeath();

        SettingAnimation("Dying", true);

        PlayerRB2D.velocity = new Vector2(0f, 0f);
        Physics2D.IgnoreLayerCollision(LayerMask.NameToLayer("Player"), LayerMask.NameToLayer("Enemy"), true);
    }
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (PlayerCollider.IsTouchingLayers(LayerMask.GetMask("Enemy", "Hazards")))
        {
            Debug.Log("Player has died");
            PlayerHasDied = true;
        }
    }
    private void ClimbLadder()
    {
        if (!IsNextToALadder())
        {
            SettingAnimation("Climbing", false);
            PlayerRB2D.gravityScale = InitialGravity;
            return;
        }

        this.transform.position = new Vector2(this.transform.position.x, this.transform.position.y + DeltaY);
        PlayerRB2D.velocity = new Vector2(PlayerRB2D.velocity.x, DeltaY);

        IsClimbing();

        if (PlayerHasVerticalSpeed)
        {
            PlayerRB2D.gravityScale = 0f;
            SettingAnimation("Climbing", true);
        }
    }
    private void FlipSprite()
    {
        if (PlayerHasHorizontalSpeed)
        {
            transform.localScale = new Vector2(Mathf.Sign(PlayerRB2D.velocity.x), 1f);
        }
    }
    private void IsRunning()
    {
        PlayerHasHorizontalSpeed = Mathf.Abs(PlayerRB2D.velocity.x) > Mathf.Epsilon;
    }
    private void IsJumping()
    {
        PlayerHasVerticalSpeed = Mathf.Abs(PlayerRB2D.velocity.y) > Mathf.Epsilon;
    }
    private void IsClimbing()
    {
        PlayerHasVerticalSpeed = Mathf.Abs(PlayerRB2D.velocity.y) > Mathf.Epsilon;
    }
    private void SettingAnimation(in string AnimationName, bool State)
    {
        PlayerAnimator.SetBool($"{AnimationName}", State);
    }
}
