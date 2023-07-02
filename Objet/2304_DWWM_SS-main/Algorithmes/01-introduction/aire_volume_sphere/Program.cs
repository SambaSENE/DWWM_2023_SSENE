namespace aire_volume_sphere
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double rayon;
            double aire;
            double volume;
           
            double pi = Math.PI;

            Console.WriteLine("Vous calculez l'aire et la volume d'un sphere");

            rayon = 6.5;

            aire =  (Math.Pow(rayon,2.0) * pi) * 4;
              

            volume = 4* pi * (Math.Pow(rayon,3)) /3 ;


            Console.WriteLine("L'aire du sphere " + aire + " et " + " sa volume " +volume.ToString("#.##"));

            Console.WriteLine();

            Console.WriteLine("Fin du programme");

        }
    }
}