namespace Exercice4._3
{
    internal class Program
    {
        static void Main(string[] args)
        {

            // Variables
            string alphabet = ("abcdefghijklmnopqrstuvxyz");
            string text = "";
            // Traitement

            do
            {
                Console.WriteLine("Veuillez saisir votre texte");
                text = Console.ReadLine();

            } while (text.Length < 120);
            for (int i = 0; i < alphabet.Length; i++) 
            {
                int occurence = 0;
                for (int j = 0; j < text.Length; j++)
                {
                    if (alphabet[i] == text[j]) 
                    {
                        occurence++;
                    }
                }

                Console.WriteLine(alphabet[i] + " est present en " + occurence + " fois dans le texte");
            }
            
        }
    }
}