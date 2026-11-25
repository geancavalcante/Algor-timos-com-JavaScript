const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
    const nomeFilme = frm.inFilme.value;
    const duracao = Number(frm.inDuracao.value);
    const duracaoHoras = Math.floor(duracao / 60);
    const duracaoMinutos = duracao % 60;
    resp1.innerText = `${nomeFilme}`;
    resp2.innerText = `${duracaoHoras} hora(s) e ${duracaoMinutos} minuto(s)`;
    e.preventDefault(e)

});