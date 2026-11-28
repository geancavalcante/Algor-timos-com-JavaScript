const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");

frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const altura = frm.inAltura.value;

    let pesoIdeal;
    if(masculino){
        pesoIdeal = 22 * Math.pow(altura, 2);

    } else{
        pesoIdeal = 21 * Math.pow(altura, 2);
    };

    resp1.innerText = `${nome}: Seu peso ideal é ${pesoIdeal.toFixed(3)} Kg`;

    e.preventDefault(e)

});