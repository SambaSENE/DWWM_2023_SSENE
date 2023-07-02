namespace Exercice_._6._2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variables :

            int nbComputer;
            int nbPlayer;
            bool inputOk = false;
            string? input;
            int nbScoreComp;
            int nbScorePlay = 0;
            int diff;
            bool win = false;
            // Traitement 

            nbScoreComp = 0;
            do
            {

                do
                {
                    Console.WriteLine("Veuillez saisir un nombre entre 0 et 2");
                    input = Console.ReadLine();
                    inputOk = int.TryParse(input, out nbPlayer);

                    if (inputOk || nbPlayer <= 2)
                    {
                        inputOk = true;
                    }

                } while (!inputOk && nbPlayer <= 2);


                nbComputer = new Random().Next(0, 3);

                diff = Math.Abs(nbPlayer + nbComputer);
                switch (diff)
                {
                    case 2:
                        if (nbPlayer < nbComputer)
                        {
                            nbScoreComp++;
                            Console.WriteLine(" l'ordinateur a  1 point " + nbScoreComp);
                        }
                        break;
                    case 1:
                        if (nbPlayer > nbComputer)
                        {
                            nbScorePlay++;
                            Console.WriteLine("bravo  vous avez 1 point " + nbScorePlay);
                        }
                        break;
                    case 0:
                        if (nbPlayer == nbComputer)
                        {
                            Console.WriteLine(" vous etes en egalité");
                        }
                        break;

                    default:
                        break;
                }
                if (nbScoreComp != 10)
                {
                    win = false;
                }
                
            } while (nbScoreComp != 10 || nbScorePlay != 10);

            if (!win)
            {
                Console.WriteLine("L'ordinateur a gagné");
            }
            else
            {
                Console.WriteLine("Vous avez gagné");
            }





            /*
           */
        }
    }
}