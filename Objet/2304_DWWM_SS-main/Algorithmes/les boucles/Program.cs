

static void NewMethod()
{
    // Variables

    int a ;
    int b;
    string input;
    bool inputOk;

    int i;

    // Traitement
    Console.WriteLine("Veuillez saisir la valeur A");
    input = Console.ReadLine();
    inputOk = int.TryParse(input, out a);

    Console.WriteLine("Veuillez saisir la valeur B");
    input = Console.ReadLine();
    inputOk = int.TryParse(input, out b);

    if (a <= b)
    {
        for(i = a; i < b; i++)
        {
        
            Console.WriteLine(i );

        }

    }
    else
    {
        Console.WriteLine("Erreur");

    }

}

