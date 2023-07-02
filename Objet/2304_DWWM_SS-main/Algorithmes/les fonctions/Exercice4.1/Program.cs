namespace Exercice4._1
{
    internal class Program
    {
       
      
        static void Main(string[] args)
        {
            int[] array = new int[] { 8, 16, 64, 128, 256, 512 };

            Console.WriteLine(array.Length);
            
            bool test = Fonctions.Browsing(array , 512);
            Fonctions.View();

        }

    }
}