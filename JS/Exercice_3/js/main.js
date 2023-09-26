function valNum(maChaine) {
    maChaine = maChaine.toUpperCase();
    let somme = 0;
    for (let i = 0; i < maChaine.length; i++) {
        let charCode = maChaine.charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
            somme += charCode - 64;
        }
    }
    return somme;
}




function calculerSigne(_moisNaissance) {

    mois = _moisNaissance;
    maChaine = '';
    let signesAstro = ["Capricorne", "Verseau", "Poisson", "Belier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"];

    maChaine = signesAstro[mois];

    return maChaine;

}
function recupMois() {
    dateNaissance = document.querySelector('#dateNaissance').value;
    let date = new Date(dateNaissance);

    let mois = date.getMonth();
    return mois
}
document.querySelector("#dateNaissance").addEventListener('blur', () => {
    console.log(calculerSigne(recupMois()))
})
function formOK() {
    let nom = document.querySelector("#nomUtilisateur").value;
    let prenom = document.querySelector("#prenomUtilisateur").value;
    let jour = document.querySelector("#jour").value;
    let mois = document.querySelector("#mois").value;
    let annee = document.querySelector("#annee").value;

    if (nom !== "" && prenom !== "" && jour !== "" && mois !== "" && annee !== "") {
        return true;
    }
    return false;
}