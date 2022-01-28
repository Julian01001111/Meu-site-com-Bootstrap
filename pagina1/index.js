var total = 3;
var senha = 0

function incrementClick() {
   while (senha==0) {
    senha = prompt('Confirme sua senha.')
}
    if(total>1)
    alert("Otima compra")

    if (total==1)  alert('Você comprou o ultimo, otima compra.');

    if (total==0) 
    alert("Estoque indisponivel")
    if (total>0) updateDisplay(--total);
}
function updateDisplay(val) {
    document.getElementById("vendeu").innerHTML = val;
}