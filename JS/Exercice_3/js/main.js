function valNum(maChaine) {
    //maChaine = maChaine.toUpperCase();
    let somme = 0;
    for (let i = 0; i < maChaine.length; i++) {
        const charCode = maChaine.charCodeAt();

        if (charCode >= 65 && charCode <= 90) {
            somme += charCode - 64;
        }


    }
    return somme;
}

// function calculerSigne(moisNaissance) {
//     let signeAstro = ["Capricorne", "Verseau", "Poisson", "Belier", "Taureau", "Gémeaux", "Cancer", "Lion", "Vierge", "Balance", "Scorpion", "Sagittaire"]
//     moisNaissance = document.getElementById(moisNaissance);
//     let date = new Date();
//     moisNaissance = date.getMonth();
//     for (let i = 0; i < signeAstro.length; i++) {
//         if (signeAstro[i] == moisNaissance.value) {
//             return signeAstro[moisNaissance];
//         }
//     }


// }
function calculerSigne(moisNaissance) {
    const signes = ["Capricorne","Verseau","Poisson","Bélier","Taureau","Gémeaux","Cancer","Lion","Vierge","Balance","Scorpion","Sagittaire"];
    return signes[moisNaissance -1]; // A voir pourquoi cette erreur
}

let mois = document.querySelector("#mois");
mois.addEventListener('click', () => {
    calculerSigne(mois.value);

});