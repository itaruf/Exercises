using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bird : MonoBehaviour
{
    [SerializeField] float _launchForce = 500;
    [SerializeField] float _maxDragDistance = 2;

    private Vector2 _startPosition;
    private Rigidbody2D _rigidBody2D;
    private SpriteRenderer _spriteRender;

    private void Awake() // factorisation de variables
    {
        _rigidBody2D = GetComponent<Rigidbody2D>();
        _spriteRender = GetComponent<SpriteRenderer>();
    }

    // Start is called before the first frame update
    void Start()
    {
        _startPosition = _rigidBody2D.position; 
        _rigidBody2D.isKinematic = true;
    }

    private void OnMouseDown()
    {
        _spriteRender.color = Color.red;
    }
    private void OnMouseUp()
    {
        var currentPosition = _rigidBody2D.position;
        var direction = _startPosition - currentPosition;
        direction.Normalize();

        _rigidBody2D.isKinematic = false; // Faire voler l'oiseau
        _rigidBody2D.AddForce(direction * _launchForce);

        _spriteRender.color = Color.white;
    }

    private void OnMouseDrag()
    {
        // Vector3 : Position 3D ; mousePosition dans le monde
        Vector3 mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        Vector2 desiredPosition = mousePosition; // 2Dimensional vector
       
        float distance = Vector2.Distance(desiredPosition, _startPosition); // distance entre la position de départ et la position désirée
        if (distance > _maxDragDistance)
        {
            Vector2 direction = desiredPosition - _startPosition;
            direction.Normalize();
            desiredPosition = _startPosition + (direction * _maxDragDistance);
        }

        if (desiredPosition.x > _startPosition.x)
        {
            desiredPosition.x = _startPosition.x; // retourne à la position de départ si on drag trop loin
        }

        _rigidBody2D.position = desiredPosition;
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        StartCoroutine(ResetAfterDelay());
    }

    private IEnumerator ResetAfterDelay()
    {
        yield return new WaitForSeconds(3);
        _rigidBody2D.position = _startPosition; // retourner à la position de départ
        _rigidBody2D.isKinematic = true; // static au départ
        _rigidBody2D.velocity = Vector2.zero;
    }
}
