using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    [SerializeField] public List<WaveConfig> WConfigs;
    [SerializeField] public int StartingWave = 0;
    [SerializeField] bool looping = false;
    public GameManager GM;
    public static int NumberOfEnemies = 0;

    void Start()
    {
        GM = FindObjectOfType<GameManager>();
        new WaitForSecondsRealtime(5f);
        do
        {
            StartCoroutine(SpawnAllWaves());
        } while (looping);
    }

    private IEnumerator SpawnAllWaves()
    {
        for (int WaveIndex = StartingWave; WaveIndex < WConfigs.Count; WaveIndex++)
        {
            var CurrentWave = WConfigs[WaveIndex];
            yield return StartCoroutine(SpawnAllEnemeisInWave(CurrentWave));
        }
    }
    private IEnumerator SpawnAllEnemeisInWave(WaveConfig CurrentWave)
    {
        for (int EnemyCount = 0; EnemyCount < CurrentWave.GetNumberOfEnemies1; EnemyCount++)
        {
            var NewEnemy = Instantiate(CurrentWave.GetEnemyPrefab, CurrentWave.GetWayPoints()[0].transform.position, Quaternion.identity);
            NewEnemy.SetActive(true);
            NumberOfEnemies++;
            Debug.Log("Initial number of enemies: "+NumberOfEnemies);

            yield return new WaitForSeconds(CurrentWave.GetTimeBetweenSpawns1);

            NewEnemy.GetComponent<EnemyPathing>().SetWaveConfig(CurrentWave);
        }
    }

    public void CheckWinCondition()
    {
        if (NumberOfEnemies <= 0)
        {
            GM.LoadNextScene();
        }
    }

    void Update()
    {
        CheckWinCondition();
    }
}
