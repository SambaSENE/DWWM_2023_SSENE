function memeProps(obj, source){

  // console.log(Object.keys(source));

  return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  

}


console.log(memeProps({age: 44, taille: 188}, { age: 44, taille: 188 })); // true 
console.log(memeProps({age: 44, taille: 188}, { age: 24, taille: 180 })); // false 
console.log(memeProps({age: 44, taille: 188}, { age: 10, taille: 148 })); // false 



// -----------------  Énoncé ------------------- //

// Créez un programme pour vérifier si le premier objet contient au moins les propriétés du second, et que ces propriétés ont également les mêmes valeurs.
// -----------------  Conseils ------------------- //

// Object.keys()
// every()
// hasOwnProperty()






