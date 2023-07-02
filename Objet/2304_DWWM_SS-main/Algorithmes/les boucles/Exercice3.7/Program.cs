namespace Exercice3._7
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Entrez la somme totale que Barnabé avait : ");
            int S = int.Parse(Console.ReadLine());

           
            int CompteurMagasins = 0;

           
            while (S > 1)
            {
                CompteurMagasins++;
                int SommeMagasin = (S / 2) + 1;
                S -= SommeMagasin;
            }

            
            Console.WriteLine($"Barnabé a acheté dans {CompteurMagasins} magasin(s).");



        }
    }
}