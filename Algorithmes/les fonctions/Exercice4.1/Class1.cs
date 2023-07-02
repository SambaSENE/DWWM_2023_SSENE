namespace Exercice4._1
{
    internal class Fonctions
    {
        public static bool Browsing(int[] tab, int n)
        {
            bool isExist = false;
            int i = 0;
            while (i <= tab.Length - 1)
            {
                if (tab[i] == n)
                {
                    isExist = true;

                }
                i++;
            }

            return isExist;
        }
        public static void View(bool isExist)
        {

            if (isExist)
            {
                Console.WriteLine("le nombre fait parti du tableau");
            }
            else
            { 
                Console.WriteLine("le nombre ne fait pas parti du tableau");
                
            }
        }
    }
}
