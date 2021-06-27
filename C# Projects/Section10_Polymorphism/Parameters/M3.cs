namespace Parameters
{
    public class M3 : BMW
    {
        public M3() : base() {
        }
        public M3(string Model, string Color, float HP) : base(Model, Color, HP) {
        }

        public sealed override void Repair()
        {
           System.Console.WriteLine($"Trying to override");
           base.Repair();
        }
    }
}