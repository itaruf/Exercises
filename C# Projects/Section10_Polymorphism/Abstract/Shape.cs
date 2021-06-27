using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Abstract
{
    public abstract class Shape
    {
        protected string Name { get; set; }
        public virtual void GetInfo() {
            Console.WriteLine($"This is a(n) {this.Name}");
        }
        public abstract double Volume();
    }
}