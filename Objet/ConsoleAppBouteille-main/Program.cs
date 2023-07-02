using ClassLibraryBoutielle;

namespace ConsoleAppBouteille
{
    internal class Program
    {
        static void Main(string[] args)
        {
            
            Bouteille coca = new Bouteille("Coca" ,false , 1.5f , 1.3f);

            bool OuvrirOk = coca.Ouvrir();
            bool viderQauntiteOk = coca.ViderQuantite(0.50f);
            
            bool remplirQuantiteOk = coca.RemplirQuantite(0.4f);
            

          
        }
    }
}