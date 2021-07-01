using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(menuName = "Enemy Wave config")]
public class WaveConfig : ScriptableObject
{
    [SerializeField] public GameObject EnemyPrefab;
    [SerializeField] public GameObject PathPrefab;
    [SerializeField] public float TimeBetweenSpawns = 0.5f;
    [SerializeField] public float SpawnRandomFactor = 0.3f;
    [SerializeField] public int NumberOfEnemies = 5;
    [SerializeField] public float MoveSpeed = 2f;
    public GameObject GetEnemyPrefab { get => EnemyPrefab; }
    public List<Transform> GetWayPoints()
    {
        var WaveDestinations = new List<Transform>();

        foreach(Transform WavePoint in PathPrefab.transform)
        {
            WaveDestinations.Add(WavePoint);
            Debug.Log($"{WavePoint} added.");
        }
       
        return(WaveDestinations);
    }
    public float GetTimeBetweenSpawns1 { get => TimeBetweenSpawns; }
    public float GetSpawnRandomFactor1 { get => SpawnRandomFactor; }
    public int GetNumberOfEnemies1 { get => NumberOfEnemies; }
    public float GetMoveSpeed1 { get => MoveSpeed; }
}
