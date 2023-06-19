const campoPaciente = document.querySelector('#paciente');
const botaoAdicionar = document.querySelector('#adicionar');
const botaoUrgencia = document.querySelector('#urgencia');
const botaoAtender = document.querySelector('#atender');
const listaEspera = document.querySelector('#lista-espera');
const pacienteEmAtendimento = document.querySelector('#paciente-em-atendimento');
const pessoasNaFila = [];
const elementosPessoasNaFila = [];
botaoAdicionar.addEventListener('click', evento => {
    pessoasNaFila.push(campoPaciente.value);
    elementosPessoasNaFila.push(`<p>${pessoasNaFila.length}. ${campoPaciente.value}</p>`);
    listaEspera.innerHTML = elementosPessoasNaFila.join("");
    campoPaciente.value = '';
    campoPaciente.focus();
    evento.preventDefault();
})

botaoUrgencia.addEventListener('click', evento => {
    if(elementosPessoasNaFila.length == 0) {
        pacienteEmAtendimento.innerText = '';
    }
    else {
        pacienteEmAtendimento.innerText = pessoasNaFila.pop();
    }

    elementosPessoasNaFila.pop();
    listaEspera.innerHTML = elementosPessoasNaFila.join("");
    pacienteEmAtendimento.setAttribute('style', 'background-color: black; color: red; padding: 5px')
    evento.preventDefault();
})

botaoAtender.addEventListener('click', evento => {
    if(elementosPessoasNaFila.length == 0) {
        pacienteEmAtendimento.innerText = '';
    }
    else {
        pacienteEmAtendimento.innerText = pessoasNaFila.shift();
        pacienteEmAtendimento.setAttribute('style', 'background-color: black; color: #90ee90; padding: 5px')
    }

    elementosPessoasNaFila.shift();
    listaEspera.innerHTML = elementosPessoasNaFila.join("");
    evento.preventDefault();
})