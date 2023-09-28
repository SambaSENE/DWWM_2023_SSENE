function createOptionJour() {
    let mois = document.querySelector('#mois').value;
    let joursDansMois = 31; 

    if (mois === '2') { 
        joursDansMois = 28; 
    } else if (['4', '6', '9', '11'].includes(mois)) { 
        joursDansMois = 30;
    }

    let selectJour = document.querySelector('#jour');
    selectJour.innerHTML = ''; 

    let option = document.createElement('option');
    option.value = 0;
    option.text = 'jour';
    selectJour.appendChild(option);

    for (let i = 1; i <= joursDansMois; i++) {
        option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectJour.appendChild(option);
    }
}

createOptionJour();

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
            createOptionJour(); 
        }

        selectMois.appendChild(option);
    }
}

createOptionMois();


function valNum(_champ) {
    let chaine = (document.getElementById(_champ).value).toUpperCase();
    var somme = 0;
    console.log(chaine);
    for (let i = 0; i < chaine.length; i++) {
        let charCode = chaine.charCodeAt(i);
        somme += charCode - 64;
       
    }
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

        let pseudo = signe + (nom + prenom);
        document.querySelector('#pseudo').value = pseudo;


        console.log(pseudo)
    }

}


document.querySelector('#prenomUtilisateur').addEventListener('blur', () => {
    calculerPseudo();
});document.querySelector('#nomUtilisateur').addEventListener('blur', () => {
    calculerPseudo();
});
document.querySelector('#mois').addEventListener('change', () => {
    calculerPseudo();
});

function newCookie(_nom ,  _value){
    let dateJour = new Date();
    let dateExpire = new Date(dateJour.getFullYear() , dateJour.getMonth() + 1 , dateJour.getDate());
    dateExpire = dateExpire.toUTCString();
    
    document.cookie = _nom + '=' + _value + '; expires = ' + dateExpire + '; SameSite = lax';   
}

document.querySelector('#valider').addEventListener('click' , ()=>{
    newCookie('nom' ,  document.querySelector('#nomUtilisateur').value);
    window.location.href = 'accueil.html';
});
function nbJrsRestants(_jour , _mois , _annee){
    let dateActu = new Date();
    let annviDate = new Date(dateActu.getUTCFullYear , _mois , _jour);

    let diffTemps = annviDate - dateActu;

    if(diffTemps < 0){
        annviDate = new Date(dateActu.getFullYear() + 1, _mois -1 , _jour);
        diffTemps = annviDate - dateActu;
    }
    let joursRestants = Math.ceil(diffTemps / (1000 * 60 *60 * 24));
    return joursRestants;
    
}
window.onload = function() {
    let nom = getCookie("nom");
    let prenom = getCookie("prenom");
    let jour = getCookie("jour");
    let mois = getCookie("mois");
    let annee = getCookie("annee");
    let pseudo = getCookie("pseudo");

    document.querySelector("#nomUtilisateur").textContent = nom;
    document.querySelector("#prenomUtilisateur").textContent = prenom;
    document.querySelector("#dateNaissance").textContent = `${jour}/${mois}/${annee}`;
    document.querySelector("#pseudo").textContent = pseudo;

    // Calculez le nombre de jours restants jusqu'à l'anniversaire de l'utilisateur
    let joursRestants = nbJrsRestants(jour, mois, new Date().getFullYear());

    // Mettez à jour l'élément HTML avec le nombre de jours restants
    document.querySelector('#nbjoursRestants').textContent = joursRestants;
};
