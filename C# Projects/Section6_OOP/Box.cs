using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Program
{
    public class Box
    {
        // Member attributes
        private float Length;
        private float Height;
        private float Width;
        private float Volume;

        //Constructors
        public Box() : this(0,0,0) {
            System.Console.WriteLine("Default Constructor Called");
        }
        public Box(float Length, float Height, float Width) {
            System.Console.WriteLine("Overloaded Constructor Called");
            this.Length = Length;
            this.Height = Height;
            this.Width = Width; 
        }
        // Member Methods
        public void DisplayAllInfo() {
            Console.WriteLine($"L: {Length}, H: {Height}, W: {Width}, V: {Volume}");
        }
        public void SetLength(float Length) {
            this.Length = Length;
        }
        public void SetHeight(float Height) {
            this.Height = Height;
        }
         public void SetWidth(float Width) {
            this.Width = Width;
        }
         public void SetVolume() {
            this.Volume = this.Length * this.Height * this.Width;
         }
        public float GetLength() {
            return(Length);
         }
        public float GetHeight() {
            return(Height);
         }
        public float GetWidth() {
            return(Width);
         }
        public float GetVolume() {
            return(Volume);
        }
         public float SGLength {
             get {
                return(Length);
             }
             set {
                 this.Length = value;
             }
         }
         public float SGHeight {
             get {
                return(Height);
             }
             set {
                 this.Height = value;
             }
         }
         public float SGWidth {
             get {
                return(Width);
             }
             set {
                 this.Width = value;
             }
         }
         public float SGVolume {
             get {
                return(Volume);
             }
             set {
                 this.Volume = value;
             }
         }
        // Destructor
        ~Box() {
            System.Console.WriteLine("Destructor Called For Box");
        }
    }
}