namespace jeux_du_pendu
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<char> motSecret = new List<char>();
            char lettreEssai;
            int compteur = 6;
            int bonneRep = 0;
            bool correct = false;
            bool saisieOk = true;

            // Saisie du mot à chercher par le joueur 1 :
            while (saisieOk)
            {
                Console.WriteLine("Entrez le mot à chercher (minimum 5 caractères) :");
                string motSaisi = Console.ReadLine();
                motSecret.Clear();
                motSecret.AddRange(motSaisi.ToLower()); // Convertir le mot en minuscules et le stocker dans la liste
                Console.Clear();

                saisieOk = motSecret.Count < 5;
                if (saisieOk)
                {
                    Console.WriteLine("Le mot doit avoir au moins 5 caractères.");
                }
            }

            List<char> motEssai = new List<char>();
            for (int i = 1; i < motSecret.Count - 1; i++)
            {
                motEssai.Add('_');
            }

            // Boucle du jeu:
            int essai = 0;
            while (essai < 6 && bonneRep != motSecret.Count)
            {
                Console.WriteLine("Entrez l'essai " + (essai + 1) + ":");
                lettreEssai = char.ToLower(Console.ReadKey().KeyChar); // Saisie d'une lettre (convertie en minuscule)
                Console.WriteLine();

                correct = false;
                int i = 0;
                while (i < motSecret.Count)
                {
                    if (lettreEssai == motSecret[i])
                    {
                        motEssai[i] = lettreEssai;
                        bonneRep++;
                        correct = true;
                    }
                    i++;
                }

                Console.WriteLine(string.Join(" ", motEssai)); // Affichage du mot partiellement deviné
                Console.WriteLine($"Il vous reste {6 - essai - 1} essai(s)\n");

                if (!correct)
                {
                    essai++;
                }
            }

            if (bonneRep == motSecret.Count)
            {
                Console.WriteLine("Bravo ! Vous avez trouvé le mot.");
            }
            else
            {
                Console.WriteLine($"Perdu, vous êtes mort. Le mot caché était : {string.Join("", motSecret)}");
            }

            Console.ReadLine();

        }
    }
}