namespace Exercice3._2
{
    internal class Program
    {
        static void Main(string[] args)
        {
           
            string password;
            string? password_user;

            bool input;
            int cpt;
            int cptMax;


            // Traitement

            password = "formation";
            input = true;
            cpt = 0;
            cptMax = 3;


            do
            {
                Console.WriteLine("Veuillez saisir votre mot de passe");
                password_user = Console.ReadLine();

                if (password == password_user)
                {
                    input = true;
                    
                }
                else
                {
                    cpt++;
                    input = false;
                    Console.WriteLine(cpt);
                }

            } while (!input && cpt != cptMax);

            if (input)
            {
                Console.WriteLine("Vous êtes connecté");
            }
            else  
            { 
            
                Console.WriteLine("Votre compte est bloqué");
            }
 
        }
    }
}