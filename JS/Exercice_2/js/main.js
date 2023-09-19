function calcul() {
    let qte = parseFloat(document.querySelector("#qte").value);
    let prixUnit = parseFloat(document.querySelector("#prixunit").value);

    let sousPrix = qte * prixUnit;
    
    document.querySelector("#totaux").value = sousPrix.toFixed(2);
}

function controle() {
    calcul();
}
