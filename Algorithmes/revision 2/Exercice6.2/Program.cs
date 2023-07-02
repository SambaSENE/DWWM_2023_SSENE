namespace exercice6._2;
class Program
{
    static void Main(string[] args)
    {
        int player;
        int computer;
        int scoreMax;

        int scoreComputer = 0;
        int scorePlayer = 0;
        int diff;
        string? input;
        bool inputOk = false;
        bool stop = false;

        // traitement

        scoreMax = 10;
        Random random = new Random();
        computer = random.Next(0, 3);
        do
        {
            do
            {
                Console.WriteLine("Veuillez saisir un nombre entre 0 et 2 :");
                input = Console.ReadLine();
                inputOk = int.TryParse(input, out player);
                if (player > 2)
                {
                    Console.WriteLine("Veuillez saisir une valeur valide");
                }
                else if(player < 0)
                {

                    Environment.Exit(0);
                }


            } while (player < 0 || player > 2 && !stop && !inputOk);

            diff = Math.Abs(player - computer);

            switch (diff)
            {
                case 2:
                    if (computer > player)
                    {
                        Console.WriteLine("L'ordinateur a gagné un point.");
                        scoreComputer++;
                    }
                    else
                    {
                        scorePlayer++;
                        Console.WriteLine("Vous avez  gagné un point.");
                    }
                    break;

                case 1:
                    if (player > computer)
                    {
                        Console.WriteLine("Bravo , vous avez gagné un point !");
                        scoreComputer++;
                    }
                    else
                    {
                        Console.WriteLine("Bravo , vous avez gagné un point !");
                        scorePlayer++;
                    }
                    break;
                case 0:
                    if (player == computer)
                    {
                        Console.WriteLine("Egalité , aucun point n'est marqué.");
                    }
                    break;
                default:
                    break;
            }

            Console.WriteLine(" Score actuel : \n Joueur  : " + scorePlayer + "  \n Ordinateur : " + scoreComputer);


        } while (scoreComputer < scoreMax && scorePlayer < scoreMax);
         if (scorePlayer == scoreMax)
        {
            Console.WriteLine("Vous avez gagné le jeu !!");
        }
        else
        {
            Console.WriteLine("L'ordinateur a gagné le jeu");
        }
    }
}
