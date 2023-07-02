namespace inversion_variable;
class Program
{
    static void Main(string[] args)
    {

        int a;
        int b;
        int c;

        Console.WriteLine("Programme inversion de variable");

        a = 8;
        Console.WriteLine("La valeur de A = " + a);
        b = 19;
        Console.WriteLine("La valeur de B = " + b);

        c = a;
        a = b;
        b = c;
        Console.WriteLine("La valeur de A = " + " et "+ a + " La valeur est B = " + b);


        Console.WriteLine("Fin de programme");
    }
}

