const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) =>{
    const nomeVeiculo = frm.inVeiculo.value;
    const precoVeiculo = frm.inPreco.value;

    const entrada = precoVeiculo / 2;
    const parcelas = entrada / 12;

    resp1.innerText = `Promoção: ${nomeVeiculo}`;
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerHTML = `+12x de R$ ${parcelas.toFixed(2)}`;

    e.preventDefault()

});