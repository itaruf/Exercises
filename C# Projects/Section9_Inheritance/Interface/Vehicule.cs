namespace Interface
{
    public class Vehicule
    {
        protected float Speed;
        protected string Color;
        public Vehicule() : this(0.0f, "Undefined") {
        }
        public Vehicule(float Speed, string Color) {
            this.Speed = Speed;
            this.Color = Color;
        }
        public float getSpeed() {
            return this.Speed;
        }
        public void setSpeed(float Speed) {
            this.Speed = Speed;
        }
        public string getColor() {
            return this.Color;
        }
        public void setColor(string Color) {
            this.Color = Color;
        }
    }
}