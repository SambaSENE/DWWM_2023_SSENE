const partage = arr => {

  const somme = arr => arr.reduce((acc, v) => acc + v, 0);
  
  const especes = arr.sort((a, b) => a - b);
  
  const total = somme(especes);
  
  const partEgale = total / 3;

  if(partEgale % 1 != 0) return false;
  
  const parts = Array(3).fill(partEgale);
  
  for(let i = 0; i < 3; i++) {

      while(parts[i] > 0) {

          let idx = especes.findIndex(esp => esp === parts[i]);

          if(idx === -1) idx = especes.findIndex(esp => esp < parts[i])

          if(idx === -1) return false;

          else parts[i] -= especes.splice(idx, 1);
      }

  }
  
  return true;
  

}


console.log(partage([2,2,2])); // true
console.log(partage([2,1,2])); // false
console.log(partage([1,2,1,1,1])); // true, il peut donner une pièce de deux à un, et les pièces de 1 aux autres
console.log(partage([5,10,1,1,1])); // false, le total ici est 18, on peut certes le diviser par trois, mais pas répartir les billets et pièces de manière équitable !


// -----------------  Énoncé ------------------- //

// Créez un programme qui partage équitablement des pièces et des billets à trois personnes.
// Attention, même si la somme est divisible par trois, il faut prendre en compte le partage des espèces(troisieme exemple).
// On ne peut pas "couper" un billet en deux ou trois !




// -----------------  Conseils ------------------- //

// reduce()
// sort()
// splice()
// fill()
// findIndex()
// Il y a beaucoup de manières de faire ...








