using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    [SerializeField] public List<WaveConfig> WConfigs;
    [SerializeField] public int StartingWave = 0;
    [SerializeField] bool looping = false;
    void Start()
    {
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
            //NewEnemy.AddComponent<EnemyPathing>();
            //NewEnemy.AddComponent<CircleCollider2D>();
            yield return new WaitForSeconds(CurrentWave.GetTimeBetweenSpawns1);
            NewEnemy.GetComponent<EnemyPathing>().SetWaveConfig(CurrentWave);
        }
    }

    void Update()
    {
        
    }
}
