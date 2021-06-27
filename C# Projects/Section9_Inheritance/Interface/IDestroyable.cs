using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Interface
{
    public interface IDestroyable {
        //public string DestructionSound {get; set;}
       /*  string GSDestructionSound {
            get {
                return(this.DestructionSound);
            }
            set {
                this.DestructionSound = value;
            }
        } */
        public void Destroy();
        /* public string getDestructionSound() {
            return this.DestructionSound;
        }

        public void setDestructionSound(string DestructionSound) {
            this.DestructionSound = DestructionSound;
        } */
    }
}