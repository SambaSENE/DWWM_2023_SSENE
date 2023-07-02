namespace Exercice_2._2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variables
            string saisie;
            bool saisieOk = true;
            bool exist = true;

            int a;
            bool mineur = true;

            // Traitement 
            do
            {
                  Console.WriteLine("Veuillez saisir votre age");
                  saisie = Console.ReadLine();
                  saisieOk = int.TryParse(saisie, out a);
            }
            while (!saisieOk);



            if (a > 0 & a <= 18)
            {
                mineur = true;
            }
            else if (a >= 18)
            {
                mineur = false;
            }
            else if (a < 0) {
                exist = false;
            }


            if (exist)
            {
                if (mineur)
                {
                    Console.WriteLine("Vous êtes mineur");
                }
                else 
                { 
                    Console.WriteLine("Vous êtes majeur");
                
                }
            }
            else if(!exist){
                Console.WriteLine("Vous n'êtes pas né");
            }
        }
    }
}