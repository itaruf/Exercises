namespace Simple_Inheritance
{
    public class Radio : ElectronicDevices
    {   
        // Constructor
        public Radio(bool IsOn, string Brand) : base(IsOn, Brand) {
            System.Console.WriteLine("Constructor called for Radio");
        }
        // Destructor
        ~Radio() {
            System.Console.WriteLine("Destructor called.");
        }
        public void ListenDevice() {
            if (IsOn) {
                System.Console.WriteLine("Listening to the radio !");
            }
            else {
                System.Console.WriteLine("Radio is switched off, switch it to on first");
            }
        }
    }
}