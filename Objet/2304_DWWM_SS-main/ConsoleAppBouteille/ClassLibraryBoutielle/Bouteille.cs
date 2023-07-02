namespace ClassLibraryBoutielle
{
    public class Bouteille
    {

        private string nomBoutielle;
        private bool ouverte;
        private float contenantEnL;
        private float contenuEnL;

        public bool Ouverte { get => ouverte; private set => ouverte = value; }
        public float ContenuEnL { get => contenuEnL; private set => contenuEnL = value; }

        /* public Bouteille()
         {
             nomBoutielle = "Eau";
             ouverte = false;
             contenuEnL = 1.0f;
             contenuEnL = 0f;
         }*/

        public Bouteille()
            :this("Eau", false , 1.5f , 1.3f)
        { }
        
        public Bouteille(string _nomBouteille, bool _ouverte, float _contenantEnL, float _contenuEnL)
        {
            this.nomBoutielle = _nomBouteille;
            this.ouverte = _ouverte;
            this.contenantEnL = _contenantEnL;
            this.contenuEnL = _contenuEnL;
        }
        

     
        public Bouteille(Bouteille copieBouteille)
        :this(copieBouteille.nomBoutielle , copieBouteille.ouverte , copieBouteille.contenantEnL , copieBouteille.contenuEnL)
        {
        }

        public bool Ouvrir()
        {
            if (!this.ouverte)
            {
                this.ouverte = true;
                return true;
            }
            else
            {
                return false;
            }
        }

        public bool Fermer()
        {
            if (this.ouverte)
            {
                this.ouverte = false;
                return false;

            }
            else
            {
                return true;
            }

        }

        public bool Vider()
        {

            if (this.contenuEnL > 0 && this.contenuEnL <= contenantEnL && this.ouverte)
            {
                this.contenuEnL = 0;
                return true;
            }
            else
            {
                return false;

            }



        }

        public bool ViderQuantite(float quantite)
        {


            if (this.ouverte && quantite <= this.contenuEnL && quantite < this.contenantEnL && this.contenuEnL + quantite > 0  )
            {
                this.contenuEnL -= quantite;
                return true;
            }
            else
            {
                return false;

            }



        }
        public bool RemplirTout()
        {

            if (this.ouverte && this.contenuEnL < contenantEnL  )
            {
                this.contenuEnL = this.contenantEnL;
                return true;

            }
            else
            {
                return false;

            }

        }

        public bool RemplirQuantite(float quantite)
        {

            if (this.ouverte && quantite < this.contenuEnL && quantite + this.contenuEnL < this.contenantEnL) 
            {
                this.contenuEnL += quantite;
                return true;
            }
            else
            {
                return false;

            }


        }
        
        public override string ToString()
        {
            return "Nom : " + this.nomBoutielle +
                " \n est-il ouverte? " + (this.ouverte ? " elle est ouverte" : "elle est fermée ")
                + "\n le contenant est = " + this.contenantEnL +
                " \n il contient " + this.contenuEnL;
        }
        
    }
}
