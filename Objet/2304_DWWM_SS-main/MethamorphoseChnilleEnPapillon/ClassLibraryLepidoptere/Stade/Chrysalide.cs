namespace ClassLibraryLepidoptere.Stade
{
    class Chrysalide : Stade
    {
        public override void seDeplacer()
        {
            Console.WriteLine("Je ne peux pas me deplacer");
        }

        public override Stade SeMethamorphoser()
        {
           
            return this;
        }
    }
}
