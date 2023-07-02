internal class Program
{
    private static void Main(string[] args)
    {
        // Variables
        string? str = "";
        bool inputOk = true;
        bool palindrome = true;
        // traitement 
        do
        {
            Console.WriteLine("Veuillez saisir une chaîne de caractères :");
            str = Console.ReadLine();

            if (str != "")
            {
                inputOk = true;
            }
        } while (str != "." && !inputOk);

        if (str == " ")
        {
            Console.WriteLine("La chaîne est vide");
        }
        else
        {
            for (int i = 0; i < str.Length / 2; i++)
            {
                if (str[i] != str[str.Length - i - 1])
                {
    
                    palindrome = false;
                }
            }

            if (palindrome)
            {
                Console.WriteLine("La chaîne de caractères est un palindrome.");
            }
            else
            {
                Console.WriteLine("La chaîne de caractères n'est pas un palindrome.");
            }
        }
        // fin Traiement


        Console.ReadKey();
    }
}