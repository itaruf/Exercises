using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class DemoManager : MonoBehaviour
{
    public List<GameObject> spawnPoints;

    public PlayerDemo playerDemo;
    public CookieDemo cookieDemo;
    public GameObject enemy;
    public List<GameObject> enemies;
    private GameObject instantiatedEnemy;
    private RectTransform enemyScale;
    public Dialogue dialogue;
    public GameObject cookieIcon;
    public GameObject cookieHappyIcon;
    public GameObject cookieAngryIcon;
    public GameObject playerIcon;
    public GameObject next;
    private Image bg;

    public ParticleSystem deathParticle;
    public ParticleSystem instantiatedParticle;

    public float speedLecture = 4f;
    public bool isFighting = true;
    public int numberOfEnemies;
    public bool drawNextRotation = true;

    void Start()
    {
        GenerateEnemies();
        //GenerateGlitchedSkill();
        StartCoroutine(DemoFight());
    }

    void Update()
    {
        EnemiesHealth();
    }

    IEnumerator FadeIn()
    {
        float targetAlpha = 0f;
        Color curColor = bg.color;
        while (Mathf.Abs(curColor.a - targetAlpha) > 0.0001f)
        {
            Debug.Log(bg.material.color.a);
            curColor.a = Mathf.Lerp(curColor.a, targetAlpha, 0.5f * Time.deltaTime);
            bg.color = curColor;
            yield return null;
        }
    }
    public void ActivateDeactiveObject(GameObject go)
    {
        if (go != null)
        {
            bool isActive = go.activeSelf;
            go.SetActive(!isActive);
        }
    }
    IEnumerator WaitInput()
    {
        yield return new WaitForSeconds(speedLecture);
        ActivateDeactiveObject(next);
        yield return new WaitWhile(() => !Input.anyKey);
        ActivateDeactiveObject(next);
        yield return new WaitForSeconds(1f);
    }
    IEnumerator DemoFight()
    {
        // Player questions the scene
        yield return new WaitForSeconds(2f);
        playerIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"The fight has started...?\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Hold on, what's happening ?!\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"That's... the turn-based battle system I was on !\"");
        yield return StartCoroutine(WaitInput());


        dialogue.LinesToDisplayNormal("\"But.. These are the monsters I've programmed, why would they trigger a fight ?\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"No way, is this because I'm the \"MC\" now ..? How do I run away from this ..?\""); 
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Of all the bugged codes here, the battle system had to work...\"");
        yield return StartCoroutine(WaitInput());

        // An ennemy starts to attack
        playerIcon.SetActive(false);
        dialogue.LinesToDisplay("It's Enemies' turn !");
        yield return StartCoroutine(WaitInput());
        enemies[0].GetComponent<EnemyDemo>().EnemyAI(playerDemo, cookieDemo, 0);
        yield return new WaitForSeconds(6f);

        // Player panicks
        playerIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"You gotta be kidding me...\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"How I'm supposed to defend myself ?! Where are my spells ?!\"");
        yield return StartCoroutine(WaitInput());

        cookieDemo.PlaySpawnAnimation();
        cookieDemo.GetComponent<SpriteRenderer>().enabled = true;
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Cookie ?! What the 01100110 01110101 01100011 01101011 you doing here ?\"");
        yield return StartCoroutine(WaitInput());
        playerIcon.SetActive(false);

        // Cookie talks
        cookieHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"...Meow <3\"");
        yield return StartCoroutine(WaitInput());

        // Le joueur reparle
        cookieHappyIcon.SetActive(false);
        playerIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"No... Run Cookie ! If you're by my side... Then you are a \"Player\" too !\"");
        yield return StartCoroutine(WaitInput());

        playerIcon.SetActive(false);
        cookieHappyIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"...Meow ?\"");
        yield return StartCoroutine(WaitInput());

        // An enemy starts to attack
        cookieHappyIcon.SetActive(false);
        dialogue.LinesToDisplay("It's Enemies' turn !");
        yield return StartCoroutine(WaitInput());
        enemies[1].GetComponent<EnemyDemo>().EnemyAI(playerDemo, cookieDemo, 1);
        yield return new WaitForSeconds(6f);

        // Cookie s'énerve
        cookieAngryIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"...MEOW !!!\"");
        yield return StartCoroutine(WaitInput());

        // Cookie évolue
        cookieAngryIcon.SetActive(false);
        dialogue.LinesToDisplay("What ? Cookie is evolving !");
        yield return new WaitForSeconds(2f);
        cookieDemo.PlaySpawnAnimation();
        cookieDemo.cookieSprite.sprite = cookieDemo.cookieColossal;
        yield return new WaitForSeconds(0.3f);
        cookieDemo.cookieSprite.sprite = cookieDemo.cookieNormal;
        yield return new WaitForSeconds(0.3f);
        cookieDemo.cookieSprite.sprite = cookieDemo.cookieColossal;
        yield return new WaitForSeconds(0.3f);
        cookieDemo.cookieSprite.sprite = cookieDemo.cookieNormal;
        yield return new WaitForSeconds(0.3f);
        cookieDemo.cookieSprite.sprite = cookieDemo.cookieColossal;
        yield return new WaitForSeconds(0.3f);

        //
        playerIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"This is getting ridiculous...\"");
        yield return StartCoroutine(WaitInput());

        // Cookie s'énerve
        playerIcon.SetActive(false);
        cookieAngryIcon.SetActive(true);
        dialogue.LinesToDisplay("*STARES MENACINGLY AT THE ENEMIES*");
        yield return StartCoroutine(WaitInput());

        cookieAngryIcon.SetActive(false);

        dialogue.LinesToDisplay("It's Cookie's turn !");
        yield return StartCoroutine(WaitInput());

        playerIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"Wait Cookie, don't rush in ! Listen to my commands !\"");
        yield return StartCoroutine(WaitInput());

        dialogue.LinesToDisplayNormal("\"Attack the enemy in front of you !\"");
        yield return StartCoroutine(WaitInput());

        cookieDemo.isPlaying = true;
        OpenPanel(cookieDemo);
        yield return new WaitWhile(() => cookieDemo.isPlaying);

        yield return StartCoroutine(WaitInput());

        playerIcon.SetActive(false);
        cookieIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"...Meow <3\"");
        yield return StartCoroutine(WaitInput());

        // C'est le tour du joueur
        cookieIcon.SetActive(false);
        playerIcon.SetActive(false);
        dialogue.LinesToDisplay("It's your turn !");
        yield return StartCoroutine(WaitInput());

        playerIcon.SetActive(true);
        dialogue.LinesToDisplayNormal("\"It's my time to shine ! Hope I'm a mage though...\"");
        yield return StartCoroutine(WaitInput());

        playerDemo.isPlaying = true;
        OpenPanel(playerDemo);

        dialogue.LinesToDisplayNormal("\"What's this bugged mess ? Gotta go with it anyway...\"");
        yield return new WaitWhile(() => playerDemo.isPlaying);

        yield return StartCoroutine(WaitInput());

        playerIcon.SetActive(false);

        yield return new WaitWhile(() => playerDemo.isPlaying);

        if (numberOfEnemies <= 0)
        {
            playerIcon.SetActive(true);
            dialogue.LinesToDisplayNormal("\"Oof, that spell sure hurted...but I shouldn't rely everytime on this.\"");
            yield return StartCoroutine(WaitInput());

            dialogue.LinesToDisplayNormal("\"There should be a check point nearby, let's look for it !\"");
            yield return StartCoroutine(WaitInput());
            playerIcon.SetActive(false);
            StartCoroutine(EndCombatScene());
        }
    }
    public void OpenPanel(PlayerDemo playerDemo)
    {
        if (playerDemo.skillUIPanel != null)
        {
            bool isActive = playerDemo.skillUIPanel.activeSelf;
            playerDemo.skillUIPanel.SetActive(!isActive);
        }
    }

    public void OpenPanel(CookieDemo cookieDemo)
    {
        if (cookieDemo.skillUIPanel != null)
        {
            bool isActive = cookieDemo.skillUIPanel.activeSelf;
            cookieDemo.skillUIPanel.SetActive(!isActive);
        }
    }
    IEnumerator EndCombatScene()
    {
        dialogue.LinesToDisplay("001010101110Vic101010tory110001!");
        yield return new WaitForSeconds(2f);
        SceneManager.LoadScene("Level1");
        //DontDestroyOnLoad(playerDemo.transform.gameObject);
    }

    void EnemiesHealth()
    {
        /*Debug.Log("\"Remaining enemies: " + enemies.Count);*/
        foreach (GameObject enemy in enemies)
        {
            /*Debug.Log("\"EnemyDemo HP: " + enemy.GetComponent<EnemyDemo>().health);*/
            if (enemy.GetComponent<EnemyDemo>().HasDied())
            {
                enemy.GetComponent<Enemy>().deathParticle.Play(true);
                enemy.GetComponent<EnemyDemo>().Destroy();
                enemies.Remove(enemy);
                numberOfEnemies--;
                break;
            }
        }
    }

    public void GenerateGlitchedSkill()
    {
        //Debug.Log($"Glitched skill available !\"");
         /*playerDemo.GenerateGlitchedSkill();
         cookieDemo.GenerateGlitchedSkill();*/
    }
    public void GenerateEnemies()
    {
        enemyScale = enemy.GetComponent<RectTransform>();
        numberOfEnemies = 2;

        for (int i = 0; i < numberOfEnemies; i++)
        {
            instantiatedEnemy = GameObject.Instantiate(enemy, enemyScale);
            instantiatedEnemy.transform.position = new Vector3(spawnPoints[i].transform.position.x, spawnPoints[i].transform.position.y, spawnPoints[i].transform.position.z);
            instantiatedEnemy.SetActive(true);

            instantiatedEnemy.GetComponent<Enemy>().deathParticle.transform.position = instantiatedEnemy.transform.position;

            instantiatedEnemy.GetComponent<EnemyDemo>().numero = i;
            enemies.Add(instantiatedEnemy);
        }
    }

    public void GetFirstSkill(PlayerDemo playerDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(playerDemo.skillButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            playerDemo.skillButtons[0].onClick.AddListener(delegate { StartCoroutine(playerDemo.UseFirstSkill(target)); });
        }
        else
        {
            StartCoroutine(playerDemo.UseFirstSkill(target));
        }
    }

    public void GetSecondSkill(PlayerDemo playerDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(playerDemo.skillButtons[1].onClick.GetPersistentEventCount() > 0))
        {
            playerDemo.skillButtons[1].onClick.AddListener(delegate { StartCoroutine(playerDemo.UseSecondSkill(target)); });
        }
        else
        {
            StartCoroutine(playerDemo.UseSecondSkill(target));
        }
    }
    public void GetThirdSkill(PlayerDemo playerDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(playerDemo.skillButtons[2].onClick.GetPersistentEventCount() > 0))
        {
            playerDemo.skillButtons[2].onClick.AddListener(delegate { StartCoroutine(playerDemo.UseThirdSkill(target)); });
        }
        else
        {
            StartCoroutine(playerDemo.UseThirdSkill(target));
        }
    }

    public void GetFourthSkill(PlayerDemo playerDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(playerDemo.skillButtons[3].onClick.GetPersistentEventCount() > 0))
        {
            playerDemo.skillButtons[3].onClick.AddListener(delegate { StartCoroutine(playerDemo.UseFourthSkill(target)); });
        }
        else
        {
            StartCoroutine(playerDemo.UseFourthSkill(target));
        }
    }

    public void GetFirstSkill(CookieDemo cookieDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(cookieDemo.skillButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            cookieDemo.skillButtons[0].onClick.AddListener(delegate { StartCoroutine(cookieDemo.UseFirstSkill(target)); });
        }
        else
        {
            StartCoroutine(cookieDemo.UseFirstSkill(target));
        }
    }

    public void GetSecondSkill(CookieDemo cookieDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(cookieDemo.skillButtons[1].onClick.GetPersistentEventCount() > 0))
        {
            cookieDemo.skillButtons[1].onClick.AddListener(delegate { StartCoroutine(cookieDemo.UseSecondSkill(target)); });
        }
        else
        {
            StartCoroutine(cookieDemo.UseSecondSkill(target));
        }
    }
    public void GetThirdSkill(CookieDemo cookieDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(cookieDemo.skillButtons[2].onClick.GetPersistentEventCount() > 0))
        {
            cookieDemo.skillButtons[2].onClick.AddListener(delegate { StartCoroutine(cookieDemo.UseThirdSkill(target)); });
        }
        else
        {
            StartCoroutine(cookieDemo.UseThirdSkill(target));
        }
    }

    public void GetFourthSkill(CookieDemo cookieDemo)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        EnemyDemo target = enemies[0].GetComponent<EnemyDemo>();
        if (!(cookieDemo.skillButtons[3].onClick.GetPersistentEventCount() > 0))
        {
            cookieDemo.skillButtons[3].onClick.AddListener(delegate { StartCoroutine(cookieDemo.UseFourthSkill(target)); });
        }
        else
        {
            StartCoroutine(cookieDemo.UseFourthSkill(target));
        }
    }

    public IEnumerator AttackAnimation(SpriteRenderer spriteRenderer)
    {
        yield return new WaitForSeconds(0.1f);
        spriteRenderer.enabled = true;
        yield return new WaitForSeconds(0.1f);
        spriteRenderer.enabled = false;
        yield return new WaitForSeconds(0.1f);
        spriteRenderer.enabled = true;
        yield return new WaitForSeconds(0.1f);
        spriteRenderer.enabled = false;
        yield return new WaitForSeconds(0.1f);
        spriteRenderer.enabled = true;
    }
}
