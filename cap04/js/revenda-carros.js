const form = document.querySelector('#form');
const modeloElement = form.querySelector('#modelo');
const precoElement = form.querySelector('#preco');
const carrosCadastradosElement = document.querySelector('#carros-cadastrados');
const filtrarPrecoButton = document.querySelector('#filtrar-preco-button');
const mostrarTodosButton = document.querySelector('#mostrar-todos-button');
const carros = [];
const carrosFormatados = [];
form.addEventListener('submit', evento => {
    adicionaCarro(evento);
    evento.preventDefault();
});

filtrarPrecoButton.addEventListener('click', evento => {
    const valor = Number(prompt('Digite o valor máximo que você pode pagar'));
    limpaListaCarros();
    carros.forEach((carro, i) => {
        if(carro.preco <= valor) {
            const novoElemento = document.createElement('p');
            const novoCarro = `Modelo: ${carros[i].modelo} - Preço: R$${carros[i].preco}`;
            novoElemento.innerText = novoCarro;
            carrosCadastradosElement.appendChild(novoElemento);
        }   
    });
    
    evento.preventDefault();
});

mostrarTodosButton.addEventListener('click', evento => {
    limpaListaCarros();
    const carrosString = carrosFormatados.join('\n\n');
    carrosCadastradosElement.innerText = carrosString;
    evento.preventDefault();
});


function limpaListaCarros() {
    carrosCadastradosElement.innerHTML = '';
}


function adicionaCarro(evento) {
    const modelo = modeloElement.value;
    const preco = Number(precoElement.value).toFixed(2);
    carros.push({modelo, preco});
    const novoElemento = document.createElement('p');
    const novoCarro = `Modelo: ${carros[carros.length -1].modelo} - Preço: R$${carros[carros.length -1].preco}`;
    carrosFormatados.push(novoCarro);
    novoElemento.innerText = novoCarro;
    carrosCadastradosElement.appendChild(novoElemento);
    modeloElement.value = '';
    precoElement.value = '';
    modeloElement.focus();
    console.log(carrosFormatados);
}
