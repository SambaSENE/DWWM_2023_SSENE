namespace moyenne1_3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int nb1;
            int nb2;
            double moyenne;

            Console.WriteLine("Veuillez saisir le premiere nombre ");
            
            nb1 = int.Parse(Console.ReadLine());

            Console.WriteLine("Veuillez saisir le second nombre");
            
            nb2 = int.Parse(Console.ReadLine());

            moyenne = (nb1 + nb2) / 2d;
 
            Console.WriteLine("La moyenne est de " + nb1 + " et " + nb2 + " est de " + moyenne) ;

            Console.ReadLine();
        }
    }
}