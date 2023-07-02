using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exercice_6._1
{
    internal class Functions
    {

        public static void InputUser()
        {
            bool inputOk = false;
            string? input;

            do
            {
                Console.WriteLine("Veuillez saisir un nom de legume et son prix");
                input = Console.ReadLine();
                if (input != " ")
                {
                    inputOk = true;
                }
            } while (!inputOk);

        }

        public static void SplitChar()
        {
            string[] input;

            input = input.Length / 2;
            
        }
    }
}
