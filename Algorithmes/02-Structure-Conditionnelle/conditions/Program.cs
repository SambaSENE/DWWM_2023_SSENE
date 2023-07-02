namespace conditions
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Variable 
                int a;
                int b;
                Boolean plusPetit;

            // Traitement 
                plusPetit = true;
                a = 1;
                b = -10;

            if (b > a)
            {
                plusPetit = false;
            }
            else { 
                plusPetit = true;
            }

            // Affichage
            if (plusPetit == false)
            {
                Console.WriteLine("La valeur de B = " + b + " est plus grand que la valeur du A = " + a);
            }
            else if (a == b)
            {
                Console.WriteLine("Les valeurs A et B sont égaux");
            }
            else {
                Console.WriteLine("La valeur de B = " + b + " est plus petit que la valeur du A = " + a);
            }
        }
    }
}