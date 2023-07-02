namespace exercice_3._6
{
    internal class Program
    {
        static void Main(string[] args)
            
        {
            int essais = 0;
            int nombreMystere = 0;


            while (true)
            {
                // Demander à l'utilisateur d'entrer un nombre
                Console.Write("Entrez un nombre entre 0 et 100 : ");
                int guess = int.Parse(Console.ReadLine());

                // Incrémenter le compteur d'essais
                essais++;

                if (guess == nombreMystere)
                {
                    Console.WriteLine("Bravo vous avez trouvé en {0} essais.", essais);
                    break;
                }
                else if (guess < nombreMystere)
                {
                    Console.WriteLine("Le nombre mystère est plus grand que {0}.", guess);
                }
                else
                {
                    Console.WriteLine("Le nombre mystère est plus petit que {0}.", guess);
                }
            }

            // Attendre que l'utilisateur appuie sur une touche pour quitter
            Console.ReadKey();
        }
    }
    }
    
}