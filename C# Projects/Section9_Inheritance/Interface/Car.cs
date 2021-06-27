using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Interface
{
    public class Car : Vehicule, IDestroyable
    {
        //Member attributes
        public List<IDestroyable> DestroyablesNearby;
        public string DestructionSound {get; set;}
        //Constructors
        public Car (string DestructionSound, float Speed, string Color) : base(Speed, Color) {
            this.DestructionSound = DestructionSound;
            this.DestroyablesNearby = new List<IDestroyable>();
        }
        //Setters & Getters
        string GSDestructionSound {
            get {
                return(this.DestructionSound);
            }
            set {
                this.DestructionSound = value;
            }
        }
        //Member methods
        public void Destroy() {   
            System.Console.WriteLine($"Playing destruction sound: {DestructionSound}");
            System.Console.WriteLine($"Everything is in fire");
            foreach(IDestroyable Item in DestroyablesNearby) {
                Item.Destroy();
            }
        }
    }
}