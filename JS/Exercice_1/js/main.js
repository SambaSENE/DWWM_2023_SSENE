function afficher() {
  let dateJour = new Date();
  let annee = dateJour.getFullYear();
  let mois = dateJour.getMonth() + 1;
  let jour = dateJour.getUTCDate();

  mois = (mois < 10) ? '0' + mois : mois;
  jour = (jour < 10) ? '0' + jour : jour;
  let chaineDate = jour + '/' + mois + '/' + annee;


  document.getElementById("date").value = chaineDate;
}
document.querySelector("#btnDate").addEventListener("click",  ()=> {
  afficher();
})


 function afficherHeure(){
  let heureDate = new Date();
  let heure = heureDate.getHours();
  let minute = heureDate.getMinutes();
  let sec = heureDate.getSeconds();

  heure= (heure < 10) ? '0' + heure : heure;
  minute = (minute < 10) ? '0' + minute : minute;
  sec = (sec < 10) ? '0' + sec : sec;

  let currentHours = heure + ' : ' + minute +' : ' +sec;
  document.querySelector("#time").value=currentHours; 
 }
 document.querySelector("#btnTime").addEventListener("click" , () => {
  afficherHeure();
 })
