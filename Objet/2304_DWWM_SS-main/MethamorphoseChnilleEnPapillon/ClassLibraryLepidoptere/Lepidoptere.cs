
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryLepidoptere.Stade
{
    public class Lepidoptere
    {
        private Stade stadeCourant;

        public Lepidoptere()
        {
            
            stadeCourant = new Oeuf();

        }

        public void SeDeplacer()
        {
            this.stadeCourant.seDeplacer();
        }
       

        public object SeMethamorphoser()
        {
            
            return this.stadeCourant = stadeCourant.SeMethamorphoser();
        }
    }

}
