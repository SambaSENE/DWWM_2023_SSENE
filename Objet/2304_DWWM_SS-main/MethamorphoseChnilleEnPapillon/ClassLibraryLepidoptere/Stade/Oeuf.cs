using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryLepidoptere.Stade
{
    internal class Oeuf : Stade
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
