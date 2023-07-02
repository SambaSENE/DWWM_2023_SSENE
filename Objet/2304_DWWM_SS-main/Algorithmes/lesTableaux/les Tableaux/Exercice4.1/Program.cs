namespace Exercice4._1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Varaibles : 
            int[] array = new int[] { 8, 16, 64, 128, 256, 512 };
            int nb;
            string? input;
            bool inputOk;
            bool isExist = false;


            // Traitement

            Console.WriteLine("Veuillez saisir un nombre");
            input = Console.ReadLine();
            inputOk = int.TryParse(input , out nb);


            if (inputOk)
            {
                int i = 0;
                while(i < array.Length && !isExist)
                {
                    if(array[i] == nb)
                    {
                        isExist = true;
                    }
                    i++;
                }
                if (isExist)
                {
                    Console.WriteLine("le numero existe dans " + array + " le tableau");
                }
                else
                {
                    Console.WriteLine("le numero n'existe pas");

                }

            }
            else
            {
                Console.WriteLine("Veuillez saisir un caratere correcte");
            }

            Console.WriteLine("Fin programme");


            /*

            // indexOf()

            Console.WriteLine("Veuillez saisir le nombre à chercher");
            input = Console.ReadLine();
            inputOk = int.TryParse(input, out nb);

            int index = Array.IndexOf(array, nb);

            if (index > -1)
            {
                Console.WriteLine("Le nombre " + nb + " est présent dans le tableau a l'index " + index);

            }
            else
            {
                Console.WriteLine("Non trouvé");
            
           
            */




        }
    }
}