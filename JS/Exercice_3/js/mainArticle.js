
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
function nbJrsRestants() {
    //let cookies = document.cookie.split(';');
    let dateActu = new Date();

    let jourNaissance = parseInt(afficherCookies('jourNaissance'));
    let moisNaissance = parseInt(afficherCookies('moisNaissance'));
    let anneeNaissance = parseInt(afficherCookies('anneeNaissance'));

    let dateAnniv = new Date(anneeNaissance, moisNaissance - 1, jourNaissance);
    if (dateActu.getDate() == dateAnniv.getDate() && dateActu.getMonth() == dateAnniv.getMonth()) {

        dateAnniv.setFullYear(dateActu.getFullYear());
        diffTemps = dateAnniv - dateActu;
    }
    else if (dateActu < dateAnniv) {

        console.log('la');
        dateAnniv.setFullYear(Math.abs(dateActu.getFullYear()));
        diffTemps = dateAnniv - dateActu;

    }
    else if (dateActu > dateAnniv) {
        dateAnniv.setFullYear(dateActu.getFullYear() + 1);
        diffTemps = dateAnniv - dateActu;

    }
    else {
        diffTemps = dateAnniv - dateActu;

    }

    // Convertir la différence en jours
    let joursRestants = Math.ceil(diffTemps / (1000 * 60 * 60 * 24));

    return joursRestants;
}

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
valeurCell2.textContent = afficherCookies('prenom');
valeurCell3.textContent = nbJrsRestants() + ' ' + 'jours';
newRow3.appendChild(dateNaissance);
newRow3.appendChild(valeurCell3);
document.querySelector('#cookieTable').appendChild(newRow3);


