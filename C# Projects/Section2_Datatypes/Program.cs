//using Str.Str;
//using Constants.Constants;

namespace Program
{
    class Datatypes
    {
        public static void Main(string[] args)
        {
            /*Using int, double and float types*/
            System.Console.ForegroundColor = System.ConsoleColor.White;
            System.Console.WriteLine("Hello World!");
            System.Console.WriteLine();

            int Num1 = 5;
            int Num2 = 3;
            int Sum = Num1 + Num2;
    
            System.Console.WriteLine("Num1: " +Num1);
            System.Console.WriteLine("Num2: " +Num2);
            System.Console.WriteLine("(int) Sum: ");
            System.Console.WriteLine();

            float FloatNum1 = 5.5f;
            float FloatNum2 = 3.3f;
            float FloatSum = FloatNum1 + FloatNum2;

            System.Console.WriteLine("FloatNum1: "+FloatNum1);
            System.Console.WriteLine("FloatNum2: "+FloatNum2);
            System.Console.WriteLine("(float) Sum: "+FloatSum);

            System.Console.WriteLine();

            double Num3 = 10.525;
            double Num4 = 20.475;
            double DoubleSum = Num3 + Num4;

            System.Console.WriteLine("Num3: "+Num3);
            System.Console.WriteLine("Num4: "+Num4);
            System.Console.WriteLine("(double) Sum: "+DoubleSum);

            System.Console.WriteLine();

            //Conversion explicite
            int Div = (int) Num3 / (int) Num4;

            System.Console.WriteLine("Div: "+Div);

            System.Console.WriteLine();

            /*Using string type*/
            string MyName = "Imane";
            System.Console.WriteLine("My name is "+MyName);
            string MyString = Num1.ToString();
            System.Console.WriteLine(typeof(string));
            System.Console.WriteLine("My string num is "+MyString);

            System.Console.WriteLine();

            /*Parse a string*/
            string str = "13";
            string str2 = "15";
            int ConvertStr = System.Int32.Parse(str);
            int ConvertStr2= System.Int32.Parse(str2);
            int Result = ConvertStr + ConvertStr2;
            System.Console.WriteLine("Result parsed: "+Result);
            System.Console.WriteLine();

            /*Call a non-static function from a different class*/
            var Str = new Strings();

            Str.UseStringsMethods();
            System.Console.WriteLine();

            Str.FindOccurrence();
            System.Console.WriteLine();

            Str.NameConcatenation();
            System.Console.WriteLine();
            
            /*Call a static function from a different class (with "Using Filename.ClassName" at the top*/
            //UseStrMethods();

            var Constants = new Constants();
            
            Constants.DisplayConstants();
            System.Console.WriteLine();
        }
    }
}
//dotnet run