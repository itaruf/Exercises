using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Level : MonoBehaviour
{
    [SerializeField] public int BreakableBlocks;

    Block Block;
    GameManager GM;
    // Cached reference
    public void CountBreakableBlocks()
    {
        BreakableBlocks++;
    }

    private void Start()
    {
        GM = FindObjectOfType<GameManager>();
    }

    private void Update()
    {
        BlockDestroyed();
    }
    public void BlockDestroyed()
    {
        if (Block.DestroyedBlock == BreakableBlocks)
        {
            Block.DestroyedBlock = 0;
            GM.LoadNextScene();
        }
    }
}
