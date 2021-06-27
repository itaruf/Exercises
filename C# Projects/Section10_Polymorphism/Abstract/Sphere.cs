using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Abstract
{
    public sealed class Sphere : Shape
    {
        public double Radius;
        public Sphere() : this(0.0f) {
        }
        public Sphere(double Radius)
        {
            this.Radius = Radius;
            this.Name = "Sphere";
        }
        public override void GetInfo() {
            Console.WriteLine($"Shape: {Name}, Radius: {Radius}, Volume: {Volume()}");
        }
        public override double Volume() {
            return(4/3*Math.PI*(Math.Pow(Radius,3)));
        }
    }
}