// Create a table in your HTML where you want to display the data.
const table = document.createElement('table');
document.body.appendChild(table);

function createHead(value) {
    let th = document.createElement('th'); // Use 'th' for table headers
    th.textContent = value;
    return th;
}

function createBody(value) {
    let td = document.createElement('td'); // Use 'td' for table data cells
    td.textContent = value;
    return td;
}

// Create an XMLHttpRequest to fetch JSON data.
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://arfp.github.io/tp/web/html-css-js/02-cardgame/cardgame.json");
xhr.responseType = 'json';

xhr.onload = () => {
    if (xhr.status != 200) {
        console.log('Erreur' + xhr.status + xhr.statusText);
    } else {
        let container = xhr.response;

        // Create header row
        const headerRowData = Object.keys(container[0]); // Assuming the first object has all the keys
        const headerRow = document.createElement('tr');
        for (const key of headerRowData) {
            const th = createHead(key);
            headerRow.appendChild(th);
        }
        table.appendChild(headerRow);

        for (let i = 0; i < container.length; i++) {
            const rowData = Object.values(container[i]);
            const dataRow = document.createElement('tr');
            for (const value of rowData) {
                const td = createBody(value);
                dataRow.appendChild(td);
            }
            table.appendChild(dataRow);
        }
    }
};

xhr.send();
