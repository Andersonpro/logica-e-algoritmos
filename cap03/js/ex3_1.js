import promptSync from 'prompt-sync';

const prompt = promptSync();
const name = prompt('Digite seu nome: ');
console.log(`Bom dia ${name}.`);