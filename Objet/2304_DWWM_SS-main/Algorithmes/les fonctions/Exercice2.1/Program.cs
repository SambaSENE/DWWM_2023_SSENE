namespace Exercice2._1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
        }

        static int sort(int a, int b)
        {
            // Varaibles
            int resultat = 0;

            // Debut

            if (a > b) 
            { 
                resultat = a  + b;
            }

            return resultat;

            // Fin
        }

        static void view()
        {
            Console.Write("est plus grand que");
        }

    }
}