function lePlusFrequent(tab){

let occurenceMax = 1;
let compteur = 0;
let item;

for(let i = 0; i < tab.length; i++){

  for(let j = i; j < tab.length; j++){
    
    if(tab[i] == tab[j]) {
      compteur++;
    }
    if(occurenceMax<compteur){
      occurenceMax=compteur;
      item = tab[i];
    }

  }
  compteur = 0;
}
  return `Le plus récurent est : ${item}, il est compté ${occurenceMax} fois.`
}


console.log(lePlusFrequent([3, 'a', 'a', 'a','b','b', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])); // Le plus récurent est : a, il est compté 5 fois



// -----------------  Énoncé ------------------- //

// Créez un programme qui analyse l'élément qui est a le plus d'ocurrence dans un tableau

// -----------------  Conseils ------------------- //

// for loop
// if






