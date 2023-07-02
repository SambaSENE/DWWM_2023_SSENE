namespace fonctions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(AdditionnerDeuxNombres(8, 6));
            DireBonjour("Samba");
        }


        public static double AdditionnerDeuxNombres(double a, double b)
        {
            double resultat;

            resultat = a + b;
            return resultat;
        }

        public static void DireBonjour(string prenom)
        {
            double somme = AdditionnerDeuxNombres(5, 9);
            Console.WriteLine("Bonjour " + prenom + " " +  somme );
        }
    }

}