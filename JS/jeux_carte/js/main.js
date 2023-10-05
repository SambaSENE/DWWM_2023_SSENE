let table = document.createElement('table');
document.body.appendChild(table);

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
xhr.send();

xhr.onload = () => {
    if (xhr.status !== 200) {
        console.log('Erreur ' + xhr.status + ' ' + xhr.statusText);
    } else {
        let container = xhr.response;

        // Crée une ligne d'en-tête <tr>
        let headerRow = document.createElement('tr');
        if (container.length > 0) {
            let firstItem = container[0];
            for (let key in firstItem) {
                // Ajoute un en-tête de tableau <th>
                let th = createHead(key);
                headerRow.appendChild(th);
                console.log('element');

            }
            // Ajoute la ligne d'en-tête au tableau
            table.appendChild(headerRow);
        }

        // Crée des lignes de données pour chaque élément du container
        for (let item of container) {
            let dataRow = document.createElement('tr');
            for (let key in item) {
                if (key == 'description') {
                    // Ajoute une cellule de données <td>
                    let td = createBody(item[key]);
                    dataRow.appendChild(td);
                } else {
                    
                    let td = createBody(item[key]);
                    dataRow.appendChild(td);
                }
            }
            // Ajoute la ligne de données au tableau
            table.appendChild(dataRow);
        }
    }
}
