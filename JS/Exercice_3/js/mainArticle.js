
function afficherCookies(_nom) {
    let cookies = document.cookie.split(';'); // Obtenir tous les cookies et les séparer
    let tableBody = document.getElementById('cookieTable');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim(); // Supprimer les espaces autour du cookie

        let cookieParts = cookie.split('=');
        if (cookieParts[0] == _nom) {
            return cookieParts[1];
        }
    }

    return 'Cookie non trouvé';
}
function verifierFormulaire() {
    let nomUtilisateur = document.querySelector('#nomUtilisateur').value;
    let prenomUtilisateur = document.querySelector('#prenomUtilisateur').value;
    let anneeNaissance =  document.querySelector('#annee').value;
    let moisNaissance = document.querySelector('#mois').value;
    let jour = document.querySelector('#jour').value;

    // Vérifiez les conditions pour activer/désactiver le bouton
    if (nomUtilisateur !== '' && prenomUtilisateur !== '' && anneeNaissance !== '' && moisNaissance !== '' && jour !== '') {
        document.querySelector('#valider').disabled = false; // Activez le bouton
    } else {
        document.querySelector('#valider').disabled = true; // Désactivez le bouton
    }
}
function nbJoursAnniv()
{
    let cookies = document.cookie;
    for (let i = 0; i < cookies.length; i++) {
        
        let
    }
    
}
// genere le trableau dans accueil.html
// let nom = cookieParts[0];
// let valeur = cookieParts[1];
// ligne 1 
let newRow = document.createElement('tr');
let nomCell = document.createElement('td');
nomCell.textContent = 'Nom utilisateur';
let valeurCell = document.createElement('td');
valeurCell.textContent = afficherCookies('nom');


newRow.appendChild(nomCell);
newRow.appendChild(valeurCell);

document.querySelector('#cookieTable').appendChild(newRow);

// ligne 2
let newRow2 = document.createElement('tr');
let prenomCell = document.createElement('td');
prenomCell.textContent = 'Prenom utilisateur';
let valeurCell2 = document.createElement('td');
valeurCell2.textContent = afficherCookies('prenom');


newRow2.appendChild(prenomCell);
newRow2.appendChild(valeurCell2);

document.querySelector('#cookieTable').appendChild(newRow2);
// ligne  3

let newRow3 = document.createElement('tr');
let dateNaissance = document.createElement('td');
dateNaissance.textContent = 'Nombre de jours restants';
let valeurCell3 = document.createElement('td');

valeurCell3.setAttribute('id', 'dateNaissance');

// // let date = new Date();

// document.querySelector('#jour').addEventListener('change' ,  ()=>{
//     if(verifierFormulaire()){

//         let jour = document.getElementById('jour').value;
//         let mois = document.getElementById('mois').value;
//         let annee = document.getElementById('annee').value;
        
//         console.log( nbJoursAnniv(jour  + mois  + annee));
//     }
// })

// valeurCell3.textContent = nbJoursAnniv(jour +'/' + mois +'/' + annee);



newRow3.appendChild(dateNaissance);
newRow3.appendChild(valeurCell3);
document.querySelector('#cookieTable').appendChild(newRow3);


