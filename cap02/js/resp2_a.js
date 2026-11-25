const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    const nomeMedicamento = frm.inMedicamento.value;
    const preco = frm.inPreco.value;

    const desconto = Math.floor(preco * 2)

    resp1.innerText = `Promoção de ${nomeMedicamento}`;
    resp2.innerText = `Leve 2 por apenas R$: ${desconto.toFixed(2)}`;

    e.preventDefault()
});