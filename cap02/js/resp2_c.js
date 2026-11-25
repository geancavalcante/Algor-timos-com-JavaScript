const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const desconto = (preco / 2);
    const valor =  desconto + (preco * 2);
    

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valor.toFixed(2)}`;
    resp2.innerText = `O 3º Produto custa apenas R$: ${desconto.toFixed(2)}`;
    
    e.preventDefault()

});