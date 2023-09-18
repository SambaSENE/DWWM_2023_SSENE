function afficher(){
  let dateJour = new Date();
  let annee = dateJour.getFullYear();
  let mois = dateJour.getFullMonth()+1;
  let jour = dateJour.getFullDate();

  mois = (mois < 10) ? '0' + mois : mois;
  jour = (jour < 10) ? '0' + jour : jour
  let chaineDate = jour +'/' + mois + '/' + annee


}
document.querySelector('#btnDate').addEventListener()


