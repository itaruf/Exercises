using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Parameters
{
    public class BMW : Car
    {
        protected string Model;
        protected string Brand;
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
        public BMW() : this("Undefined", "Undefined", 0.0f) {
        }
        public BMW(string Model, string Color, float HP) : base(Color, HP) {
            this.Model = Model;
            this.Brand = "BMW";
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