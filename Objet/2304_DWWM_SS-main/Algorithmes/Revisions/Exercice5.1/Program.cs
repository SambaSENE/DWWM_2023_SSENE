using System.Security.Cryptography.X509Certificates;

namespace Exercice5._1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variables
            int compteur = 0;
            int nombre = 1;

            while (compteur < 4)
            {
                int sommeDiviseurs = 0;
                for (int diviseur = 1; diviseur < nombre; diviseur++)
                {
                    if (nombre % diviseur == 0)
                    {
                        sommeDiviseurs += diviseur;
                    }
                }
                if (sommeDiviseurs == nombre)
                {
                    Console.WriteLine($"{nombre} est un nombre parfait.");
                    compteur++;
                }
                nombre++;
            }

            // Fin Traitement




        }
    }
}