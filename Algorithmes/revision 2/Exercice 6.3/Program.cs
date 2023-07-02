namespace Exercice_6._3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<int> ages = new List<int>();
            int counter = 0;
            string? input;
            bool inputOK = false;
            int youngCount = 0;
            int oldCount = 0;
            int equalCount = 0;

            while (counter < 20)
            {
                do
                {
                    Console.WriteLine("Veuillez saisir l'âge d'une personne :");
                    input = Console.ReadLine();
                    inputOK = int.TryParse(input, out int age);

                    if (inputOK)
                    {
                        ages.Add(age);

                        if (age < 20)
                        {
                            youngCount++;
                        }
                        else if (age > 20)
                        {
                            oldCount++;
                        }
                        else
                        {
                            equalCount++;
                        }
                    }
                } while (!inputOK);

                counter++;
            }

            if (youngCount == 20)
            {
                Console.WriteLine("TOUTES LES PERSONNES ONT MOINS DE 20 ANS");
            }
            else if (oldCount == 20)
            {
                Console.WriteLine("TOUTES LES PERSONNES ONT PLUS DE 20 ANS");
            }
            else
            {
                Console.WriteLine("Nombre de personnes de moins de 20 ans : " + youngCount);
                Console.WriteLine("Nombre de personnes de plus de 20 ans : " + oldCount);
                Console.WriteLine("Nombre de personnes ayant 20 ans : " + equalCount);
            }

        }
    }
}