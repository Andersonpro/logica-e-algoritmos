//operador spread
const x = ['carro', 'lua', 'girassol'];
const y = ['bola', 'chaves', 'teste'];
const z = [...x, ...y];
x.splice(2, 1, ...y);
console.log(z);
console.log(x);

//teste de escopo
if(x[0] === 'carro') {
    var w = 23; // variável funciona fora do escopo, let e const não
}
console.log(w);

//teste de de função
function soma(x, y) {
    console.log(x + y);
}

const subtracao = function(x, y) {
    console.log(x - y);
}

const multiplicacao = (x, y) => {
    console.log(x * y);
}

const num1 = 5;
const num2 = 8;
soma(num1, num2);
try {
    subtracao(num1, num2);
}
catch(erro) {
    console.log('Ocorreu um erro', erro);
}

multiplicacao(num1, num2);

const a = "20";
const b = 10;
console.log(a + b);
console.log(typeof a);

console.log(Number.isInteger(20.5));