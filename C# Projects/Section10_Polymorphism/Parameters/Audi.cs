using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Parameters
{
    public sealed class Audi : Car
    {
        private string Model;
        private string Brand;
        public string getModel() {
            return this.Model;
        }
        public void setModel(string Model) {
            this.Model = Model;
        }
        public string getBrand() {
            return this.Brand;
        }
        public void setBrand(string Brand) {
            this.Brand = Brand;
        }
        public Audi() : this("Undefined", "Undefined", 0.0f) {
        }
        public Audi(string Model, string Color, float HP) : base(Color, HP) {
            this.Model = Model;
            this.Brand = "Audi";
        }
        public new void ShowDetails()
        {
            Console.WriteLine($"Car model: {this.Model}, Brand: {this.Brand}, Color: {this.Color}, HP: {this.HP}");
        }
        public override void Repair()
        {
            Console.WriteLine($"Car model {this.Model} from the brand {this.Brand} repaired.");
        }
    }
}