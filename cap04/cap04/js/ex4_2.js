const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino;
    const feminino = frm.inFeminino;
    const altura = frm.inAltura.value;

    if(masculino){
        const pesoIdeal = 22 * Math.pow(altura, 2);
        resp1.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)} Kg`;

    } else if (feminino){
        const pesoIdeal = 21 * Math.pow(altura, 2);
        resp1.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)} Kg`;
    };

    e.preventDefault(e)

});