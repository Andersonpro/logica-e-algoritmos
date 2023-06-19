const form = document.querySelector('form');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const resultado = document.querySelector('#resultado');

form.addEventListener('submit', evento => {
    const media = ((Number(nota1.value) + Number(nota2.value) + Number(nota3.value))/3).toFixed(2);
    const res = media >= 7 ? 'Aprovado': 'Reprovado';
    resultado.innerText = `Você foi ${res}, sua média foi ${media}`;
    if(media >= 7) {
        resultado.setAttribute('style', 'color: green');
    }
    else {
        resultado.setAttribute('style', 'color: red');
    }
    
    nota1.value = '';
    nota2.value = '';
    nota3.value = '';
    nota1.focus();
    evento.preventDefault();
})