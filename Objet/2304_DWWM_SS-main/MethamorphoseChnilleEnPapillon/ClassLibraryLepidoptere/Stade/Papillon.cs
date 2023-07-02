using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryLepidoptere.Stade
{
    class Papillon : Stade
    {
        public override void seDeplacer()
        {
            Console.WriteLine("Je prends mon envole");
        }

        public override Stade SeMethamorphoser()
        {
            
            return this;
        }
    }
}
