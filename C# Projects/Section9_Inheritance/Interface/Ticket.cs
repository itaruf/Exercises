using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Interface
{
    public class Ticket : IEquatable<Ticket> // Permet d'utiliser l'interface de comparaison Equals
    {
        private int DurationHours;
        public Ticket(int DurationHours) {
            this.DurationHours = DurationHours;
        }
        public int getDurationHours() {
            return this.DurationHours;
        }
        public void setDurationHours(int DurationHours) {
            this.DurationHours = DurationHours;
        }
        public bool Equals(Ticket OtherTicket) {
            if (this.DurationHours == OtherTicket.DurationHours) {
                return(true);
            }
            else {
                return(false);
            }
        }
    }
}