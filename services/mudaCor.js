
const border = document.querySelector('.cartao__conteudo')
const input = document.querySelector('.projeto__cor')

setColor()
input.addEventListener('input', setColor)

function setColor() {
  border.style.background = input.value
}