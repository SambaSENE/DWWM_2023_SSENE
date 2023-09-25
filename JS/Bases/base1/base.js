// Sélectionner un élément par son ID
let monParagraphe = document.getElementById("monParagraphe");

// Modifier le contenu de l'élément
monParagraphe.innerHTML = "Nouveau contenu HTML";
monParagraphe.style.color = "blue";

// Sélectionner plusieurs éléments par leur classe
let elementsParClasse2 = document.getElementsByClassName("maClasse");

// Modifier le texte brut des éléments
for (let i = 0; i < elementsParClasse.length; i++) {
  elementsParClasse[i].textContent = "Nouveau texte brut";
}

// Ajouter un gestionnaire d'événements à un bouton
let monBouton2 = document.getElementById("monBouton");
monBouton.addEventListener("click", function () {
  alert("Le bouton a été cliqué !");
});

// Accéder à la valeur d'un champ de formulaire
let monInputTexte = document.getElementById("monInputTexte");
monInputTexte.value = "Nouvelle valeur";

// Créer un nouvel élément et l'ajouter au DOM
let nouvelElement = document.createElement("div");
nouvelElement.textContent = "Contenu du nouvel élément";
document.body.appendChild(nouvelElement);

// Supprimer un élément existant du DOM
let elementASupprimer = document.getElementById("elementASupprimer");
elementASupprimer.parentNode.removeChild(elementASupprimer);

// Sélectionner un élément par son ID
let monParagraphe = document.getElementById("monParagraphe");

// Modifier le contenu de l'élément
monParagraphe.innerHTML = "Nouveau contenu HTML";
monParagraphe.style.color = "blue";

// Sélectionner plusieurs éléments par leur classe
let elementsParClasse = document.getElementsByClassName("maClasse");

// Modifier le texte brut des éléments
for (let i = 0; i < elementsParClasse.length; i++) {
  elementsParClasse[i].textContent = "Nouveau texte brut";
}

// Ajouter un gestionnaire d'événements à un bouton
let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", function () {
  alert("Le bouton a été cliqué !");
});

// Accéder à la valeur d'un champ de formulaire
let monInputTexte = document.getElementById("monInputTexte");
monInputTexte.value = "Nouvelle valeur";

// Créer un nouvel élément et l'ajouter au DOM
let nouvelElement = document.createElement("div");
nouvelElement.textContent = "Contenu du nouvel élément";
document.body.appendChild(nouvelElement);

// Supprimer un élément existant du DOM
let elementASupprimer2 = document.getElementById("elementASupprimer");
elementASupprimer.parentNode.removeChild(elementASupprimer);

// Sélectionner un élément parent et accéder à ses enfants
let enfant = monParagraphe.firstChild; // Premier enfant du paragraphe
let parent = enfant.parentNode; // Le paragraphe est le parent de l'enfant

// Sélectionner des éléments frères
let frereSuivant = monParagraphe.nextSibling;
let frerePrecedent = monParagraphe.previousSibling;

// Exemple d'ajout d'un nouvel élément frère après monParagraphe
let nouveauFrere = document.createElement("p");
nouveauFrere.textContent = "Nouveau paragraphe frère";
monParagraphe.parentNode.insertBefore(nouveauFrere, frereSuivant);
