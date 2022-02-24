const botao = document.querySelector('.btn');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');


botao.addEventListener('click', (event)=> {
    event.preventDefault();
    sidebar.classList.toggle('ativo');
    body.classList.toggle('no-scroll');
});
