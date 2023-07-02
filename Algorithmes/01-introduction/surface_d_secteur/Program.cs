namespace surface_d_secteur
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double r;
            double a;
            double aireSecteur;


            r = 8;
            a = 45;

            Console.WriteLine("Bienvenue dans le programme qui la surface d'un secteur circulaire");

            aireSecteur = (Math.PI * Math.Pow(r,2) * a) / 360;

            Console.WriteLine("L'aire du secteur est de " + aireSecteur.ToString("#.##") + " cm2");
        }
    }
}