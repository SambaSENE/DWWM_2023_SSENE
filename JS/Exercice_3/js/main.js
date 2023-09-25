function renvoieChaine(maChaine) {
    maChaine = maChaine.toUpperCase();

    let somme = 0;

    for (let i = 0; i < maChaine.length; i++) {
        somme += maChaine.charCodeAt(i) - 64;

    }
    return somme;

}


let saisie = document.querySelector('#nomUtilisateur');
document.querySelector('#nomUtilisateur').addEventListener('blur', () => {
    console.log(renvoieChaine(saisie.value))
});

function calculDateNaissance(){
    let  date = new Date();
}