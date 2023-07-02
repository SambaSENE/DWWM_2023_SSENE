using ClassLibraryBoutielle;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestProjectBouteille
{
    using Microsoft.VisualStudio.TestTools.UnitTesting;

    [TestClass]
    [TestCategory("TestIntegration")]
    public class UnitTestBouteille
    {
        private Bouteille coca = new Bouteille();

        [TestInitialize]
        [TestCategory("TestIntegration")]
        public void TestInitialize()
        {
            coca = new Bouteille();
        }

        [TestMethod]
        [TestCategory("TestIntegration")]
        public void Test_OuvrirBouteille_OuvreAvecSucces()
        {
            // Act
            bool openOk = coca.Ouvrir();

            // Assert
            Assert.IsTrue(openOk, "La bouteille devrait pouvoir être ouverte avec succès.");
            Assert.IsTrue(coca.Ouverte, "La bouteille devrait être ouverte après l'ouverture.");
        }

        [TestMethod]
        [TestCategory("TestIntegration")]
        public void Test_OuvrirBouteille_DejaOuverte_Echec()
        {
            // Arrange
            coca.Ouvrir();

            // Act
            bool openOk = coca.Ouvrir();

            // Assert
            Assert.IsFalse(openOk, "La bouteille ne devrait pas pouvoir être ouverte à nouveau si elle est déjà ouverte.");
            Assert.IsTrue(coca.Ouverte, "La bouteille devrait rester ouverte si une tentative d'ouverture est effectuée alors qu'elle est déjà ouverte.");
        }

        [TestMethod]
        [TestCategory("TestIntegration")]
        public void Test_FermerBouteille_FermeAvecSucces()
        {
            // Arrange
            coca.Ouvrir();

            // Act
            bool closeOk = coca.Fermer();

            // Assert
            Assert.IsTrue(!closeOk, "La bouteille devrait pouvoir être fermée avec succès.");
            Assert.IsFalse(coca.Ouverte == true, "La bouteille devrait être fermée après la fermeture.");
        }

        [TestMethod]
        [TestCategory("TestIntegration")]
        public void Test_FermerBouteille_DejaFermee_Echec()
        {
            // Act
            bool closeOk = coca.Fermer();

            // Assert
            Assert.IsTrue(closeOk, "La bouteille ne devrait pas pouvoir être fermée à nouveau si elle est déjà fermée.");
            Assert.IsTrue(coca.Ouverte == false, "La bouteille devrait rester fermée si une tentative de fermeture est effectuée alors qu'elle est déjà fermée.");
        }

      }

    }