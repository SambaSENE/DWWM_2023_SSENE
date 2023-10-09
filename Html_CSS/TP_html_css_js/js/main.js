// function afficher(_prenom, _age) {
//     _prenom = document.querySelector('#prenom').value;
//     _age = document.querySelector('#age').value;
//     let res = document.querySelector('#resultat');
//     if (_prenom !== ' ' && _age >= 18) {
//         res.innerHTML = 'Prenom ' + _prenom + ' Votre âge est ' + _age;
//         res.innerHTML = 'Vous êtes majeur';

//         console.log('Prenom ' + _prenom + ' Votre âge est ' + _age);
        

//     } else if (_prenom !== ' ' && _age > 0 && _age < 18) {


//         res.innerHTML = 'Prenom ' + _prenom + ' Votre âge est ' + _age;
//         res.innerHTML = 'Vous etes mineur'
//     }

//     else {

//         res.innerHTML = 'Compléter/corriger le formulaire';
//     }
// }
//  function calculerNbJoursRestant(_prenom ,_age){
//     _age = document.querySelector('#age').value;
//     _prenom = document.querySelector('#prenom').value;
//     let res = document.querySelector('#resultat');

//     if (_age == 64 ) {
//       res.innerHTML = _prenom + ' Vous prenez votre retraite cette année !'
//     }else if (_age> 64){
//         let reste = _age - 64;
//         res.innerHTML =  _prenom + ` vous etes à  la retraite depuis${reste} années`;
//     }

//  }

// document.querySelector('#valider').addEventListener('click', () => {
//     afficher('prenom', 'age');
//     calculerNbJoursRestant('prenom' , 'age');
// });

const btnValider = document.getElementById('valider');
const inputPrenom = document.getElementById('prenomUtilisateur');
const inputAge = document.getElementById('ageUtilisateur');
const resultat = document.getElementById('resultat');
function direBonjour(_prenom){
    _prenom = document.querySelector('#prenom').value;
    res.innerHTML = `Bonjour ${_prenom}` ;

}
function calculerMineurMajeur(_prenom , _age){
    _prenom = document.querySelector('#prenomUtilisateur').value;
    _age = document.querySelector('#ageUtilisateur').value;

    if(_prenom !== '' && _age < 18){
        res.innerHTML = `Vote âge ${_age}. vous êtes mineur`;
    }else{
        
        res.innerHTML = `Vote âge ${_age}. vous êtes majeur`;
    }
}

function calculerRestraite(_prenom , _age){
    _prenom = document.querySelector('#prenom').value;
    _age = document.querySelector('#age').value;
    if (_prenom !== '' && _age == 64) {

        res.innerHTML = `${_prenom} est deja à la retraite`;
    } else if(_prenom !== '' && _age == 64){
        let reste = _age - 64;
        res.innerHTML =  _prenom + ` vous etes à  la retraite depuis ${reste} `
    }

}
document.querySelector('#valider').addEventListener('click' , ()=>{
    diteBonjour('prenomUtlisateur');
    calculerMineurMajeur('prenom', 'age');
    calculerRestraite('prenom' , 'age');
})



