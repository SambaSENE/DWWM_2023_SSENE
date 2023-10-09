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








xhr.send();