using ClassLibraryBoutielle;

namespace ConsoleAppBouteille
{
	internal class Program
	{
		static void Main(string[] args)
		{
			
			Bouteille coca = new Bouteille("Coca" ,false , 1.5f , 1.3f);
			bool OuvrirOk = coca.Ouvrir();
			bool videOk = coca.Vider();
			bool videOk2 = coca.Vider();
			bool remplirToutOk = coca.RemplirTout();
			bool remplirQuantiteOk = coca.RemplirQuantite(0.50f);
			bool videQuantitteOk1 = coca.ViderQuantite(0.10f);

			Bouteille jus = new Bouteille("orange", true, 1.5f, 1.3f);

			bool videQte = jus.ViderQuantite(0.50f);
		}
	}
}