using ClassLibraryCompte;
using System.Runtime.CompilerServices;

namespace CompteConsole;


    internal class Program
    {
        static void Main(string[] args)
        {
           
           Compte compte1 = new Compte("said", 123456, 1000, 500);
            
          

           compte1.Debiter(500);
            


            
           

            
          
        }
    }
