namespace jeuxDuPendu
{


    internal class JeuxDuPendu
    {

<<<<<<< Updated upstream
        public static string SearchWord()
        {
            List<string> SecretWord = new List<string>();
            string word;
            bool inputOk = true;
            do
            {
                Console.WriteLine("Veuillez ecrire le mot rechercher");
                word = Console.ReadLine();
                Console.Clear();
                int i = 0;
                while (i < word.Length)
                {
                    if (word[i] >= 5)
                    {
                        SecretWord.Add(word);
                            
                    }
                    i++;
                }

            } while (!inputOk);

            return SecretWord.ToString();
        }
                    
                
        public static string HiddenWord(string word)
        {
            for (int i = 1; i < SecretWord.Count(); i++)
            {
=======

        public static string SearchWord()
        {
            string motSecret = "";
            string motSaisi;
            bool inputOk = false;
            while (!inputOk)
            {
                Console.WriteLine("Entrer le mot à chercher");
                motSaisi =  Console.ReadLine();

                if (motSaisi.Length <= 5)
                {
                    inputOk = true;
                }


            }

            //motSecret = jeuxDuPendu.HiddenWord(motSecret);
            return motSecret;
        }
        
        public static string HiddenWord(string motSecret)
        {
            motSecret = SearchWord();
            char[] motSecretChar = motSecret.ToCharArray();
            char premierCaractere = motSecretChar[0];
            char dernierCaractere = motSecretChar[motSecretChar.Length - 1];
            return premierCaractere.ToString() + dernierCaractere.ToString();
        }

        public static void TourDeJeu()
        {
            int booneRep = 0;
            int essai = 0;
            bool correct = false;
         
            string motSecret = jeuxDuPendu.SearchWord();
            string? lettreEssai;

            while (essai < 6 && booneRep != motSecret.Count())
            {
                Console.WriteLine("Entrer l'essai " + (essai + 1) + ":");
                lettreEssai = Console.ReadLine();

                char[] lettreEssaiChar = lettreEssai.ToCharArray();
              
                char[] motSecretChar = motSecret.ToCharArray();

                for (int e = 0; e < motSecret.Length; e++)
                {
                    for (int j = 0; j < lettreEssaiChar.Length; j++)
                    {
                        if (lettreEssaiChar[j] == motSecret[e])
                        {
                            motSecretChar[e] = lettreEssaiChar[j];
                            booneRep++;
                            correct = true;
                        }
                    }
                }
                if (!correct)
                {
                    essai++;
                }
>>>>>>> Stashed changes

            }
            return word;
        }
<<<<<<< Updated upstream
         
=======
        
>>>>>>> Stashed changes
    }
}
