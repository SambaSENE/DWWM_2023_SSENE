let xhr = new XMLHttpRequest();
// on  innitialise notre requete avec open;
xhr.open("GET", "carte.json");
//format json
xhr.responseType = "json";
// on envoie la requete



xhr.send();
//dès que la réponse est reçu...
xhr.onload = function () {
    if (xhr.status != 200) {
        console.log("erreur" + xhr.status + xhr.statusText);
    } else {
        let container = xhr.response;
        for (const [key , value] in container[0]) {
           console.log(key , value);
        }

        // fillTable(container);



    }


}


// let jsonData = [
//     {
//         "id": 1,
//         "name": "Ricko",
//         "description": "The best card",
//         "level": 1,
//         "power": 7,
//         "attack": 11,
//         "armor": 6,
//         "damage": 1845,
//         "mitigation": 18,
//         "played": 499546,
//         "victory": 320499,
//         "defeat": 166596,
//         "draw": 12451
//     }

// ];


