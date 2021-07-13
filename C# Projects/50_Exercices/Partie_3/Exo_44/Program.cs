using System;

namespace Exo_44
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine($"{CheckParentheses("")}");
            Console.WriteLine($"{CheckParentheses("(")}");
            Console.WriteLine($"{CheckParentheses("()()()()(")}");
            Console.WriteLine($"{CheckParentheses("()()()()")}");
            Console.WriteLine($"{CheckParentheses("(())(())(")}");
        }
        public static bool CheckParentheses(string Val)
        {
            if (Val.Length <= 1 || Val.Length % 2 != 0) {
                return(false);
            }
            for (int i=0; i<Val.Length;i+=2) {
                if (!(Val[i] == '(' && Val[i+1] == ')')) {
                    return(false);
                }
            }
            return(true);
        }
    }
}
