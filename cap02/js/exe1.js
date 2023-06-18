const elemento = document.querySelector('#teste');
const x = document.createElement('div');
elemento.appendChild(x);
console.log(elemento.innerText);
console.log(elemento.textContent);
console.log(elemento.innerHTML);

let w = ['bolo', 'queijo', 3];
console.log(w.includes('queijo'));
console.log(0 in w);
console.log(w.indexOf('queijo'));

const meuForm = document.querySelector('#myForm');

meuForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log(meuForm.querySelector('#meuValor').value);
})
console.log(20 ** 20);
