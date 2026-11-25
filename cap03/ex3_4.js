const prompt = require("prompt-sync")();
const inPesoRacao = Number(prompt("Peso da Ração (kg): "));
const inConsumoDiario = Number(prompt("Consumo Diário (gr): "));

const pesoGm = (inPesoRacao * 1000);
const duracao = Math.floor(pesoGm / inConsumoDiario);
const sobra = (pesoGm % inConsumoDiario);

console.log(`Duração: ${duracao} dias`);
console.log(`Sobra: ${sobra}gr`);