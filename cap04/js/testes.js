const pai = document.querySelector('#pai');
const filho = pai.querySelector('#filho');
pai.addEventListener('submit', evento => {
    console.log(filho.value);
    evento.preventDefault();
})