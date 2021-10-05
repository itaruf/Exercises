using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : MonoBehaviour
{
    [Header("Enemy Stats")]
    [SerializeField] public float health = 100;
    [SerializeField] public float PP = 20;
    public List<Skill> skills = new List<Skill>();
    public int numero;

    public Player player;
    public Cookie cookie;
    public Dialogue dialogue;
    public ParticleSystem particleSystem;
    public CombatManager combatManager;

    public ParticleSystem deathParticle;
    public ParticleSystem hitParticle;
    public SpriteRenderer spriteRenderer;

    public bool isDead = false;
    public bool isPlaying = false;
    void Start()
    {
        GenerateStartingSkill();
        //DisplaySkills();
    }

    void Update()
    {
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
            value = 50,
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
        //particleSystem.Play();
        isDead = true;
        dialogue.LinesToDisplay($"The enemy died !");
        yield return new WaitForSeconds(2f);
    }

    public void EnemyAI(Player player, Cookie cookie)
    {
        int randomSkillIndex = GenerateRandomNumber(0, skills.Count); // 0 ou 1 (2-1)
        bool validTarget = true;
        do
        {
            int targetNumber = GenerateRandomNumber(0, 2); // 0 ou 1
            switch (targetNumber)
            {
                case 0:
                    if (player.HasDied())
                    {
                        validTarget = false;
                    }
                    else
                    {
                        validTarget = true;
                        StartCoroutine(Attack(skills[randomSkillIndex], player));
                    }
                    break;
                case 1:
                    if (cookie.HasDied())
                    {
                        validTarget = false;
                    }
                    else
                    {
                        validTarget = true;
                        StartCoroutine(Attack(skills[randomSkillIndex], cookie));
                    }
                    break;
                default:
                    break;
            }
        } while (!validTarget);
    }

    public IEnumerator Attack(Skill skill, Player player)
    {
        StartCoroutine(combatManager.AttackAnimation(player.spriteRenderer));
        player.hitParticle.transform.position = player.transform.position;
        player.hitParticle.Play();

        dialogue.LinesToDisplay($"{gameObject.name} used {skill.name} !");

        player.health -= skill.value;
        player.health = Mathf.Clamp(player.health, 0, 500);

        yield return new WaitForSeconds(2f);

        dialogue.LinesToDisplay($"You lost {skill.value} HP !");

        yield return new WaitForSeconds(2f);

        if (player.HasDied())
        {
            yield return StartCoroutine(player.PlayDeathAnim());
            yield return StartCoroutine(combatManager.EndCombatScene("001010101110De01010feat110001..! "));
        }

        isPlaying = false;
    }
    public IEnumerator Attack(Skill skill, Cookie cookie)
    {
        StartCoroutine(combatManager.AttackAnimation(cookie.spriteRenderer));
        cookie.hitParticle.transform.position = cookie.transform.position;
        cookie.hitParticle.Play();

        dialogue.LinesToDisplay($"{gameObject.name} used {skill.name} !");
        cookie.health -= skill.value;
        cookie.health = Mathf.Clamp(cookie.health, 0, 500);

        yield return new WaitForSeconds(2f);

        dialogue.LinesToDisplay($"Cookie lost {skill.value} HP !");

        yield return new WaitForSeconds(2f);

        if (cookie.HasDied())
        {
            yield return StartCoroutine(cookie.PlayDeathAnim());
        }

        isPlaying = false;
    }

    public int GenerateRandomNumber(int min, int max)
    {
        return Random.Range(min, max);
    }
}
