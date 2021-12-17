const botaoMenu = document.querySelector('.item__icone--menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu-lateral--ativo')
});