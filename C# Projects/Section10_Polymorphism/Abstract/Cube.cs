using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Abstract
{
    public sealed class Cube : Shape
    {
        public double Length {get; set;}
        public Cube() : this(0.0)
        {
        }
        public Cube(double Length) {
            this.Name = "Cube";
            this.Length = Length;
        }
        public override void GetInfo()
        {
            Console.WriteLine($"Shape: {Name}, Length: {Length}, Volume: {Volume()}");
            
        }
        public override double Volume()
        {
            return (Math.Pow(Length, 3));
        }
    }
}