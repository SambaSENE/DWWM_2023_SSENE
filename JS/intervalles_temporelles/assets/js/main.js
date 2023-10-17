
// Importation des classes
import { MaDate } from "./MaDate.js";
// Declaration
const inputDateActu = document.getElementById('dateActu');
const inputHeureActu = document.getElementById('heureActu');
const btnValider = document.getElementById('valider');
const dateDuJour = document.getElementById('dateDuJour');
const inputDateInter = document.getElementById('dateInterv');
const btnCalculer = document.getElementById('calculer');
const nbjoursInter = document.getElementById('nbJoursInter');


const btnCalculerInter = document.getElementById('calculer');
const afficherDateInter =  document.getElementById('dateIntervale');


btnValider.addEventListener('click' , ()=>{
    let maDate = new MaDate(inputDateActu.value);
    dateDuJour.innerHTML = 'hello ';
    if (maDate.estDansLePasse()) {
        dateDuJour.innerHTML = `Aujourd'hui nous sommes le <span>` + maDate.returnDate() + `</span> l'heure courante est :  ` + '<span>' + maDate.returnHour() + '</span>';
    }else{
        return false;
    }
    
})

