using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryLepidoptere.Stade
{
    class Chenille : Stade
    {
        public override void seDeplacer()
        {
            Console.WriteLine("je peux me deplacer");
        }

        public override Stade SeMethamorphoser()
        {
            
            return this;
        }
    }
}
