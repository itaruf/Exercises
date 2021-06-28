using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[SelectionBase]
public class Monster : MonoBehaviour
{
    [SerializeField] Sprite _deadSprite;
    [SerializeField] ParticleSystem _particleSystem;
    private bool _hasDied;

    private void OnCollisionEnter2D(Collision2D collision)
    {

        if (ShouldDieFromCollision(collision))
        {
            StartCoroutine(Die());
        }
    }

    private IEnumerator Die()
    {
        _hasDied = true;
        GetComponent<SpriteRenderer>().sprite = _deadSprite;
        _particleSystem.Play(); // les particules s'activent à la mort
        yield return new WaitForSeconds(1);
        gameObject.SetActive(false); // Faire disparaître le monstre
    }

    private bool ShouldDieFromCollision(Collision2D collision)
    {
        if (_hasDied)
        {
            return (false); 
        }
        Bird bird = collision.gameObject.GetComponent<Bird>(); 
        if (bird != null) // si l'oiseau atteint sa cible alors
        {
            return (true); // l'objet meurt

        }

        if (collision.contacts[0].normal.y < -0.5) // objet qui tombe d'en haut
        { 
            return (true);
        }

        return (false); // sinon l'objet ne meurt pas
    }
}
