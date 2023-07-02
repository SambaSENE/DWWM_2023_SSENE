namespace Exercice_5._3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variables :

            double celsius;
            double fahrenheit;
            int valueMin;
            int valueMax;

            string? input;
            string? unite;

            bool inputOKMin;
            bool inputOKMax;

            bool conversion;
            List<double> temperatures = new List<double>();
            // Traitement :

            inputOKMin = false;
            inputOKMax = false;
            conversion = true;

            do
            {


                Console.WriteLine("Veuillez saisir une valeur min (nombre entier)");
                input = Console.ReadLine();
                inputOKMin = int.TryParse(input, out valueMin);

                Console.WriteLine("Veuillez saisir une valeur max (nombre entier)");
                input = Console.ReadLine();
                inputOKMax = int.TryParse(input, out valueMax);

                Console.WriteLine("quelles températures souhaiteriez vous convertir? ");
                Console.WriteLine(" C pour Celsius ou F pour Fahrenheit.");
                unite = (Console.ReadLine()).ToUpper();



                if (unite == "C" && unite == "c")
                {

                    for (int i = valueMin; i <= valueMax; i++)
                    {
                        celsius = (i - 32) * (double)5 / 9;
                        temperatures.Add(celsius);

                    }
                    //  conversion = true;

                }
                else if (unite == "F" && unite == "f")
                {
                    for (int i = valueMin; i < valueMax; i++)
                    {

                        fahrenheit = (i * 9 / (double)5) + 32;
                        temperatures.Add(fahrenheit);
                    }

                    // conversion = false;
                }

                foreach (double item in temperatures)
                {
                    Console.Write(item + unite + " , ");
                }
            } while (valueMin < -459.57 && valueMin > 5000000 && valueMax > -459 && valueMax > 5000000 && valueMin < valueMax && inputOKMin && inputOKMax);


        }
    }
}