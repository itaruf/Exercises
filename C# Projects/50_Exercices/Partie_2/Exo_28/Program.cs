using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Exo_28
{
    public abstract class Shape {
        public abstract void Draw();
    }
    public class Circle : Shape {
    public override void Draw()
        {
            Console.WriteLine("Drawing a circle");
        }
     }
    public class Rectangle : Shape {
        public override void Draw()
        {
            Console.WriteLine("Drawing a rectangle");
        }
    }        
    class Program { 
        static void Main(string[] args)
        {
            var Shapes = new List<Shape>
            {
                new Rectangle(),
                new Circle()
            };

            foreach (var Shape in Shapes)
            {
                Shape.Draw();
            }
        }
    }
}
