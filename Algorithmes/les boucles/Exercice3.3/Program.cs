internal class Program
{
    private static void Main(string[] args)
    {
        int a;
        int b;
        string? input;
        bool inputOK;
        int i;
        int output = 0;
        // Traitement 

        Console.WriteLine("Veuillez saisir la valeur de A");
        input = Console.ReadLine();
        inputOK = int.TryParse(input, out a);

        Console.WriteLine("Veuillez saisir la valeur de B");
        input = Console.ReadLine();
        inputOK = int.TryParse(input, out b);

       
        
            if (a < b)
            {
                for (i = a + 1; i < b; i++)
                {
                     
                    Console.WriteLine(i++);
            }
            }
            else
            {
                for (i = b - 1; i > b; i--)
                {
                    Console.WriteLine(i--);
                   
                }
            }
        
       
    }
}