function afficheJour() {
    let option = document.createElement('option');
    option.value = 0;
    option.text = "choisissez votre jour";
    document.querySelector("#jour").options[0] = option;
    //document.querySelector('#jour').appendChild(option);

    for (let i = 1; i < 32; i++) {
        option = document.createElement('option');
        option.value = i;
        option.text = i;
        document.querySelector('#jour').options[i]=option;

    }

}


document.querySelector('#jour').addEventListener('blur', ()=>{

    afficheJour();
})
    


//createOptionJour();


function createOptionMois() {
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


        if (i === 2) {
            option.selected = true;
        afficheJour();
        }

        selectMois.appendChild(option);
    }
}

createOptionMois();


function valNum(_champ) {
    let chaine = (document.getElementById(_champ).value).toUpperCase();
    var somme = 0;
    for (let i = 0; i < chaine.length; i++) {
        let charCode = chaine.charCodeAt(i);
        somme += charCode - 64;

    }
    // console.log(somme);
    return somme;
}

document.querySelector('#nomUtilisateur').addEventListener('blur', () => {
    valNum('nomUtilisateur');
});
document.querySelector('#prenomUtilisateur').addEventListener('blur', () => {
    valNum('prenomUtilisateur');
});



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
    let jour = document.querySelector('#jour').value;
    if (nomUtilisateur !== '' && prenomUtilisateur !== '' && moisNaissance !== '' && jour !== '') {

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


