namespace Interface
{
    public class Furniture
    {
        protected string Color;
        protected string Material;
        public Furniture() : this("Undefined", "Undefined") {
        }
        public Furniture(string Color, string Material) {
            this.Color = Color;
            this.Material = Material;
        }
        public string getColor() {
            return this.Color;
        }
        public void setColor(string Color) {
            this.Color = Color;
        }
        public string getMaterial() {
            return this.Material;
        }
        public void setMaterial(string Material) {
            this.Material = Material;
        }
    }
}