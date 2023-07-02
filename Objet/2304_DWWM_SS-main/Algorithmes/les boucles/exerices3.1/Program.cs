namespace exerices3._;
class Program
{
    static void Main(string[] args)
    {

        Console.Write("Entrez la somme totale que Barnabé avait : ");
        int S = int.Parse(Console.ReadLine());

        // Étape 2 : Initialiser le compteur de magasins à 0.
        int CompteurMagasins = 0;

        // Étape 3 : Tant que S est supérieur à 1 €, incrémenter le compteur de magasins, calculer la somme dépensée dans le magasin et déduire cette somme de S.
        while (S > 1)
        {
            CompteurMagasins++;
            int SommeMagasin = (S / 2) + 1;
            S -= SommeMagasin;
        }

        // Étape 4 : Afficher le compteur de magasins.
        Console.WriteLine($"Barnabé a acheté dans {CompteurMagasins} magasin(s).");
    }
}

