// genere les options dans inscriptionAsto.html
function genererJoursDuMois() {
    // Obtenir une référence à l'élément select
    let select = document.querySelector('#jour');

    // Créer une date pour le mois actuel
    let date = new Date();

    // Obtenir le nombre de jours dans le mois
    let dernierJour = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Boucle pour ajouter les options pour les jours du mois
    for (let i = 1; i <= dernierJour; i++) {
        let option = document.createElement('option');
        option.text = i;
        select.appendChild(option);
        //·select.add(option);
        //document.querySelector('#jour').option[i]=option;

    }
}

genererJoursDuMois();

function genererMois() {
    let selectMois = document.querySelector('#mois');
    selectMois.innerHTML = '';

    let option = document.createElement('option');
    option.value = 0;
    option.text = 'Mois';
    selectMois.appendChild(option);

    for (let i = 1; i <= 12; i++) {
        option = document.createElement('option');
        option.value = i;
        option.text = i;


        //if (i === 2) {
        //  option.selected = true;

        //}

        selectMois.appendChild(option);
    }
}

genererMois();

function genererAnnees() {
    // Obtenir une référence à l'élément select
    var select = document.getElementById("annee");

    // Année de début et de fin
    var anneeDebut = 1900;
    var anneeFin = 2023;

    // Boucle pour ajouter les options pour les années
    for (var annee = anneeDebut; annee <= anneeFin; annee++) {
        var option = document.createElement("option");
        option.text = annee;
        select.add(option);
    }
}
genererAnnees();

function valNum(_champ) {
    let chaine = (document.querySelector('#' + _champ).value).toUpperCase();

    let somme = 0;
    for (let i = 0; i < chaine.length; i++) {
        let charCode = chaine.charCodeAt(i);
        somme += charCode - 64;
    }
    return somme;
}

function calculerSigne(_moisNaissance) {
    let signe = ["Capricorne", "Verseau", "Poisson", "Bélier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];
    return signe[_moisNaissance - 1];
}

function recupMois(_mois) {
    let moisNaissance = document.querySelector('#' + _mois).value;
    return moisNaissance;
}

function verifierFormulaire() {
    let nomUtilisateur = document.querySelector('#nomUtilisateur').value;
    let prenomUtilisateur = document.querySelector('#prenomUtilisateur').value;
    let moisNaissance = document.querySelector('#mois').value;
    let jour = document.querySelector('#jour').value;

    // Vérifiez les conditions pour activer/désactiver le bouton
    if (nomUtilisateur !== '' && prenomUtilisateur !== '' && moisNaissance !== '' && jour !== '') {
        document.querySelector('#valider').disabled = false; // Activez le bouton
    } else {
        document.querySelector('#valider').disabled = true; // Désactivez le bouton
    }
}

document.querySelector('#valider').addEventListener('click', verifierFormulaire);


document.querySelector('#nomUtilisateur').addEventListener('blur', () => {
    console.log(valNum('nomUtilisateur'));
});

document.querySelector('#prenomUtilisateur').addEventListener('blur', () => {
    console.log(valNum('prenomUtilisateur'));
});

document.querySelector('#mois').addEventListener('blur', () => {
    console.log(calculerSigne(recupMois('mois')));
});

function calculerPseudo() {
    let nom = document.querySelector('#nomUtilisateur').value;
    let prenom = document.querySelector('#prenomUtilisateur').value;
    let mois = document.querySelector('#mois').value;

    if (nom !== '' && prenom !== '' && mois !== '') {
        let signe = calculerSigne(mois);
        nom = valNum('nomUtilisateur');
        prenom = valNum('prenomUtilisateur');


        let pseudo = signe + prenom + (nom + prenom);


        //let compNom = document.querySelector('#nomUtilisateur').value;
        //let compPrenom =  document.querySelector('#prenomUtilisteur').value;
        // let composPseudo = 

        document.querySelector('#pseudo').value = pseudo;


        //console.log(pseudo)
    }

}


document.querySelector('#prenomUtilisateur').addEventListener('blur', () => {
    calculerPseudo();
}); document.querySelector('#nomUtilisateur').addEventListener('blur', () => {
    calculerPseudo();
});
document.querySelector('#mois').addEventListener('change', () => {
    calculerPseudo();
});
function nbJrsRestants(_jour, _mois, _annee) {
    let dateActu = new Date();
    let annviDate = new Date(dateActu.getUTCFullYear, _mois, _jour);

    let diffTemps = annviDate - dateActu;

    if (diffTemps < 0) {
        annviDate = new Date(dateActu.getFullYear() + 1, _mois - 1, _jour);
        diffTemps = annviDate - dateActu;
    }
    let joursRestants = Math.ceil(diffTemps / (1000 * 60 * 60 * 24));
    return joursRestants;

}
function newCookie(_nom, _value) {
    let dateJour = new Date();
    let dateExpire = new Date(Date.now() + 86400000); // en ms 86400000 =>24h
    dateExpire = dateExpire.toUTCString();


    document.cookie = _nom + '=' + _value + '; expires = ' + dateExpire + '; SameSite = lax';
}
document.querySelector('#annee').addEventListener('change', () => {
    nbJrsRestants(annee);
})
document.querySelector('#mois').addEventListener('change', () => {
    nbJrsRestants(mois);
})
document.querySelector('#jour').addEventListener('change', () => {
    nbJrsRestants(jour);
})


document.querySelector('#valider').addEventListener('click', () => {
    newCookie('nom', document.querySelector('#nomUtilisateur').value);
    newCookie('prenom', document.querySelector('#prenomUtilisateur').value);
    window.location.href = 'accueil.html';
});

function afficherCookies() {
    var cookies = document.cookie.split(';'); // Obtenir tous les cookies et les séparer
    var tableBody = document.getElementById('cookieTable');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim(); // Supprimer les espaces autour du cookie
        var cookieParts = cookie.split('=');
        var nom = cookieParts[0];
        var valeur = cookieParts[1];

        var newRow = document.createElement('tr');
        var nomCell = document.createElement('td');
        var valeurCell = document.createElement('td');

        nomCell.textContent = nom;
        valeurCell.textContent = valeur;

        newRow.appendChild(nomCell);
        newRow.appendChild(valeurCell);

        tableBody.appendChild(newRow);
    }
}
window.onload = afficherCookies;
// genere le trableau dans accueil.html


