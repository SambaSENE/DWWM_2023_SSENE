const table = document.createElement('table');
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
        table.appendChild(headerRow);
        let bodyData = Object.values(container)
        // console.log(bodyData);

        for (const iterator of bodyData) {
            console.log(iterator);
        }
   
            // console.log(container[i]);
            
                
           
            // const dataRow = document.createElement('tr');
            // for (const value of rowData) {
            //     const td = createBody(value);
            //     dataRow.appendChild(td);
            // }
            // table.appendChild(dataRow);
        }
    }


xhr.send();
