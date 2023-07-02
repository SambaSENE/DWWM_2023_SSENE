using ClassLibraryPoint;

internal class Program
{
    private static void Main(string[] args)
     {
        Point pointA = new Point();
        

        pointA.Permuter();

        Point pointD = new Point(8,6);
        pointA.SymetrieAxeAbscisse();
        pointD.SymetrieAxeOrdonee();  
        pointD.SymetrieOrigine();

        Console.WriteLine(pointD.ToString());   
    }
}