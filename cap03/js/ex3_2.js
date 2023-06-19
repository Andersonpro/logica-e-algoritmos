import promptSync from 'prompt-sync';

const prompt = promptSync();
let pesoRacao = Number(prompt("Digite o peso da ração (Kg): "));
let consumoDiario  = prompt('Digite o consumo diário (g): ');
pesoRacao = pesoRacao * 1000;
console.log(`Duração: ${Math.floor(pesoRacao/consumoDiario)}`);
console.log(`Sobra: ${pesoRacao%consumoDiario}`);