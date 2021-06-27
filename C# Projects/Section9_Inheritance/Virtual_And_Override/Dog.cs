namespace Virtual_n_Override
{
    public class Dog : Animals
    {
        // Specific member attributes
        private bool IsHappy;
        public Dog(string Name, int Age, bool IsHungry, bool isHappy) : base(Name, Age, IsHungry) {
            this.IsHappy = isHappy; 
        }
        public override void Eat() {
            base.Eat();
        }
        public override void MakeSound()
        {
            System.Console.WriteLine("Woof!");
        }
        public override void Play()
        {
            if (IsHappy) {
                base.Play();
            }
            else {
                System.Console.WriteLine($"{Name} is not happy therefore {Name} does not want to play.");
            }
        }
    }
}