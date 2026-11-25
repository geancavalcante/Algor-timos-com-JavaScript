const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const valor = frm.inValor.value;
    const consumo = frm.inConsumo.value;

    const pagar = Math.ceil((consumo / 15)) * 3;

    resp1.innerText = `Valor a ágar R$: ${pagar.toFixed(2)}`
    e.preventDefault()

});