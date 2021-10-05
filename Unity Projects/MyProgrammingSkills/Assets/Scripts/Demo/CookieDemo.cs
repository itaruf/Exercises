using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class CookieDemo : MonoBehaviour
{
    [Header("Cookie Stats")]
    [SerializeField] public float health;
    [SerializeField] public float PP;
    public List<Skill> skills = new List<Skill>();

    public int initialHP;
    public bool isPlaying = false;
    public bool isDead = false;
    public int number = 1;

    public DemoManager demoManager;
    public Dialogue dialogue;
    public Text displayHP;
    public GameObject skillUIPanel;
    public List<Button> skillButtons;
    public ParticleSystem particleSystem;

    public SpriteRenderer cookieSprite;
    public Sprite cookieColossal;
    public Sprite cookieNormal;

    public ParticleSystem deathParticle;
    public ParticleSystem hitParticle;
    public SpriteRenderer spriteRenderer;
    public bool HasDied()
    {
        if (health <= 0)
        {
            isDead = true;
            return (true);
        }
        return (false);
    }

    void Start()
    {
        GenerateStartingSkill();
    }
    void Update()
    {
        HideUnusedButtons();
        displayHP.text = health.ToString() + " HP / " + initialHP.ToString() + " HP";
    }

    public void PlaySpawnAnimation()
    {
        particleSystem.Play();
    }
    public void GenerateStartingSkill()
    {
        Skill skill1 = new Skill()
        {
            name = "Tackle",
            value = 80,
            PP = 10
        };

        skills.Add(skill1);

        Skill skill2 = new Skill()
        {
            name = "Roar",
            value = 80,
            PP = 10
        };

        skills.Add(skill2);

        NameButtons();
    }

    public void GenerateGlitchedSkill()
    {
        Skill skill = new Skill()
        {
            name = "01001110 01000001",
            value = Random.Range(0, 100),
            PP = 10
        };

        skills.Add(skill);

        NameButtons();
    }

    public void DisplaySkills()
    {
        foreach (Skill skill in skills)
        {
            Debug.Log($"Cookie : {skill.name}");
        }
    }

    public void DisplayStats()
    {
        Debug.Log($"Cookie : {health}, {PP}");
    }

    void HideUnusedButtons()
    {
        if (skillButtons.Count > skills.Count)
        {
            //int difference =  - skills.Count - skillButtons.Count;

            for (int i = skillButtons.Count - 1; i >= skills.Count; i--)
            {
                skillButtons[i].gameObject.SetActive(false);
            }
        }
        else if (skillButtons.Count >= skills.Count)
        {
            //int difference =  - skills.Count - skillButtons.Count;

            for (int i = 0; i < skillButtons.Count; i++)
            {
                skillButtons[i].gameObject.SetActive(true);
            }
        }
    }
    void NameButtons()
    {
        for (int i = 0; i < skills.Count; i++)
        {
            int random = Random.Range(0, 2);
            switch (random)
            {
                case 0:
                    skillButtons[i].GetComponentInChildren<Text>().text = skills[i].name + " / " + skills[i].value;
                    break;
                case 1:
                    skillButtons[i].GetComponentInChildren<Text>().text = skills[i].name;
                    break;
            }
        }
    }

    public IEnumerator UseFirstSkill(EnemyDemo enemy)
    {
        if (skills.Count > 0)
        {
            demoManager.playerIcon.SetActive(false);
            StartCoroutine(demoManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            dialogue.LinesToDisplay($"Cookie used {skills[0].name} ! ");
            demoManager.OpenPanel(this);

            yield return new WaitForSeconds(2f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[0].value} HP !");

            enemy.health -= skills[0].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            yield return new WaitForSeconds(4f);

            demoManager.playerIcon.SetActive(true);
            dialogue.LinesToDisplayNormal("It wasn't this one..! But that will do it anyway ! GG !");

            isPlaying = false;
        }
    }
    public IEnumerator UseSecondSkill(EnemyDemo enemy)
    {
        if (skills.Count > 1)
        {
            demoManager.playerIcon.SetActive(false);
            StartCoroutine(demoManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            dialogue.LinesToDisplay($"Cookie used {skills[1].name} ! ");
            demoManager.OpenPanel(this);

            yield return new WaitForSeconds(2f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[1].value} HP !");

            enemy.health -= skills[1].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            yield return new WaitForSeconds(4f);

            demoManager.playerIcon.SetActive(true);
            dialogue.LinesToDisplayNormal("It wasn't this one..! But that will do it anyway ! GG !");

            isPlaying = false;
        }
    }
    public IEnumerator UseThirdSkill(EnemyDemo enemy)
    {
        if (skills.Count > 2)
        {
            StartCoroutine(demoManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            dialogue.LinesToDisplay($"Cookie used {skills[2].name} ! ");
            demoManager.OpenPanel(this);

            yield return new WaitForSeconds(2f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[2].value} HP !");

            enemy.health -= skills[2].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            isPlaying = false;
        }
    }
    public IEnumerator UseFourthSkill(EnemyDemo enemy)
    {
        if (skills.Count > 3)
        {
            StartCoroutine(demoManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            dialogue.LinesToDisplay($"Cookie used {skills[3].name} ! ");
            demoManager.OpenPanel(this);

            yield return new WaitForSeconds(2f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[3].value} HP !");

            enemy.health -= skills[3].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            isPlaying = false;
        }
    }
}
