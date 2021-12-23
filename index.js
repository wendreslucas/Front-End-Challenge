const botaoMenu = document.querySelector('.item__icone--menu'); // variavel que vai armazenar o botão
const menu = document.querySelector('.menu'); // variável que vai tratar o menu inicial.

botaoMenu.addEventListener('click', () => {
  menu.classList.toggle('menu__lateral--ativo') // função que irá mostrar o menu ativo, "adicionando essa classe no html"
});


const border = document.querySelector('.cartao__conteudo')
const input = document.querySelector('.projeto__cor')

setColor()
input.addEventListener('input', setColor)

function setColor() {
  border.style.background = input.value
}