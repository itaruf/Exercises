namespace Simple_Inheritance
{
    public class ElectronicDevices
    {
        protected bool IsOn;
        protected string Brand;
        
        public ElectronicDevices() : this(false, "Undefined") {
            System.Console.WriteLine("Default Constructor called for ElectronicDevices");
        }
        public ElectronicDevices(bool IsOn, string Brand) {
            System.Console.WriteLine("Constructor called for ElectronicDevices");
            this.IsOn = IsOn;
            this.Brand = Brand;
        }
        public bool getIsOn() {
            return this.IsOn;
        }
        public void setIsOn(bool IsOn) {
            this.IsOn = IsOn;
        }
        public string getBrand() {
            return this.Brand;
        }
        public void setBrand(string Brand) {
            this.Brand = Brand;
        }    
        // Member methods   
        public void SwitchOn() {
            IsOn = true;
        }
        public void SwitchOff() {
            IsOn = false;
        }
    }
}