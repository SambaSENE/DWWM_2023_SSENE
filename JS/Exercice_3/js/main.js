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
        option.value = i;
        document.querySelector('#jour').appendChild(option);
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
    let select = document.getElementById("annee");

    // Année de début et de fin
    let anneeDebut = 1900;
    let anneeFin = 2023;

    // Boucle pour ajouter les options pour les années
    for (let annee = anneeDebut; annee <= anneeFin; annee++) {
        let option = document.createElement("option");
        option.text = annee;
        select.add(option);
    }
}
genererAnnees();
function newCookie(_nom, _value) {
    let dateJour = new Date();
    let dateExpire = new Date(Date.now() + 86400000); // en ms 86400000 =>24h
    dateExpire = dateExpire.toUTCString();


    document.cookie = _nom + '=' + _value + '; expires = ' + dateExpire + '; SameSite = lax';
}
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
    let anneeNaissance = document.querySelector('#annee').value;
    let moisNaissance = document.querySelector('#mois').value;
    let jour = document.querySelector('#jour').value;

    // Vérifiez les conditions pour activer/désactiver le bouton
    if (nomUtilisateur !== '' && prenomUtilisateur !== '' && anneeNaissance !== '' && moisNaissance !== '' && jour !== '') {
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





document.querySelector('#valider').addEventListener('click', () => {
    newCookie('nom', document.querySelector('#nomUtilisateur').value);
    newCookie('prenom', document.querySelector('#prenomUtilisateur').value);
    newCookie('jourNaissance', document.querySelector('#jour').value);
    newCookie('moisNaissance', document.querySelector('#mois').value);
    newCookie('anneeNaissance', document.querySelector('#annee').value);

    window.location.href = 'accueil.html';
});



