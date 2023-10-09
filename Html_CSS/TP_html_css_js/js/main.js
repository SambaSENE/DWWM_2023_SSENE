const inputPrenom = document.getElementById('prenomUtilisateur');
const inputAge = document.getElementById('ageUtilisateur');
const btn = document.getElementById('valider');
const resultat = document.getElementById('resultat');
const ageRetraite = 64;
function verifieForm() {
    return (inputPrenom.value.trim() !== '' && inputAge.value !== '');
}

function diteBonjour() {
    return `Bonjour ${inputPrenom.value}, votre âge est ${inputAge.value} ,`
}
function estMajeur() {
    if (inputAge.value > 18) {
        return 'vous êtes majeur';
    } else {

        return 'vous êtes mineur';
    }
}
function estALaRetraite() {
   
    let reste;
    if (inputAge.value > ageRetraite) {

        reste = inputAge.value - ageRetraite;
        return `vous êtes à la retraite depuis ${reste} `;

    } else if (inputAge.value < ageRetraite) {
        
        reste = ageRetraite - inputAge.value;
        return` Il vous reste ${reste} avant la retraite`;

    } else {
        
        return 'Vous prenez votre retraite cette année !';
    }
}


document.addEventListener('click', () => {
    if (verifieForm()) {
        resultat.innerText = diteBonjour() + ' ' + estMajeur() + ' ' + estALaRetraite();
    } else {
        resultat.innerHTML = 'Compléter/corriger le formulaire';
    }
})