using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace Abstract
{
    public class Program
    {
        static void Main(string[] args)
        {
            Cube Cube1 = new Cube(3);
            Cube1.GetInfo();
            System.Console.WriteLine();

            Sphere Sphere1 = new Sphere(4);
            Sphere1.GetInfo();
            System.Console.WriteLine();

            List<Shape> Shapes = new List<Shape>();
            Shapes.Add(new Sphere(2));
            Shapes.Add(new Cube(2));

            foreach(Shape ShapeTmp in Shapes) {
                ShapeTmp.GetInfo();
                Cube IceCube = ShapeTmp as Cube;
                if (IceCube == null) {
                    System.Console.WriteLine("This shape is not a cube.");
                }
                if (ShapeTmp is Cube) {
                    System.Console.WriteLine("This shape is a cube !");
                }
            }
            System.Console.WriteLine();
            
            object Cube3 = new Cube(7);
            Cube Cube4 = (Cube)Cube3;
            Cube4.GetInfo();
        }
    }
}
