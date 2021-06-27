using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Parameters
{
    public class Car
    {
        protected string Color;
        protected float HP;
        protected CarIDInfo CarIDInform = new CarIDInfo();
        public void setCarIDInform(int ID, string Owner) {
            this.CarIDInform.ID = ID;
            this.CarIDInform.Owner = Owner;
        }
        public void getCarIDInform() {
            Console.WriteLine($"ID: {this.CarIDInform.ID}, Owner: {this.CarIDInform.Owner}");
        }

        public Car() : this("Undefined", 0.0f) {
            System.Console.WriteLine("Default constructor called in Car.");
        }
        public Car(string Color, float HP)  {
            this.Color = Color;
            this.HP = HP;
        }
        public string getColor() {
            return this.Color;
        }
        public void setColor(string Color) {
            this.Color = Color;
        }
        public float getHP() {
            return this.HP;
        }
        public void setHP(float HP) {
            this.HP = HP;
        }
        public virtual void ShowDetails() {
            Console.WriteLine($"Color: {this.Color}, HP: {this.HP}");
        }
        public virtual void Repair() {
            System.Console.WriteLine("Car repaired.");
        }
    }
}