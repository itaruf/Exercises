using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Cookie : MonoBehaviour
{
    [Header("Cookie Stats")]
    [SerializeField] public float health;
    [SerializeField] public float PP;
    public List<Skill> skills = new List<Skill>();

    public int initialHP;
    public bool isPlaying = false;
    public bool isDead = false;
    public int number = 1;

    public CombatManager combatManager;
    public Dialogue dialogue;
    public Text displayHP;
    public GameObject skillUIPanel;
    public List<Button> skillButtons;
    public GameObject chooseEnemyUIPanel;
    public List<Button> enemyButtons;

    public ParticleSystem deathParticle;
    public ParticleSystem hitParticle;
    public SpriteRenderer spriteRenderer;

    public bool canGenerateGlitchedSkill = false;

    void Start()
    {
        GenerateStartingSkill();
    }
    void Update()
    {
        //HideUnusedEnemyButtons();
        HideUnusedButtons();

        if (canGenerateGlitchedSkill)
        {
            GenerateGlitchedSkill();
            canGenerateGlitchedSkill = false;
        }

        displayHP.text = health.ToString() + " HP / " + initialHP.ToString() + " HP";
    }
    public bool HasDied()
    {
        if (health <= 0)
        {
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
        isDead = true;
        deathParticle.Play(true);
        gameObject.SetActive(false);
        dialogue.LinesToDisplay($"Cookie died !");
        yield return new WaitForSeconds(3f);

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
            name = "Roar",
            value = 50,
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

    public void BackToSelectPanel()
    {
        combatManager.OpenPanel(this);
        combatManager.OpenChoosingEnemyPanel(this);
        combatManager.OpenChoosingEnemyPanel(this);
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

    void HideUnusedEnemyButtons()
    {
        if (enemyButtons.Count > combatManager.numberOfEnemies)
        {
            //int difference =  - skills.Count - skillButtons.Count;

            for (int i = enemyButtons.Count - 1; i >= combatManager.numberOfEnemies; i--)
            {
                enemyButtons[i].gameObject.SetActive(false);
            }
        }
        else if (enemyButtons.Count >= combatManager.numberOfEnemies)
        {
            //int difference =  - skills.Count - skillButtons.Count;

            for (int i = 0; i < combatManager.numberOfEnemies; i++)
            {
                enemyButtons[i].gameObject.SetActive(true);
            }
        }
    }

    public void HideSpecificButton(int number)
    {
        enemyButtons[number].gameObject.SetActive(false);
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

    public IEnumerator UseFirstSkill(Enemy enemy)
    {
        if (skills.Count > 0)
        {
            StartCoroutine(combatManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            combatManager.OpenChoosingEnemyPanel(this);

            dialogue.LinesToDisplay($"Cookie used {skills[0].name} ! ");
            combatManager.OpenPanel(this);

            yield return new WaitForSeconds(3f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[0].value} HP !");

            enemy.health -= skills[0].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            isPlaying = false;
        }
    }
    public IEnumerator UseSecondSkill(Enemy enemy)
    {
        if (skills.Count > 1)
        {
            StartCoroutine(combatManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            combatManager.OpenChoosingEnemyPanel(this);

            dialogue.LinesToDisplay($"Cookie used {skills[1].name} ! ");
            combatManager.OpenPanel(this);

            yield return new WaitForSeconds(3f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[1].value} HP !");

            enemy.health -= skills[1].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            isPlaying = false;
        }
    }
    public IEnumerator UseThirdSkill(Enemy enemy)
    {
        if (skills.Count > 2)
        {
            StartCoroutine(combatManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            combatManager.OpenChoosingEnemyPanel(this);

            dialogue.LinesToDisplay($"Cookie used {skills[2].name} ! ");
            combatManager.OpenPanel(this);

            yield return new WaitForSeconds(3f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[2].value} HP !");

            enemy.health -= skills[2].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            isPlaying = false;
        }
    }
    public IEnumerator UseFourthSkill(Enemy enemy)
    {
        if (skills.Count > 3)
        {
            StartCoroutine(combatManager.AttackAnimation(enemy.spriteRenderer));
            enemy.hitParticle.transform.position = enemy.transform.position;
            enemy.hitParticle.Play();

            combatManager.OpenChoosingEnemyPanel(this);

            dialogue.LinesToDisplay($"Cookie used {skills[3].name} ! ");
            combatManager.OpenPanel(this);

            yield return new WaitForSeconds(3f);

            dialogue.LinesToDisplay($"{enemy.name} lost {skills[3].value} HP !");

            enemy.health -= skills[3].value;
            enemy.health = Mathf.Clamp(enemy.health, 0, 500);

            isPlaying = false;
        }
    }
}
