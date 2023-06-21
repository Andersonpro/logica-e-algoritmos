import PromptSync from "prompt-sync";
const prompt = PromptSync();
const alunos = [];
const alunosDestaques = [];
let maior = 0;
let nomeMaior = '';
while (true) {
    const nome = prompt('Digite o nome do aluno: ');
    if(nome == 'fim') {
        break;
    }
    const nota = Number(prompt('Digite a nota: '));
    alunos.push({nome, nota});
    if(nota > maior) {
        maior = nota;
        nomeMaior = nome;
    }
    if(nota >= 7) {
        alunosDestaques.push({nome, nota});
    }
}

console.log(`${nomeMaior} tirou a maior nota da sala`);
console.table(alunosDestaques);
