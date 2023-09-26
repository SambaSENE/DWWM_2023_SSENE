function valNum(maChaine) {
    //maChaine = maChaine.toUpperCase();
    let somme = 0;
    for (let i = 0; i < maChaine.length; i++) {
        const charCode = maChaine.charCodeAt();

        if (charCode >= 65 && charCode <= 90) {
            somme += charCode - 64;
        }


    }
    return somme;
}

// function calculerSigne(moisNaissance) {
//     let signeAstro = ["Capricorne", "Verseau", "Poisson", "Belier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"]
//     moisNaissance = document.getElementById(moisNaissance);
//     let date = new Date();
//     moisNaissance = date.getMonth();
//     for (let i = 0; i < signeAstro.length; i++) {
//         if (signeAstro[i] == moisNaissance.value) {
//             return signeAstro[moisNaissance];
//         }
//     }


// }
function calculerSigne(moisNaissance) {
    const signes = ["Capricorne","Verseau","Poisson","Bélier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire"];
    return signes[moisNaissance -1]; // A voir pourquoi cette erreur
}

let mois = document.querySelector("#mois");
mois.addEventListener('click', () => {
    calculerSigne(mois.value);

});
// Fonction pour créer dynamiquement les options du jour en fonction du mois et de l'année
function creerOptionsJour() {
    const mois = parseInt(document.getElementById("mois").value);
    const annee = parseInt(document.getElementById("annee").value);
    const jourSelect = document.getElementById("jour");
    
    // Supprimer toutes les options actuelles
    jourSelect.innerHTML = '<option value="">Sélectionnez le jour</option>';
    
    // Déterminer le nombre de jours dans le mois et l'année sélectionnés
    const joursDansMois = new Date(annee, mois, 0).getDate();
    
    // Ajouter les options pour les jours
    for (let i = 1; i <= joursDansMois; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        jourSelect.appendChild(option);
    }
}

// Écouteurs d'événements
document.getElementById("mois").addEventListener('change', creerOptionsJour);
document.getElementById("annee").addEventListener('change', creerOptionsJour);
