namespace Exercice2._5
{
    internal class Program
    {
        static void Main(string[] args)
        {
       


            // Variables
                bool beauTemps = false;
                bool veloEnBonEtat = false;
                bool baladeEnVelo = false;
                bool veloBesoinReparation = false;
                bool peutReparerVeloImm = false;
                bool retrouveLivre = false;
                bool livreDispo = false;
                string livre = "";

            // Traitement
            string saisie;

            do
            {
                Console.WriteLine("Est-ce qu'il fera beau demain ? (O pour oui, N pour non)");
                saisie = Console.ReadLine();
            } while (saisie != "O" && saisie != "N");

            if (saisie == "O")
            {
                beauTemps = true;

                do
                {
                    Console.WriteLine("Avez-vous utilisé votre bicyclette récemment ? (O pour oui, N pour non)");
                    saisie = Console.ReadLine();
                } while (saisie != "O" && saisie != "N");

                if (saisie == "N")
                {
                    veloBesoinReparation = true;
                    Console.WriteLine("Passez chez le garagiste avant de partir en balade.");

                    do
                    {
                        Console.WriteLine("Les réparations seront-elles immédiates ? (O pour oui, N pour non)");
                        saisie = Console.ReadLine();
                    } while (saisie != "O" && saisie != "N");

                    if (saisie == "O")
                    {
                        peutReparerVeloImm = true;
                        baladeEnVelo = true;
                    }
                }
                else if (saisie == "O")
                {
                    veloEnBonEtat = true;
                    baladeEnVelo = true;
                }

                if (!baladeEnVelo)
                {
                    Console.WriteLine("Votre bicyclette n'est pas en état pour la balade.");
                    Console.WriteLine("Allez à pied jusqu'à l'étang pour cueillir des joncs.");
                }
            }
            else if (saisie == "N")
            {
                Console.WriteLine("Consacrez votre journée à la lecture.");

                do
                {
                    Console.WriteLine("Avez-vous le 1er tome de Game of Thrones ? (O pour oui, N pour non)");
                    saisie = Console.ReadLine();
                } while (saisie != "O" && saisie != "N");

                if (saisie == "O")
                {
                    livre = "Game of Thrones, tome 1";
                    retrouveLivre = true;
                }
                else if (saisie == "N")
                {
                    Console.WriteLine("Allez emprunter le livre à la bibliothèque municipale.");

                    do
                    {
                        Console.WriteLine("Est-ce que le livre est disponible ? (O pour oui, N pour non)");
                        saisie = Console.ReadLine();
                    } while (saisie != "O" && saisie != "N");

                    if (saisie == "O")
                    {
                        livre = "Game of Thrones, tome 1";
                        livreDispo = true;
                    }
                    else if (saisie == "N")
                    {
                        livre = "un roman policier";
                    }

                    retrouveLivre = true;
                }
            }

            if (retrouveLivre)
            {
                if (livreDispo)
                {
                    Console.WriteLine("Le livre est disponible à la bibliothèque municipale.");
                }
                else
                {
                    Console.WriteLine("Vous avez le livre " + livre + ".");
                }

                Console.WriteLine("Installez-vous confortablement dans un fauteuil et plongez-vous dans la lecture.");
            }



        }
    }
}