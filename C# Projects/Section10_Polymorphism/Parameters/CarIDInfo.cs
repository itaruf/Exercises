namespace Parameters
{
    public class CarIDInfo
    {
        public int ID;
        public string Owner;

        public CarIDInfo() : this(0, "Undefined") {
        }
        public CarIDInfo(int ID, string Owner)
        {
            this.ID = ID;
            this.Owner = Owner;
        }

        public int getID() {
            return this.ID;
        }
        public void setID(int ID) {
            this.ID = ID;
        }
    }
}