const formRestaurante = document.querySelector('form');
const precoKg = formRestaurante.querySelector('#precoKg');
const peso = formRestaurante.querySelector('#peso');
const valorTotal = document.querySelector('#valor-a-pagar')
formRestaurante.addEventListener('submit', evento => {
    valorTotal.textContent = `Valor a pagar: R$${Number(precoKg.value) * Number(peso.value)}`;
    precoKg.value = '';
    peso.value = '';
    precoKg.focus();
    evento.preventDefault();
});