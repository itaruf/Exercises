using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyPathing : MonoBehaviour
{
    public WaveConfig WConfig;
    [SerializeField] public List<Transform> Destinations;
    public int DestinationsIndex = 0;
    public Vector3 TargetPosition;
    // Start is called before the first frame update
    void Start()
    {
        Destinations = WConfig.GetWayPoints();
        this.transform.position = new Vector2(this.transform.position.x, this.transform.position.y);
    }

    // Update is called once per frame
    void Update()
    {
        if (DestinationsIndex < Destinations.Count)
        {

            TargetPosition = Destinations[DestinationsIndex].transform.position;
            this.transform.position = Vector3.MoveTowards(this.transform.position, TargetPosition, WConfig.GetMoveSpeed1 * Time.deltaTime);

            if (this.transform.position == TargetPosition)
            {
                new WaitForSeconds(3f);
                DestinationsIndex++;
            }
        
        }

        if (DestinationsIndex == Destinations.Count)
        {
            DestinationsIndex = 0;
        }
    }

    public void SetWaveConfig(WaveConfig WConfig)
    {
        this.WConfig = WConfig;
    }
}
