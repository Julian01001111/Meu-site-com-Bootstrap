var total = 3;

function incrementClick() {
   if (total>0) updateDisplay(--total);
    if(total>0)
    alert("Otima compra")
    else
    alert('O ultimo acabou de ser vendido.');
    if (total==0) 
    alert("Estoque indisponivel")
}
function updateDisplay(val) {
    document.getElementById("vendeu").innerHTML = val;
}