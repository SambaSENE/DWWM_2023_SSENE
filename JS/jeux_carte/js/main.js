
const table = document.createElement('table');
document.body.appendChild(table);
table.setAttribute('id', 'tableau');

function createHead(value) {
    let th = document.createElement('th');
    th.textContent = value;
    return th;
}

function createBody(value) {
    let td = document.createElement('td');
    td.textContent = value;
    return td;
}


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://arfp.github.io/tp/web/html-css-js/02-cardgame/cardgame.json");
xhr.responseType = 'json';

xhr.onload = () => {
    if (xhr.status != 200) {
        console.log('Erreur' + xhr.status + xhr.statusText);
    } else {
        let container = xhr.response;


        const headerRowData = Object.keys(container[0]);
        const headerRow = document.createElement('tr');
        for (const key of headerRowData) {
            const th = createHead(key);
            headerRow.appendChild(th);
        }
        for (let i = 1; i < container.length; i++) {
            const element = container[i];
           createBody(element).appendChild(td);
        }
    }

}


function addCell(tr,text){

    let td=tr.insertCell();
    td.textContent=text;
    return td;
} 
function titleCell(row,text) {

    let cell= document.createElement("th");
    cell.textContent=text;
    row.appendChild(cell);
}
function createCells(row, objet) {
    for (const key in objet) {
       
        addCell(row, objet[key]);

    }
}


function fillTable(tabData)
{ var table= document.getElementById("jeu");
//creer le header du tableau;
let thead=table.createTHead();
let headerRow= thead.insertRow();
for (let key in tabData[0]) {

    titleCell(headerRow,key);
  
} 
let tBody= table.createTBody();
for (let i =0; i < tabData.length; i ++) {

    var bodyrow=tBody.insertRow();
    // creer cellules fonction
        createCells(bodyrow,tabData[i]);
    
}


} 





xhr.send();
// On crée un objet XMLHttpRequest XHR;

let xhr=new XMLHttpRequest();
// on  innitialise notre requete avec open;
xhr.open("GET","jeux.json");
//format json
xhr.responseType="json";
// on envoie la requete
xhr.send();
//dès que la réponse est reçu...
xhr.onload=function () {
if (xhr.status!=200) {
    console.log("erreur"+ xhr.status+ xhr.statusText);
} else {
    let container= xhr.response;
    console.log(container);

    fillTable(container); 


    
}


}
>>>>>>> Stashed changes
