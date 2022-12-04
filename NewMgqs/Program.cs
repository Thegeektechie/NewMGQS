using System;
internal class Program
{
            private static string getNewA(string part1, string part2)
            {
                int length = part2.Length();
                StringBuilder builder = new StringBuilder(length);
                for (var i = 0; i < length; i++)
                {
                 
                }
                return builder.ToString();
            }
            public static void main(String[] args)
            {
                var input = "i am a boy now in the university";
                var middle = input.Length() / 2;
                var part1 = input.Substring(0, middle);
                var part2 = input.Substring(middle);
                var newA = getNewA(part1, part2);
                Console.WriteLine(newA);
            }
        }
   
