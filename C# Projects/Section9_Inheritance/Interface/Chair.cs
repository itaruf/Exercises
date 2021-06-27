using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Interface
{
    class Chair : Furniture, IDestroyable
    {
        //public List<IDestroyable> DestroyablesNearby;
        public string DestructionSound {get; set;}
        public Chair(): this("Undefined", "Undefined", "Undefined") {
        }
        public Chair(string DestructionSound, string Color, string Material) : base(Color, Material) {
            this.DestructionSound = DestructionSound;
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
            Console.WriteLine($"The {Color} chair was destroyed");
            System.Console.WriteLine($"Playing destruction sound: {DestructionSound}");
            System.Console.WriteLine($"Everything is in fire");
        }
    }
}