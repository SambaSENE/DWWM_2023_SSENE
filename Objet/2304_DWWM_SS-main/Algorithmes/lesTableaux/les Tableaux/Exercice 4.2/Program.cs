using System;

namespace Exercice_4._2
{
    internal class Program
    {
        static void Main(string[] args)
        {

            string phrase = "  Quand on ose, on se trompe souvent. Quand on n’ose pas, on se trompe toujours";
            char lettre = 's';
            int cpt = 0;

            // Traitement

            for (int i = 0; i < phrase.Length; i++)
            {
                    if (lettre == phrase[i])
                    {
                         cpt++;
                    }
            }

            // Affichage

            if (phrase == " " || phrase == ".")
            {
                Console.WriteLine("La phrase est vide");
            }
            else if (cpt == 0)
            {
                Console.WriteLine("La lettre n'est pas presente");
            }
            else if (cpt > 0)
            {
                Console.WriteLine("La lettre est presente  " + cpt + " fois ");
            }
            
            
            
            
                    
            
            
        }
    }
}