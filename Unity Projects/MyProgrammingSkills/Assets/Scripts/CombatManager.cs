using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class CombatManager : MonoBehaviour
{
    public List<GameObject> spawnPoints;

    public Player player;
    public Cookie cookie;
    public GameObject enemy;
    public List<GameObject> enemies;
    public GameObject next;

    public ParticleSystem deathParticle;
    private GameObject instantiatedEnemy;
    public ParticleSystem instantiatedParticle;

    private RectTransform enemyScale;
    public Dialogue dialogue;
    public Enemy target;
    public bool isFighting = true;
    public int numberOfEnemies;
    public bool drawNextRotation = true;
    public bool isFirstEnemyDead = false;
    public bool isSecondEnemyDead = false;
    void Start()
    {
        GenerateEnemies();
        GenerateGlitchedSkill();
        StartCoroutine(StartFight());
    }

    void Update()
    {
        EnemiesHealth();

        if (numberOfEnemies <= 0)
        {
            StartCoroutine(EndCombatScene("001010101110Vic101010tory110001! "));
        }
    }

    void EnemiesHealth()
    {
        /*Debug.Log("Remaining enemies: " + enemies.Count);*/
        foreach (GameObject enemy in enemies)
        {
            /*Debug.Log("Enemy HP: " + enemy.GetComponent<Enemy>().health);*/
            if (enemy.GetComponent<Enemy>().HasDied())
            {
                player.HideSpecificButton(enemy.GetComponent<Enemy>().numero);
                cookie.HideSpecificButton(enemy.GetComponent<Enemy>().numero);

                enemy.GetComponent<Enemy>().deathParticle.Play(true);
                enemy.GetComponent<Enemy>().Destroy();

                enemies.Remove(enemy);
                numberOfEnemies--;
                break;
            }
        }
    }

    public IEnumerator EndCombatScene(string line)
    {
        dialogue.LinesToDisplay(line);
        yield return new WaitForSeconds(5f);
        SceneManager.LoadScene("Level1");
    }

    IEnumerator StartFight()
    {
        int firstToAct = DetermineFirstToAct();

        /*CAS 1*/
        if (firstToAct == 1 && !player.HasDied()) // Player commence
        {
            yield return StartCoroutine(PlayerTurn());

            if (!player.isPlaying) // Cookie continue
            {
                if (!cookie.HasDied()) // Cookie continue
                {
                    yield return StartCoroutine(CookieTurn());
                }

                if (!cookie.isPlaying) // Enemies continuent
                {
                    yield return StartCoroutine(EnemiesTurn());

                }
            }
        }

        //CAS 2
        else if (firstToAct == 2) // Cookie commence
        {
            if (!cookie.HasDied()) {
                yield return StartCoroutine(CookieTurn());
            }

            if (!player.HasDied() && !cookie.isPlaying) // Player continue
            {
                yield return StartCoroutine(PlayerTurn());

                if (!player.isPlaying) // Enemies continuent
                {
                    yield return StartCoroutine(EnemiesTurn());
                }
            }
        }

        //CAS 3
        else // Enemies commencent
        {
            yield return StartCoroutine(EnemiesTurn());

            if (!cookie.HasDied()) // Cookie continue
            {
                yield return StartCoroutine(CookieTurn());
            }

            if (!player.HasDied() && !cookie.isPlaying)  // Player continue
            {
                yield return StartCoroutine(PlayerTurn());

            }
        }

        //Si aucun perdant, on repart pour un tour aléatoire
        if (numberOfEnemies != 0 && !player.HasDied())
        {
            StartCoroutine(StartFight());
        }
        yield break;
    }

    public IEnumerator PlayerTurn()
    {
        dialogue.LinesToDisplay("It's Player's turn !");
        player.isPlaying = true;
        OpenChoosingEnemyPanel(player);

        yield return new WaitWhile(() => player.isPlaying);

        if (numberOfEnemies == 0)
        {
            isFighting = false;
            StopAllCoroutines();
            yield break;
        }

        Debug.Log("Player's turn ended !");
        dialogue.LinesToDisplay("Player's turn ended !");

        yield return new WaitForSeconds(3f);
    }

    public IEnumerator CookieTurn()
    {
        dialogue.LinesToDisplay("It's Cookie's turn !");
        cookie.isPlaying = true;
        OpenChoosingEnemyPanel(cookie);

        yield return new WaitWhile(() => cookie.isPlaying);

        if (numberOfEnemies == 0)
        {
            isFighting = false; 
            StopAllCoroutines();
            yield break;
        }

        Debug.Log("Cookie's turn ended !");
        dialogue.LinesToDisplay("Cookie's turn ended !");

        yield return new WaitForSeconds(3f);
    }

    public IEnumerator EnemiesTurn()
    {
        dialogue.LinesToDisplay("It's Enemies' turn !");

        yield return new WaitForSeconds(3f);

        for (int i = 0; i < numberOfEnemies; i++)
        {
            enemies[i].GetComponent<Enemy>().GenerateStartingSkill();
            enemies[i].GetComponent<Enemy>().DisplaySkills();
            enemies[i].GetComponent<Enemy>().EnemyAI(player, cookie);

            if (player.HasDied())
            {
                StopAllCoroutines();
            }
            yield return new WaitForSeconds(5f);
        }
    }
    public void GetFirstSkill(Player player)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        if (!(player.skillButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            player.skillButtons[0].onClick.AddListener(delegate { StartCoroutine(player.UseFirstSkill(target)); });
        }
        else
        {
            StartCoroutine(player.UseFirstSkill(target));
        }
    }

    public void GetFirstEnemy(Player player)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        target = enemies[0].GetComponent<Enemy>();
        if (!(player.enemyButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            player.enemyButtons[0].onClick.AddListener(delegate { OpenPanel(player); });
        }
        else
        {
            OpenPanel(player);
        }
    }

    public void GetSecondEnemy(Player player)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        if (numberOfEnemies <= 1)
        {
            target = enemies[0].GetComponent<Enemy>();
        }
        else
        {
            target = enemies[1].GetComponent<Enemy>();
        }
        if (!(player.enemyButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            player.enemyButtons[0].onClick.AddListener(delegate { OpenPanel(player); });
        }
        else
        {
            OpenPanel(player);
        }
    }

    public void GetFirstEnemy(Cookie cookie)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }

        target = enemies[0].GetComponent<Enemy>();
        if (!(cookie.enemyButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            cookie.enemyButtons[0].onClick.AddListener(delegate { OpenPanel(cookie); });
        }
        else
        {
            OpenPanel(cookie);
        }
    }

    public void GetSecondEnemy(Cookie cookie)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }

        if (numberOfEnemies <= 1)
        {
            target = enemies[0].GetComponent<Enemy>();
        }
        else
        {
            target = enemies[1].GetComponent<Enemy>();
        }

        if (!(cookie.enemyButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            cookie.enemyButtons[0].onClick.AddListener(delegate { OpenPanel(cookie); });
        }
        else
        {
            OpenPanel(cookie);
        }
    }

    public void GetSecondSkill(Player player)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        if (!(player.skillButtons[1].onClick.GetPersistentEventCount() > 0))
        {
            player.skillButtons[1].onClick.AddListener(delegate { StartCoroutine(player.UseSecondSkill(target)); });
        }
        else
        {
            StartCoroutine(player.UseSecondSkill(target));
        }
    }
    
    public void GetThirdSkill(Player player)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        if (!(player.skillButtons[2].onClick.GetPersistentEventCount() > 0))
        {
            player.skillButtons[2].onClick.AddListener(delegate { StartCoroutine(player.UseThirdSkill(target)); });
        }
        else
        {
            StartCoroutine(player.UseThirdSkill(target));
        }
    }

    public void GetFourthSkill(Player player)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        target = enemies[0].GetComponent<Enemy>();
        if (!(player.skillButtons[3].onClick.GetPersistentEventCount() > 0))
        {
            player.skillButtons[3].onClick.AddListener(delegate { StartCoroutine(player.UseFourthSkill(target)); });
        }
        else
        {
            StartCoroutine(player.UseFourthSkill(target));
        }
    }

    public void GetFirstSkill(Cookie cookie)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        if (!(cookie.skillButtons[0].onClick.GetPersistentEventCount() > 0))
        {
            cookie.skillButtons[0].onClick.AddListener(delegate { StartCoroutine(cookie.UseFirstSkill(target)); });
        }
        else
        {
            StartCoroutine(cookie.UseFirstSkill(target));
        }
    }

    public void GetSecondSkill(Cookie cookie)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        if (!(cookie.skillButtons[1].onClick.GetPersistentEventCount() > 0))
        {
            cookie.skillButtons[1].onClick.AddListener(delegate { StartCoroutine(cookie.UseSecondSkill(target)); });
        }
        else
        {
            StartCoroutine(cookie.UseSecondSkill(target));
        }
    }
    
    public void GetThirdSkill(Cookie cookie)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }
        if (!(cookie.skillButtons[2].onClick.GetPersistentEventCount() > 0))
        {
            cookie.skillButtons[2].onClick.AddListener(delegate { StartCoroutine(cookie.UseThirdSkill(target)); });
        }
        else
        {
            StartCoroutine(cookie.UseThirdSkill(target));
        }
    }

    public void GetFourthSkill(Cookie cookie)
    {
        if (numberOfEnemies <= 0)
        {
            return;
        }

        if (!(cookie.skillButtons[3].onClick.GetPersistentEventCount() > 0))
        {
            cookie.skillButtons[3].onClick.AddListener(delegate { StartCoroutine(cookie.UseFourthSkill(target)); });
        }
        else
        {
            StartCoroutine(cookie.UseFourthSkill(target));
        }
    }

    public void OpenChoosingEnemyPanel(Player player)
    {
        if (player.chooseEnemyUIPanel != null)
        {
            bool isActive = player.chooseEnemyUIPanel.activeSelf; 
            player.chooseEnemyUIPanel.SetActive(!isActive);
        }
    }

    public void OpenChoosingEnemyPanel(Cookie cookie)
    {
        if (cookie.chooseEnemyUIPanel != null)
        {
            bool isActive = cookie.chooseEnemyUIPanel.activeSelf;
            cookie.chooseEnemyUIPanel.SetActive(!isActive);
        }
    }
    public void OpenPanel(Player player)
    {
        OpenChoosingEnemyPanel(player);

        if (player.skillUIPanel != null)
        {
            bool isActive = player.skillUIPanel.activeSelf;
            player.skillUIPanel.SetActive(!isActive);
        }
    }

    public void OpenPanel(Cookie cookie)
    {
        OpenChoosingEnemyPanel(cookie);

        if (cookie.skillUIPanel != null)
        {
            bool isActive = cookie.skillUIPanel.activeSelf;
            cookie.skillUIPanel.SetActive(!isActive);
        }
    }

    public int GenerateRandomNumber(int min, int max)
    {
        return (Random.Range(min, max));
    }

    public int DetermineFirstToAct()
    {
        return (Random.Range(1, numberOfEnemies+4));
    }
    public void GenerateGlitchedSkill()
    {
        //Debug.Log($"Glitched skill available !");

        int random = GenerateRandomNumber(1, 10);
        if (random < 3) return;
        else if (random >= 3 && random <= 5)
        {
            player.canGenerateGlitchedSkill = true;
        }
        else if (random > 3 && random <= 6)
        {
            cookie.canGenerateGlitchedSkill = true;
        }
        else
        {
            player.canGenerateGlitchedSkill = true;
            cookie.canGenerateGlitchedSkill = true;
        }
    }
    public void GenerateEnemies()
    {
        enemyScale = enemy.GetComponent<RectTransform>();
        numberOfEnemies = Random.Range(1, 3);

        for (int i = 0; i < numberOfEnemies; i++)
        {
            instantiatedEnemy = GameObject.Instantiate(enemy, enemyScale);
            instantiatedEnemy.transform.position = new Vector3(spawnPoints[i].transform.position.x, spawnPoints[i].transform.position.y, spawnPoints[i].transform.position.z);
            instantiatedEnemy.SetActive(true);
            enemies.Add(instantiatedEnemy);

            instantiatedEnemy.GetComponent<Enemy>().deathParticle.transform.position = instantiatedEnemy.transform.position;
            instantiatedEnemy.GetComponent<Enemy>().numero = i;
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