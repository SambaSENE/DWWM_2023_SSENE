using System.Diagnostics;
using CL_Fraction;

namespace FractionProgramm
{
    
    public class Program
    {
        static void Main(string[] args)
        {
            Fraction f1 = new Fraction(1, 2);
            Fraction f2 = new Fraction(2, 5);

            Fraction autreR = new Fraction(3, 3);


          /*  f1.Plus(f2);


            f2.Soustraire(f1);

            f2.Oppose();*/
            f2.Divise(f1);
            f2.Display();
            Console.WriteLine(f2.ToString());



            Console.WriteLine(f1.ToString());
        }

        
    }
}