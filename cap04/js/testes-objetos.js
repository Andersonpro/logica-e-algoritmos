const carros = [];
const modelo = "Ferrari";
const preco = 2000000;

carros.push({modelo, preco});
console.log(carros);

const animais = ['leão', 'coelho', 'cachorro'];
const [animal1, ...outros] = animais;

console.log(...outros);