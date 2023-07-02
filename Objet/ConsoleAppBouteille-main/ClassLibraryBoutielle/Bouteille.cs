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

        public Bouteille()
        {
            nomBoutielle = "Eau";
            ouverte = false;
            ContenuEnL = 1.0f;
            ContenuEnL = 0.90f;
        }
        public Bouteille(string _nomBouteille, bool _ouverte, float _contenantEnL, float _contenuEnL)
        {
            this.nomBoutielle = _nomBouteille;
            this.ouverte = _ouverte;
            this.contenantEnL = _contenantEnL;
            this.ContenuEnL = _contenuEnL;
        }

        public Bouteille(Bouteille copieBouteille)
        {
            this.nomBoutielle = copieBouteille.nomBoutielle;
            this.ouverte = copieBouteille.ouverte;
            this.contenantEnL = copieBouteille.contenantEnL;
            this.ContenuEnL = copieBouteille.ContenuEnL;
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
            if (this.ouverte)
            {
                if (this.ContenuEnL > 0 && this.ContenuEnL <= contenantEnL)
                {
                    this.ContenuEnL = 0;
                    return true;
                }
                else
                {

                    return false;
                }
            }
            else
            {
                return false;
            }
        }

        public bool ViderQuantite(float quantite)
        {
            if (this.ouverte)
            {
                if (this.ContenuEnL + quantite < this.contenantEnL)
                {
                    this.ContenuEnL = this.ContenuEnL -= quantite;
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {

                return false;
            }
        }
        public bool RemplirTout()
        {
            if (this.ouverte)
            {
                if (this.ContenuEnL < contenantEnL)
                {
                    this.ContenuEnL += this.contenantEnL;
                    return true;

                }
                else 
                {
                    return false;
                }
            }
            else 
            {
                return false;
            }
        }

        public bool RemplirQuantite( float quantite)
        {
            if (this.ouverte)
            {
                if (this.ContenuEnL > contenantEnL)
                {
                    this.ContenuEnL += quantite;
                    return true;
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        
    }
}
