
function valNum(maChaine) {
    maChaine = maChaine.toUpperCase();
    let valeur = 0;
    for (let i = 0; i < maChaine.length; i++) {
        const charCode = maChaine.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            valeur += charCode - 64;
        }
    }
    return valeur;
}

// Exercice n° 3 : calculerSigne
function calculerSigne(moisNaissance) {
    const signes = ["Capricorne","Verseau","Poisson","Bélier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire"];
    return signes[moisNaissance - 1];
}

// Exercice n° 4 : Fonction formOK
function formOK() {
    const nom = document.getElementById("nomUtilisateur").value;
    const prenom = document.getElementById("prenomUtilisateur").value;
    const jour = document.getElementById("jour").value;
    const mois = document.getElementById("mois").value;
    const annee = document.getElementById("annee").value;
    
    if (nom !== "" && prenom !== "" && jour !== "" && mois !== "" && annee !== "") {
        return true;
    }
    return false;
}

// Exercice n° 5 : Fonction calculerPseudo
function calculerPseudo() {
    const nom = document.getElementById("nomUtilisateur").value;
    const prenom = document.getElementById("prenomUtilisateur").value;
    const mois = document.getElementById("mois").value;
    
    const valeurNom = valNum(nom);
    const valeurPrenom = valNum(prenom);
    
    const signe = calculerSigne(mois);
    
    const pseudo = signe + (valeurNom + valeurPrenom);
    
    document.getElementById("pseudo").value = pseudo;
    
    // Activer le bouton Valider
    document.getElementById("validerButton").disabled = false;
}

// EFonction valider
document.getElementById("validerButton").addEventListener("click", function() {
    if (formOK()) {
        const nom = document.getElementById("nomUtilisateur").value;
        const prenom = document.getElementById("prenomUtilisateur").value;
        const jour = document.getElementById("jour").value;
        const mois = document.getElementById("mois").value;
        const annee = document.getElementById("annee").value;
        
        const pseudo = document.getElementById("pseudo").value;
        
        // Stocker les informations dans un cookie (nom, prénom, date de naissance, pseudo)
        document.cookie = `nom=${nom};`;
        document.cookie = `prenom=${prenom};`;
        document.cookie = `jour=${jour};`;
        document.cookie = `mois=${mois};`;
        document.cookie = `annee=${annee};`;
        document.cookie = `pseudo=${pseudo};`;
        
        // Rediriger vers la page Accueil.html
        window.location.href = "Accueil.html";
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});
// Exercice n° 8 : Fonction getCookie
function getCookie(variable) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === variable) {
            return cookie[1];
        }
    }
    return null;
}

// Exercice n° 9 : Fonction ecrireAccueil
window.onload = function() {
    const nom = getCookie("nom");
    const prenom = getCookie("prenom");
    const jour = getCookie("jour");
    const mois = getCookie("mois");
    const annee = getCookie("annee");
    const pseudo = getCookie("pseudo");
    
    document.getElementById("nom").textContent = nom;
    document.getElementById("prenom").textContent = prenom;
    document.getElementById("dateNaissance").textContent = `${jour}/${mois}/${annee}`;
    document.getElementById("pseudo").textContent = pseudo;
    
    // Calculer le nombre de jours restants jusqu'à l'anniversaire et l'afficher
    const dateAnniversaire = new Date(annee, mois - 1, jour);
    const dateCourante = new Date();
    dateAnniversaire.setFullYear(dateCourante.getFullYear());
    
    let joursRestants = 0;
    if (dateAnniversaire > dateCourante) {
        const diff = dateAnniversaire - dateCourante;
        joursRestants = Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    
    document.getElementById("joursRestants").textContent = joursRestants;
};
// Exercice n° 8 : Fonction getCookie
function getCookie(variable) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === variable) {
            return cookie[1];
        }
    }
    return null;
}

// Exercice n° 9 : Fonction ecrireAccueil
window.onload = function() {
    const nom = getCookie("nom");
    const prenom = getCookie("prenom");
    const jour = getCookie("jour");
    const mois = getCookie("mois");
    const annee = getCookie("annee");
    const pseudo = getCookie("pseudo");
    
    document.getElementById("nom").textContent = nom;
    document.getElementById("prenom").textContent = prenom;
    document.getElementById("dateNaissance").textContent = `${jour}/${mois}/${annee}`;
    document.getElementById("pseudo").textContent = pseudo;
    
    // Calculer le nombre de jours restants jusqu'à l'anniversaire et l'afficher
    const dateAnniversaire = new Date(annee, mois - 1, jour);
    const dateCourante = new Date();
    dateAnniversaire.setFullYear(dateCourante.getFullYear());
    
    let joursRestants = 0;
    if (dateAnniversaire > dateCourante) {
        const diff = dateAnniversaire - dateCourante;
        joursRestants = Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    
    document.getElementById("joursRestants").textContent = joursRestants;
};
