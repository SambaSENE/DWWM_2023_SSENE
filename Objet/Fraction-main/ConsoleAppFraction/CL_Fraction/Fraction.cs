namespace CL_Fraction
{
    public class Fraction
    {
        private int numerateur;
        private int denominateur;

        public Fraction(int _numerateur)
        {
            this.numerateur = _numerateur;
            this.denominateur = 1;
        }

        public Fraction(int _numerateur, int _denominateur)
        {
            this.numerateur = _numerateur;
            this.denominateur = _denominateur;
        }

        public Fraction(Fraction fractionACopie)
            : this(fractionACopie.numerateur, fractionACopie.denominateur)
        {

        }
        /// <summary>
        ///     getPgcd
        /// </summary>
        /// <param name="a"></param>
        /// <param name="b"></param>
        /// <returns>a</returns>
        private int GetPgcd(int a, int b)
        {
            if (a == 0)
            {
                return b;

            }

            while (b != 0)
            {
                if (a > b)
                {
                    a -= b;
                }
                else
                {

                    b -= a;
                }
            }

            return a;
        }

        public Fraction Simplifier(Fraction fraction)
        {
            int pgcd = GetPgcd(fraction.numerateur, fraction.denominateur);
            fraction.numerateur /= pgcd;
            fraction.denominateur /= pgcd;

            return fraction;
        }

        public Fraction Inverse()
        {
            return new Fraction(this.denominateur, this.numerateur);
        }

        public Fraction Oppose()
        {
            return new Fraction(-this.numerateur, this.denominateur);
        }

        public Fraction Plus(Fraction autreFraction)
        {
            int nouveauNumerateur;
            int nouveauDenominateur;

            if (this.denominateur == autreFraction.denominateur)
            {
                nouveauNumerateur = this.numerateur + autreFraction.numerateur;
                nouveauDenominateur = this.denominateur;
            }
            else
            {
                nouveauNumerateur = (this.numerateur * autreFraction.denominateur) + (autreFraction.numerateur * this.denominateur);
                nouveauDenominateur = this.denominateur * autreFraction.denominateur;
            }

            return Simplifier(new Fraction(nouveauNumerateur, nouveauDenominateur));
        }

        public Fraction Soustraire(Fraction autreFraction)
        {
            int nouveauNumerateur;
            int nouveauDenominateur;

            if (this.denominateur == autreFraction.denominateur)
            {
                nouveauNumerateur = this.numerateur - autreFraction.numerateur;
                nouveauDenominateur = this.denominateur;
            }
            else
            {
                nouveauNumerateur = (this.numerateur * autreFraction.denominateur) - (autreFraction.numerateur * this.denominateur);
                nouveauDenominateur = this.denominateur * autreFraction.denominateur;
            }

            return Simplifier(new Fraction(nouveauNumerateur, nouveauDenominateur));
        }

        public Fraction Multiplie(Fraction autreFraction)
        {
            int nouveauNumerateur = this.numerateur * autreFraction.numerateur;
            int nouveauDenominateur = this.denominateur * autreFraction.denominateur;

            return Simplifier(new Fraction(nouveauNumerateur, nouveauDenominateur));
        }

        public Fraction Divise(Fraction autreFraction)
        {
            if (autreFraction.numerateur == 0)
            {
                throw new DivideByZeroException("La fraction donnée pour la division est invalide (numérateur = 0).");
            }

            int nouveauNumerateur = this.numerateur * autreFraction.denominateur;
            int nouveauDenominateur = this.denominateur * autreFraction.numerateur;

            return Simplifier(new Fraction(nouveauNumerateur, nouveauDenominateur));
        }

        public bool SuperieurA(Fraction autreFraction)
        {
            int produitNumerateur1 = this.numerateur * autreFraction.denominateur;
            int produitNumerateur2 = autreFraction.numerateur * this.denominateur;

            return produitNumerateur1 > produitNumerateur2;
        }

        public bool EgalA(Fraction autreFraction)
        {
            int produitNumerateur1 = this.numerateur * autreFraction.denominateur;
            int produitNumerateur2 = autreFraction.numerateur * this.denominateur;

            return produitNumerateur1 == produitNumerateur2;
        }

        public string Display()
        {
            if (this.denominateur == 1)
            {
                return this.numerateur.ToString();
            }
            else
            {
                return this.numerateur + "/" + this.denominateur;
            }
        }

        public void Soustraire(Fraction f1, Fraction f2)
        {
            throw new NotImplementedException();
        }
    }
}
