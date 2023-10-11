import { MaDate } from "./mesClasses/MaDate.js";
import { Signe } from "./mesClasses/Signe.js";
const btnCaluler = document.getElementById('calculer');
const dateNaissance = document.getElementById('dateNaissance');
const resultat = document.getElementById('resultat');

// Affichage

document.getElementById('calculer').addEventListener('click', () => {
    let dayBirth = new Date(dateNaissance.value);
    let signeZodiac = new Signe(dateNaissance.value);
    let madate = new MaDate(dayBirth);
    if (madate.estDansLePasser()) {
        resultat.innerHTML = 'Vous étes né le ';
        resultat.innerHTML += '<span>' + dayBirth.toLocaleDateString('fr') + '</span>';
        resultat.innerHTML += ' à ';
        resultat.innerHTML += '<span>' + dayBirth.toLocaleTimeString('fr') + '</span>';
        resultat.innerHTML += '<br> le temps ecoulé ' +
            '<span>' + madate.dateIntervale() + '</span>' + ' années depuis votre naissance';
        resultat.innerHTML += '<span' + signeZodiac.retournerSigne(dayBirth) + '</span>';

    } else {
        resultat.innerHTML = "Veillez saisir une date dans le passé";
    }
});
