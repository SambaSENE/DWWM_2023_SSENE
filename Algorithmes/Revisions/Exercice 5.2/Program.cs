namespace Exercice_5._2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variables :

            double nb;
            double km = 0;
            double miles = 0;
            string? input;

            bool inputOk;
            bool doConversion = true;
            string[] tabDistance;
            // Debut Traitement 
            inputOk = false;

            do
            {
                Console.WriteLine("Veuillez saisir un nombre : suivi d'un espace avec l'unité km (kilometre) ou mi (miles)");
                input = Console.ReadLine().ToLower();
                inputOk = double.TryParse(input, out nb);


                if (input.EndsWith("mi") == true)
                {
                    tabDistance = input.Split(" ");
                    inputOk = double.TryParse(tabDistance[0], out miles);

                    if (inputOk == true && miles >= 0.01 && miles <= 1000000)
                    {
                        km = miles * 1.609;
                        Console.WriteLine(" {0:#.##} miles donnera en kilometre : {1:#.##} ", miles, km);
                    }
                }
                else if (input.EndsWith("km"))
                {
                    tabDistance = input.Split(" ");
                    inputOk = double.TryParse(tabDistance[0], out km);

                    if (inputOk == true && km >= 0.01 && km <= 1000000)
                    {
                        km = km / 1.609;
                        Console.WriteLine(" {0:#.##} km donnera en miles : {1:#.##} ", km, miles);
                    }
                }
                else
                {
                    if (input == "q")
                    {
                        Console.WriteLine("programme terminé");
                    }
                    else
                    {
                        Console.WriteLine("Erreur d'unité");
                    }
                }
            } while (input != "q" && !inputOk);
        }
    }
}