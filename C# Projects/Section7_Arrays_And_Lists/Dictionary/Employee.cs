namespace Dictionary
{
    public class Employee
    {
        private string Role;
        private string Name;
        private int Age;
        private int Rate;

        public Employee(string Role, string Name, int Age, int Rate) {
            this.Role = Role;
            this.Name = Name;
            this.Age = Age;
            this.Rate = Rate;
        }
        public string getRole() {
            return this.Role;
        }

        public void setRole(string Role) {
            this.Role = Role;
        }

        public string getName() {
            return this.Name;
        }

        public void setName(string Name) {
            this.Name = Name;
        }

        public int getAge() {
            return this.Age;
        }

        public void setAge(int Age) {
            this.Age = Age;
        }

        public int getRate() {
            return this.Rate;
        }

        public void setRate(int Rate) {
            this.Rate = Rate;
        }

    }
}