function testeChamps(_champ) {
    var testBool = false;
    var regex = /^[0-9A-F]{2}$/;

    var maChaine = document.querySelector('#' + _champ).value;
    if (regex.test(maChaine)) {
        testBool = true;
    } else {
        document.getElementById(_champ).value = '';
        document.getElementById(_champ).focus();
        console.log('deux caracteres en hexadeciaml svp!!');
    }

    return testBool;

}

function genererCouleurChamp(_champ) {
    if (testeChamps(_champ)== true) {
        let couleur = "#" +
            document.getElementById("rouge").value +
            document.getElementById('vert').value +
            document.getElementById('bleu').value;

            document.body.style.backgroundColor = couleur;
    }
}

document.querySelector('#rouge').addEventListener('blur' ,()=>{
    genererCouleur('rouge');
});
document.querySelector('#vert').addEventListener('blur' ,()=>{
    genererCouleur('vert');
});
document.querySelector('#bleu').addEventListener('blur' ,()=>{
    genererCouleur('bleu');
});  

function genererCouleur(_rouge, _vert, _bleu) {

    let couleur = "#" + _rouge + _vert + _bleu;
    document.body.style.backgroundColor = couleur;
}

document.querySelector('#btnrouge').addEventListener('click',
    () => {
        let rouge = document.querySelector("#rouge").value = "ff";
        let vert = document.querySelector("#vert").value = "00";
        let bleu = document.querySelector('#bleu').value = "00";
        genererCouleur(rouge, vert, bleu);
    });

document.querySelector('#btnvert').addEventListener('click',
    () => {
        let rouge = document.querySelector("#rouge").value = "00";
        let vert = document.querySelector("#vert").value = "ff";
        let bleu = document.querySelector('#bleu').value = "00";
        genererCouleur(rouge, vert, bleu);
    });

document.querySelector('#btnbleu').addEventListener('click',
    () => {
        let rouge = document.querySelector("#rouge").value = "00";
        let vert = document.querySelector("#vert").value = "00";
        let bleu = document.querySelector('#bleu').value = "ff";
        genererCouleur(rouge, vert, bleu);
    });
