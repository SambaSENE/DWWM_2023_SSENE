function tailleDeLobj(obj){

    let long = 0;

    for(key in obj){
        if(obj.hasOwnProperty(key)) {
            long++;
        }
    }

    return `Longueur de l'objet : ${long}`

}

console.log(tailleDeLobj({nom: 'Julia', taille: 168, age: 35})); //  
 



// -----------------  Énoncé ------------------- //

// Créez un programme pour déterminer la longueur d'un objet, la longueur étant le nombre de propriétés qu'il contient
// -----------------  Conseils ------------------- //


// hasOwnProperty()






