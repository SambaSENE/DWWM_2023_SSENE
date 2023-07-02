using ClassLibraryLepidoptere.Stade;


namespace Methamorphose
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Lepidoptere monLepidoptere = new Lepidoptere();

            monLepidoptere.SeDeplacer();
            monLepidoptere.SeMethamorphoser();
            monLepidoptere.SeDeplacer();
            monLepidoptere.SeMethamorphoser();
            monLepidoptere.SeDeplacer();
            monLepidoptere.SeMethamorphoser();


        }
    }
}