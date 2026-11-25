const prompt = require("prompt-sync")();
const nomeVeiculo = prompt("Veículo: ");
const precoVeiculo = Number(prompt("Preço R$: "));

const entrada = precoVeiculo / 2;
const parcelado = entrada / 12;

console.log(`Promoção: ${nomeVeiculo}`);
console.log(`Entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcelado.toFixed(2)}`);