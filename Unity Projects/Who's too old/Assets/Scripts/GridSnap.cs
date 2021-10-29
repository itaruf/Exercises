using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GridSnap : MonoBehaviour
{
    public Vector3 gridSize = Vector3.one;

    private void OnDrawGizmos()
    {
        var position = new Vector3
        (
            Mathf.Round(transform.position.x / gridSize.x) * gridSize.x,
            Mathf.Round(transform.position.y / gridSize.y) * gridSize.y,
            Mathf.Round(transform.position.z / gridSize.z) * gridSize.z
        );

        transform.position = position;
    }
}
