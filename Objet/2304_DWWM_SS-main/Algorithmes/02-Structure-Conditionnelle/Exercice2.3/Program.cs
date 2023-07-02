namespace Exercice3._2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variable
            int age;
            const int AgeFixERetraite = 60;
            int nbAnnee;
            bool enRetraite;
            string saisie;
            bool saisieOk = true;

            // Traitement
            enRetraite = false;
            nbAnnee = 0;

            do
            {
                Console.WriteLine("Veuillez saisir votre age");
                saisie = Console.ReadLine();
                saisieOk = int.TryParse(saisie, out age);
            } while (!saisieOk);

            if (age >= AgeFixERetraite)
            {
                enRetraite = true;
                nbAnnee = AgeFixERetraite - age;
            }
            else if (age < AgeFixERetraite)
            {
                enRetraite = false;
                nbAnnee = AgeFixERetraite - age;
            }

            // affichage
            if (enRetraite)
            {
                Console.WriteLine("Vous êtes deja en retraite depuis " + nbAnnee + " années .");
            }
            else
            {

                Console.WriteLine("il vous reste  " + nbAnnee + " années avant la retraite");
            }
        }
    }  
}