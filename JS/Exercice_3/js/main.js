
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


function calculerSigne(moisNaissance) {
    const signes = ["Capricorne","Verseau","Poisson","Bélier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire"];
    //return signes[moisNaissance]; // A voir pourquoi cette erreur
}


function formOK() {
    const nom = document.querySelector("#nomUtilisateur").value;
    const prenom = document.querySelector("#prenomUtilisateur").value;
    const jour = document.querySelector("#jour").value;
    const mois = document.querySelector("#mois").value;
    const annee = document.querySelector("#annee").value;
    
    if (nom !== "" && prenom !== "" && jour !== "" && mois !== "" && annee !== "") {
        return true;
    }
    return false;
}


function calculerPseudo() {
    const nom = document.querySelector("#nomUtilisateur").value;
    const prenom = document.querySelector("#prenomUtilisateur").value;
    const mois = document.querySelector("#mois").value;
    
    const valeurNom = valNum(nom);
    const valeurPrenom = valNum(prenom);
    
    const signe = calculerSigne(mois);
    
    const pseudo = signe + (valeurNom + valeurPrenom);
    
    document.querySelector("#pseudo").value = pseudo;
    
  
    document.querySelector("#validerButton").disabled = false;
}


document.querySelector("#validerButton").addEventListener("click", function() {
    if (formOK()) {
        const nom = document.querySelector("#nomUtilisateur").value;
        const prenom = document.querySelector("#prenomUtilisateur").value;
        const jour = document.querySelector("#jour").value;
        const mois = document.querySelector("#mois").value;
        const annee = document.querySelector("#annee").value;
        
        const pseudo = document.querySelector("pseudo").value;
        
       
        document.cookie = `nom=${nom};`;
        document.cookie = `prenom=${prenom};`;
        document.cookie = `jour=${jour};`;
        document.cookie = `mois=${mois};`;
        document.cookie = `annee=${annee};`;
        document.cookie = `pseudo=${pseudo};`;
        
        
        window.location.href = "Accueil.html";
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});

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


window.onload = function() {
    const nom = getCookie("nom");
    const prenom = getCookie("prenom");
    const jour = getCookie("jour");
    const mois = getCookie("mois");
    const annee = getCookie("annee");
    const pseudo = getCookie("pseudo");
    
    document.querySelector("#nom").textContent = nom;
    document.querySelector("#prenom").textContent = prenom;
    document.querySelector("#dateNaissance").textContent = `${jour}/${mois}/${annee}`;
    document.querySelector("#pseudo").textContent = pseudo;
    
   
    //const dateAnniversaire = new Date(annee, mois - 1, jour);
    const dateCourante = new Date();
    dateAnniversaire.setFullYear(dateCourante.getFullYear());
    
    let joursRestants = 0;
    if (dateAnniversaire > dateCourante) {
        const diff = dateAnniversaire - dateCourante;
        joursRestants = Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    
    document.querySelector("#joursRestants").textContent = joursRestants;
};

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
/**
 * 
 */
window.onload = function() {
    const nom = getCookie("nom");
    const prenom = getCookie("prenom");
    const jour = getCookie("jour");
    const mois = getCookie("mois");
    const annee = getCookie("annee");
    const pseudo = getCookie("pseudo");
    
    document.querySelector("#nom").textContent = nom;
    document.querySelector("#prenom").textContent = prenom;
    document.querySelector("#dateNaissance").textContent = `${jour}/${mois}/${annee}`;
    document.querySelector("#pseudo").textContent = pseudo;
    
    
    const dateAnniversaire = new Date(annee, mois, jour);
    const dateCourante = new Date();
    dateAnniversaire.setFullYear(dateCourante.getFullYear());
    
    let joursRestants = 0;
    if (dateAnniversaire > dateCourante) {
        const diff = dateAnniversaire - dateCourante;
       // joursRestants = Math.ceil(diff / (1000 * 60 * 60 * 24));
    }
    
    document.querySelector("joursRestants").textContent = joursRestants;
};
