namespace Exercice2._4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variables
            int a;
            int b;
            int c;

            string saisie;
            bool saisieOK = true;

            // Traitement
            do {
                Console.WriteLine("Veuillez saisir le premier nombre");
                saisie = Console.ReadLine();
                saisieOK =  int.TryParse(saisie, out a);

                Console.WriteLine("Veuillez saisir le deuxieme nombre");
                saisie = Console.ReadLine();
                saisieOK = int.TryParse(saisie, out b);

                Console.WriteLine("Veuillez saisir le troisieme nombre");
                saisie = Console.ReadLine();
                saisieOK = int.TryParse(saisie, out c);

            } while (!saisieOK);

            if (a > b & a > c) { 
                Console.WriteLine( a + " " + b  + " " + c);
            } else if (b > c & b > a)
            {
                Console.WriteLine( b + " " + c + " " + a);
            }
            else if (c > a & c > b)
            {
                Console.WriteLine( c + " " + a+ " " + b);
            }
            else if (a > c & a > b)
            {
                Console.WriteLine(c + " " + b + " " + a);
            }
            else if (b > a & b > c)
            {
                Console.WriteLine(b + " " + c + " " + a);
            }
            else if (b > c & b > a)
            {
                Console.WriteLine(a + " " + c + " " + b);
            }

        }
    }
}