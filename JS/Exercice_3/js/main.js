function valNum(_champ) {
     chaine = document.querySelector('#' + _champ).value.toUpperCase();
    let somme = 0;

    for (let i = 0; i < chaine.length; i++) {
        let charCode = chaine.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            somme += charCode - 64;
        }

    } 
    console.log(chaine);
    return somme;
}

document.querySelector('#nomUtilisateur').addEventListener('blur', () => {
    valNum('nomUtilisateur');
});
document.querySelector('#prenomUtilisateur').addEventListener('blur', () => {
    valNum('prenomUtilisateur');
});
//

//
function calculerSigne(_moisNaissance) {

    let chaine = '';
    let signe = ["Capricorne", "Verseau", "Poisson", "Belier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];
    chaine = signe[_moisNaissance - 1];

    return chaine;
}
function recupMois(_mois) {
    let moisNaissance = document.querySelector('#' + _mois).value;

    return moisNaissance;
}

document.querySelector('#mois').addEventListener('blur', () => {
    console.log(calculerSigne(recupMois('mois')));
});


function verifierFormulaire() {

    let nomUtilisateur = document.querySelector('#nomUtilisateur').value;
    let prenomUtilisateur = document.querySelector('#prenomUtilisateur').value;
    let moisNaissance = document.querySelector('#mois').value;

    if (nomUtilisateur === '' || prenomUtilisateur === '' || moisNaissance === '') {
        return true;
    } else {
        return false;
    }
}


document.querySelector('#nomUtilisateur').addEventListener('blur', () => {
    verifierFormulaire();
});
document.querySelector('#prenomUtilisateur').addEventListener('blur', () => {
    verifierFormulaire();
});
document.querySelector('#mois').addEventListener('blur', () => {
    verifierFormulaire();
});

function calculerPseudo() {
    let nom = document.querySelector('#nomUtilisateur').value;
    let prenom = document.querySelector('#prenomUtilisateur').value;
    let mois = document.querySelector('#mois').value;
    let pseudo = '';
    if (nom !== '' && prenom !== '' && mois !== '') {
        let signe = calculerSigne(mois);
        let valNumNom = valNum(nom);
        let valNumPrenom = valNum(prenom);

        pseudo = signe + (valNumNom + valNumPrenom);
        document.querySelector('#pseudo').value = pseudo;



    }
    return pseudo;
}


document.querySelector('#pseudo').addEventListener('blur', () => {
    calculerPseudo();
});