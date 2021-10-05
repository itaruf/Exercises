using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyDemo : MonoBehaviour
{
    [Header("EnemyDemo Stats")]
    [SerializeField] public float health = 100;
    [SerializeField] public float PP = 20;
    public List<Skill> skills = new List<Skill>();
    public int numero;

    public PlayerDemo player;
    public CookieDemo cookie;
    public Dialogue dialogue;
    public ParticleSystem particleSystem;

    public ParticleSystem deathParticle;
    public ParticleSystem hitParticle;
    public SpriteRenderer spriteRenderer;
    public DemoManager demoManager;

    public bool isDead = false;
    public bool isPlaying = false;
    void Start()
    {
        GenerateStartingSkill();
        //DisplaySkills();
    }

    public void DisplaySkills()
    {
        foreach (Skill skill in skills)
        {
            Debug.Log($"{skill.name}");
        }
    }

    public void GenerateStartingSkill()
    {
        Skill skill1 = new Skill()
        {
            name = "Tackle",
            value = 20,
            PP = 10
        };

        skills.Add(skill1);

        Skill skill2 = new Skill()
        {
            name = "Bash",
            value = 30,
            PP = 10
        };

        skills.Add(skill2);
    }

    public bool HasDied()
    {
        if (health <= 0)
        {
            StartCoroutine(PlayDeathAnim());
           
            return (true);
        }
        return (false);
    }

    public void Destroy()
    {
        Destroy(gameObject);
    }
    public IEnumerator PlayDeathAnim()
    {
        particleSystem.Play();
        yield return new WaitForSeconds(4f); 
        isDead = true;
        dialogue.LinesToDisplay($"{gameObject.name} died !");
        yield return new WaitForSeconds(4f);
    }

    public void EnemyAI(PlayerDemo player, CookieDemo cookie, int number)
    {
        int randomSkillIndex = GenerateRandomNumber(0, skills.Count); // 0 ou 1 (2-1)

        if (number == 0)
        {
            StartCoroutine(Attack(skills[0], player));
        }
        else if (number == 1)
        {
            StartCoroutine(Attack(skills[1], cookie));
        }
    }

    public IEnumerator Attack(Skill skill, PlayerDemo player)
    {
        GenerateStartingSkill();

        StartCoroutine(demoManager.AttackAnimation(player.spriteRenderer));
        player.hitParticle.transform.position = player.transform.position;
        player.hitParticle.Play();

        dialogue.LinesToDisplay($"{gameObject.name} used {skill.name} !");
        player.health -= skill.value;
        player.health = Mathf.Clamp(player.health, 0, 500);

        yield return new WaitForSeconds(4f);

        dialogue.LinesToDisplay($"You lost {skill.value} HP !");

        yield return new WaitForSeconds(4f);
        isPlaying = false;
    }
    public IEnumerator Attack(Skill skill, CookieDemo cookie)
    {
        GenerateStartingSkill();

        StartCoroutine(demoManager.AttackAnimation(cookie.spriteRenderer));
        cookie.hitParticle.transform.position = cookie.transform.position;
        cookie.hitParticle.Play();

        dialogue.LinesToDisplay($"{gameObject.name} used {skill.name} !");
        cookie.health -= skill.value;
        cookie.health = Mathf.Clamp(cookie.health, 0, 500);

        yield return new WaitForSeconds(4f);

        dialogue.LinesToDisplay($"Cookie lost {skill.value} HP !");

        yield return new WaitForSeconds(4f);
        isPlaying = false;
    }

    void Update()
    {
        
    }
    public int GenerateRandomNumber(int min, int max)
    {
        return Random.Range(min, max);
    }
}
