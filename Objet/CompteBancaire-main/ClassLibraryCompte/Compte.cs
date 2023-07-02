namespace ClassLibraryCompte
{
    public class Compte
    {
        private string nomTitulaire;
        private int numeroCompte;
        private decimal solde;
        private decimal montantDecouvert;

        public string NomTitulaire { get => nomTitulaire; set => nomTitulaire = value; }
        public int NumeroCompte { get => numeroCompte; set => numeroCompte = value; }
        public decimal Solde { get => solde; set => solde = value; }
        public decimal MontantDecouvert { get => montantDecouvert; set => montantDecouvert = value; }

        public Compte()
        {
            nomTitulaire = " ";
            numeroCompte = 0;
            solde = 0;
            montantDecouvert = 0;
        }
        public Compte(string _nomTitulaire, int _numeroCompte, decimal _solde, decimal _montantDecouvert)
        {
            this.nomTitulaire = _nomTitulaire;
            this.numeroCompte = _numeroCompte;
            this.solde = _solde;
            this.montantDecouvert = _montantDecouvert;
        }

        public Compte(Compte compteACopier)
        {
            nomTitulaire = compteACopier.nomTitulaire;
            numeroCompte = compteACopier.numeroCompte;
            solde = compteACopier.solde;
            montantDecouvert = compteACopier.montantDecouvert;
        }

        public decimal Crediter(decimal montant)
        {
            this.solde += montant;
            return solde;
        }

        public bool Debiter(decimal montant)
        {

            if (solde - montantDecouvert >= montant)
            {
                solde -= montant;
                return true;
            }

            return false;
        }


        public bool Transferer(Compte compteBeneficiaire, decimal montantTransfert)
        {
            if (Debiter(montantTransfert))
            {
                compteBeneficiaire.Crediter(montantTransfert);
                return true;
            }

            return false;
        }
        public override string ToString()
        {
            return "nom du Titulaire " + this.nomTitulaire +
                "\n numero compte " + this.numeroCompte +
                "\n Solde " + this.solde + " €" +
                "\n Decouvert " + this.montantDecouvert;
        }

    }
}
