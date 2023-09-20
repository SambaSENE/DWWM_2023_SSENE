// Variables
var x = 5;
let y = 10;
const z = 15;

// Fonction d'addition
function additionner(x, y) {
  return x + y;
}

// Manipulation du DOM
document.getElementById("monBouton").addEventListener("click", function() {
  alert("Bouton cliqué !");
});

// Types de données
let nombre = 42;
let texte = "Bonjour, monde !";
let estVrai = true;
let tableau = [1, 2, 3];
let objet = { nom: "John", age: 30 };

// Opérations arithmétiques
let a = 5;
let b = 3;
let somme = a + b;
let produit = a * b;
let difference = a - b;
let quotient = a / b;

// Boucles
for (let i = 0; i < 5; i++) {
  console.log("Itération " + i);
}

let nombres = [1, 2, 3, 4, 5];
for (let nombre of nombres) {
  console.log(nombre);
}

// Génération de balises HTML dynamiquement
let fruits = ["Pomme", "Banane", "Orange"];

let listeHTML = document.getElementById("maListe");

for (let fruit of fruits) {
  let elementLi = document.createElement("li");
  elementLi.textContent = fruit;
  listeHTML.appendChild(elementLi);
}

// Opérations de tableau
fruits.push("Fraise"); // Ajouter un élément à la fin
fruits.pop(); // Retirer le dernier élément
let longueurFruits = fruits.length; // Longueur du tableau

// Objets
let personne = {
  nom: "John",
  age: 30,
  adresse: {
    rue: "123 Rue Principale",
    ville: "Villeville"
  }
};

// Fonctions fléchées
const ajouter = (a, b) => a + b;

// Promesses
function attendre(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

attendre(2000).then(() => console.log("Attendu pendant 2 secondes."));

// Gestion d'Erreurs
try {
  // Code susceptible de générer une erreur
} catch (erreur) {
  console.error(erreur.message);
}

// JSON
let donnees = '{"nom": "Alice", "age": 25}';
let objetDonnees = JSON.parse(donnees);

// Génération dynamique de formulaire
function genererFormulaire() {
  let formulaire = document.createElement("form");

  let champNom = document.createElement("input");
  champNom.setAttribute("type", "text");
  champNom.setAttribute("placeholder", "Nom");
  champNom.setAttribute("name", "nom");

  let champEmail = document.createElement("input");
  champEmail.setAttribute("type", "email");
  champEmail.setAttribute("placeholder", "Email");
  champEmail.setAttribute("name", "email");

  let boutonSoumettre = document.createElement("input");
  boutonSoumettre.setAttribute("type", "submit");
  boutonSoumettre.setAttribute("value", "Soumettre");

  formulaire.appendChild(champNom);
  formulaire.appendChild(champEmail);
  formulaire.appendChild(boutonSoumettre);

  let conteneur = document.getElementById("conteneurFormulaire");
  conteneur.appendChild(formulaire);
}

genererFormulaire();

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let nom = document.querySelector("input[name='nom']").value;
  let email = document.querySelector("input[name='email']").value;

  alert("Nom: " + nom + "\nEmail: " + email);
});

// ...

// Fonction pour calculer la factorielle d'un nombre
function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorielle(n - 1);
    }
  }
  
  let resultatFactorielle = factorielle(5); // Résultat : 120
  
  // Fonction pour vérifier si un nombre est pair
  function estPair(nombre) {
    return nombre % 2 === 0;
  }
  
  let estPairSix = estPair(6); // Résultat : true
  
  // Fonction pour générer un nombre aléatoire entre min et max
  function nombreAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let nombreAlea = nombreAleatoire(1, 100);
  
  // Fonction pour inverser une chaîne de caractères
  function inverserChaine(chaine) {
    return chaine.split("").reverse().join("");
  }
  
  let chaineInversee = inverserChaine("JavaScript");
  
  // Fonction pour afficher un message avec un style
  function afficherMessage(message, couleur) {
    let element = document.createElement("p");
    element.textContent = message;
    element.style.color = couleur;
    document.body.appendChild(element);
  }
  
  afficherMessage("Erreur !", "red");
// Récupérez l'élément div
let monDiv = document.getElementById("monDiv");

// Générez des styles CSS dynamiquement
monDiv.style.width = "200px";
monDiv.style.height = "100px";
monDiv.style.backgroundColor = "blue";
monDiv.style.color = "white";
monDiv.style.fontFamily = "Arial, sans-serif";

// Vous pouvez également ajouter des événements pour modifier les styles au fil du temps
monDiv.addEventListener("mouseover", function() {
  monDiv.style.backgroundColor = "red";
});

monDiv.addEventListener("mouseout", function() {
  monDiv.style.backgroundColor = "blue";
});

// Récupérez une référence à l'élément formulaire par son ID
let formulaire = document.getElementById("monFormulaire");

// Ajoutez un gestionnaire d'événements au moment de la soumission du formulaire
formulaire.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre normalement (rechargement de la page)

  // Récupérez les données du formulaire
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;

  // Affichez les données dans une boîte de dialogue
  alert("Nom: " + nom + "\nEmail: " + email);
});
