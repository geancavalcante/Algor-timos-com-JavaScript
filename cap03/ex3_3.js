const prompt = require("prompt-sync")();
const salario = Number(prompt("Salário: "));
const tempo = Number(prompt("Tempo (anos): "));

const quadrienios = Math.floor(tempo / 4);
const salarioFinal = (salario * (1 + 0.01) ** quadrienios );

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${salarioFinal.toFixed(2)}`);