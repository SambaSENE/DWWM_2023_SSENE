function addCell(tr, text) {

    let td = tr.insertCell();
    td.textContent = text;
    return td;
}
function titleCell(row, text) {

    let cell = document.createElement("th");
    cell.textContent = text;
    row.appendChild(cell);
}
function createCells(row, objet) {
    for (const key in objet) {

        addCell(row, objet[key]);

    }
}
// Création d'une table
let table = document.querySelector('#tableau');

// Création de la ligne d'en-tête
let headerRow = table.insertRow();
titleCell(headerRow, "Colonne 1");
titleCell(headerRow, "Colonne 2");

// Création de la ligne de données
let dataRow = table.insertRow();
let dataObject = { col1: "Donnée 1", col2: "Donnée 2" };
createCells(dataRow, dataObject);

// Ajout de la table au corps du document
document.querySelector('#tableau').appendChild(table);