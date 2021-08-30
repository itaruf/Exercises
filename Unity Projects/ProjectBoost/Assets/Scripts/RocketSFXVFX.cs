using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class RocketSFXVFX: MonoBehaviour
{
    // Start is called before the first frame update
    private AudioSource rocketLaunchSound;
    private AudioSource rocketDeathSound;
    private List<AudioSource> rocketSounds;
    private Mover mover;
    private CollisionHandler collisionHandler;
    private GameObject rocket;
    private bool hasLaunched;
    private bool hasLost;
    public ParticleSystem rocketDeathParticle;
    public ParticleSystem rocketLaunchParticle;

    void Start()
    {
        hasLaunched = false;
        hasLost = false;
        rocketSounds = new List<AudioSource>(gameObject.GetComponents<AudioSource>());
        rocketLaunchSound = rocketSounds[0];
        rocketDeathSound = rocketSounds[1];

        mover = gameObject.GetComponent<Mover>();
        rocket = GameObject.FindGameObjectWithTag("Player");
        collisionHandler = rocket.GetComponent<CollisionHandler>();
    }

    // Update is called once per frame
    void Update()
    {
        Debug.Log($"hasLaunched: "+mover.GetHasLaunched());
        Debug.Log($"hasLost: " + collisionHandler.hasLost);

        PlayLaunchEffects();
        PlayDeathEffects();
    }
    void PlayLaunchEffects()
    {
        if (mover.GetHasLaunched() && !hasLaunched)
        {
            rocketLaunchSound.Play();
            rocketLaunchParticle.Play();
            hasLaunched = true;
        }
    }
    void PlayDeathEffects()
    {
        if (collisionHandler.hasLost && !hasLost)
        {
            rocketDeathSound.PlayOneShot(rocketDeathSound.clip, 0.1f);
            rocketDeathParticle.Play();
            rocketLaunchParticle.Stop();
        }
    }
}
