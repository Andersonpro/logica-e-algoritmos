const numero = [10, 7, 25, 30, 11];
const notasAlunos = [7, 10, 5, 8, 4, 3, 1, 9, 10];

//map
const arrayAoQuadrado = numero.map(elemento => elemento*elemento);
console.log(arrayAoQuadrado.join('**'));

//filter
const aprovados = notasAlunos.filter(nota => nota >= 7);
console.log(aprovados);
