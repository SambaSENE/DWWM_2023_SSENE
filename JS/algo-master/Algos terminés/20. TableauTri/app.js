function triTableau(arr) {

  const unique = [...new Set(arr)];
  // console.log(unique);

  const nvTab = [];

  unique.forEach(j => {

      const tabFiltre = arr.filter(i => {
          return i === j;
      })
      nvTab.push(tabFiltre)
  })
  
  return nvTab;

}

console.log(triTableau([2, 1, 2, 1])); // [[2, 2], [1, 1]]
console.log(triTableau([5, 4, 5, 5, 4, 3])); // [[5, 5, 5], [4, 4], [3]]
console.log(triTableau(["b", "a", "b", "a", "c"])); // [["b", "b"], ["a", "a"], ["c"]]


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui regroupe les mêmes valeurs d'un tableau dans des sous-tableaux.
// Retournez tous les sous-tableaux dans un tableau.

// -----------------  Conseils ------------------- //

// new Set()
// filter() 
// Array
// push







