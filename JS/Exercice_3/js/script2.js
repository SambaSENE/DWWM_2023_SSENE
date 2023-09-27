function valNum(_maChaine) {
    var chaine = document.querySelector(('#') + _maChaine).value.toUpperCase();
    console.log(chaine);
    let somme = 0;

    for (let i = 0; i < chaine.length; i++) {
        let charCode = chaine.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            somme += charCode - 64;
        }
    }
    return somme;
}
document.querySelector('#nomUtilisateur').addEventListener('blur',
    () => {
        valNum("nomUtilisateur");
    });
document.querySelector("#prenomUtilisateur").addEventListener('blur',
    () => {
        valNum('prenomUtilisateur');
    });

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
//function calculerSigne(moisNaissance) {
  //  const signes = ["Capricorne","Verseau","Poisson","Bélier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire"];
    //return signes[moisNaissance -1]; // A voir pourquoi cette erreur
//}

//let mois = document.querySelector("#mois");
//mois.addEventListener('click', () => {
 //   calculerSigne(mois.value);

//});




function calculerSigne(_moisNaissance) {

    mois = _moisNaissance;
    _maChaine = '';
    let signesAstro = ["Capricorne", "Verseau", "Poisson", "Belier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];

    maChaine = signesAstro[mois - 1];
    return maChaine;

}
// function recupMois() {
//     dateNaissance = document.querySelector('#dateNaissance').value;
//     let date = new Date(dateNaissance);

//     let mois = date.getMonth();
//     return mois
// }
// document.querySelector("#dateNaissance").addEventListener('blur', () => {
//     console.log(calculerSigne(recupMois()))
// })


function recupMois(_mois) {

    let moisNaissance = document.querySelector('#' + _mois).value;

    return moisNaissance;
}
document.querySelector("#mois").addEventListener('blur', () => {
    console.log(calculerSigne(recupMois('mois')));
});


function formOK() {
    let nom = document.querySelector("#nomUtilisateur").value;
    let prenom = document.querySelector("#prenomUtilisateur").value;


    let jour = document.querySelector("#jour").value;
    let mois = document.querySelector("#mois").value;
    //let annee = document.querySelector("#annee").value;

    if (nom !== "" && prenom !== "" && jour !== "" && mois !== "") {
        return true;

    } else {

        return false;
    }

}
function calculerPseudo() {
    let nom = document.querySelector('#nomUtilisateur').value;
    let prenom = document.querySelector('#prenomUtilisateur').value;
    let mois = document.querySelector('#mois').value;

    if (formOK()){
        
        let pseudo = calculerSigne(mois) + (nom + prenom);
    }

    return pseudo;

}

function creerLabel(idFor, textContent) {
    const label = document.createElement('label');
    label.setAttribute('for', idFor);
    label.textContent = textContent;
    return label;
}

function creerSelect(id, name) {
    const select = document.createElement('select');
    select.setAttribute('name', name);
    select.setAttribute('id', id);
    return select;
}

function creerOption(value, textContent) {
    const option = document.createElement('option');
    option.setAttribute('value', value);
    option.textContent = textContent;
    return option;
}

function ajouterElementsAuConteneur(container, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        container.appendChild(elements[i]);
    }
}

function creerElementsDate() {
    const container = document.getElementById('container');

    const labelJour = creerLabel('jour', 'Jour');
    const selectJour = creerSelect('jour', 'jour');

    for (let i = 1; i <= 31; i++) {
        const option = creerOption(i, i);
        selectJour.appendChild(option);
    }

    const labelMois = creerLabel('mois', 'Mois');
    const selectMois = creerSelect('mois', 'mois');

    const mois = [
        "Mois de naissance",
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
    ];

    for (let i = 0; i < mois.length; i++) {
        const option = creerOption(i, mois[i]);
        selectMois.appendChild(option);
    }

    ajouterElementsAuConteneur(container, labelJour, selectJour, labelMois, selectMois);
}


