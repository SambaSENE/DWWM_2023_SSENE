function calcul() {
   

    let qte2 = parseFloat(document.querySelector("#qte2").value);
    let prixUnit2 = parseFloat(document.querySelector("#prixunit2").value);
    let sousPrix2 = qte2 * prixUnit2; 
    document.querySelector("#totaux2").value = sousPrix2.toFixed(2);
}

function controle() {
    calcul();
}

