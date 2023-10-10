const dateNaissance = document.getElementById('dateNaissance');
var btnCalculer = document.getElementById('calculer');
const resultat = document.getElementById('resultat');

var date ;
var heure;

//  traitement
function verifierForm(){
    return (dateNaissance.value !== '');
}


function afficherDateNaissance(){
             date = new Date(dateNaissance.value);
            return date.toLocaleDateString('fr')  ;      
    
} 
function afficherHeure(){
    heure = new Date(dateNaissance.value);
    return heure.toLocaleTimeString();
}

// Affichage
btnCalculer = document.addEventListener('click', () => {
    if (verifierForm()) {
        resultat.innerText = afficherDateNaissance() +' ' + afficherHeure();
    } else {
        resultat.innerText = 'pas ok';
    }
})
