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


document.querySelector("#btnDate").addEventListener("click", function () {
  afficher();
})

