// function  addCell(tr ,  text){
//     let td = tr.insertCell();
//     td.textContent = text;
//     return td;
// }
// function titleCell(row ,  text){
//     let cell = document.createElement('th');
//     cell.textContent = text
//     row.appendChild(cell);
// }

// function createCell(row , object){
//     for (const key in object) {
//         addCell(row , object[key]);
//     }
// }


// let newRow = document.createElement('tr');
// let nomCell = document.createElement('td');
// nomCell.textContent = 'Nom utilisateur';
// let valeurCell = document.createElement('td');
// valeurCell.textContent = afficherCookies('nom');
// newRow.appendChild(nomCell);
// newRow.appendChild(valeurCell);
// document.querySelector('#cookieTable').appendChild(newRow);

function createHead(row ,key) {
    
    let row = document.createElement('th');
    cell.textContent = key;
    row.appenChild(row)

}
function createBody(row , value){
    let cell = document.createElement('td');
    row.textContent =  value;
    cell.appendChild()
}
// Je  cree une Ojbet XHR

let xhr = new XMLHttpRequest();

// j'initialise la requte avec open()
xhr.open("GET", "https://arfp.github.io/tp/web/html-css-js/02-cardgame/cardgame.json");

// je convertis en formation JSON
xhr.responseType = 'json';
// envoie de la requete 
xhr.send();
// 

// j'affiche des que la reponse est disponible
xhr.onload = () => {
    if (xhr.status != 200) {
        console.log('Erreur' + xhr.status + xhr.statusText);
    } else {
        let container = xhr.response;

        for (const key in container) {
            console.log(container);
           
        }
        // // fillTable(container);
    }
}

