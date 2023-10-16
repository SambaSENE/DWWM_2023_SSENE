import { MaDate  } from "./MaDate.js";
const inputDateActu = document.getElementById('dateActu');
const inputHeureActu = document.getElementById('heureActu');
const btnValider =  document.getElementById('valider');
const afficheHeureDate =  document.getElementById('dateHeureJour');

const inputDateInter = document.getElementById('dateInter');
const btnCalculerInter = document.getElementById('calculer');
const afficherDateInter =  document.getElementById('dateIntervale');

btnValider.addEventListener('click' ,  ()=>{
    let dateCourante = 
    afficheHeureDate.innerHTML = MaDate.retourneDateCourante();
});
btnCalculerInter.addEventListener('click' , ()=>{
    console.log('ok');
})