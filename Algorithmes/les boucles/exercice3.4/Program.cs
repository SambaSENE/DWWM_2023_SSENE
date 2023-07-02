namespace exercice3._4
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n;
            int i;
            string? input;
            bool inputOk;

            // Traitement
            Console.WriteLine("Veuillez saisir un nombre");
            input = Console.ReadLine();
            inputOk = int.TryParse(input, out n);

            for (i = 2; i < n; i+=2) 
            {
                if ( n % i == n ||n % i == 1)
                {
                    Console.WriteLine(i);
                }
                else 
                {
                    Console.WriteLine(" N'est pas un nombre premier" );
                }
                
            }
            Console.Write("${Environment.NewLine} Press key to exit");
            Console.ReadKey(true);


        }
    }
}