namespace Simple_Inheritance
{
    public class TV : ElectronicDevices
    {
        public TV(bool IsOn, string Brand) : base(IsOn, Brand) {
            System.Console.WriteLine("Constructor called for TV");
        }
        public void ListenDevice() {
            if (IsOn) {
                System.Console.WriteLine("Watching TV !");
            }
            else {
                System.Console.WriteLine("TV is switched off, switch it to on first");
            }
        }
    }
}