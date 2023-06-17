class Garcom {
    #nome
    #ganhoTotal
    #elementoHtml
    #inputValorConta
    #inputSubmit
    constructor(nome) {
        this.#nome = nome;
        this.#ganhoTotal = 0;
        this.#elementoHtml = document.querySelector('#meus-ganhos-totais');
        this.#inputValorConta = document.querySelector('#valor-da-conta');
        this.#inputSubmit = document.querySelector('#submit');
        this.#inputSubmit.addEventListener('click', (event) => {
            event.preventDefault();
            this.#taxaServico(Number(this.#inputValorConta.value));
        });
    }

    #taxaServico(valor) {
        const taxaGarcom = valor * 0.1;
        this.#ganhoTotal += taxaGarcom;
        this.#elementoHtml.innerText = `Total de Ganhos: R$${this.#ganhoTotal.toFixed(2)}`;
        this.#inputValorConta.value = '';
    }
}

const garcom1 = new Garcom('Anderson');