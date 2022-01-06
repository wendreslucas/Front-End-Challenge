import {carregaCodigo } from "./carregaCodigo.js"
// função criar código 

export const criarCodigo = (evento) => {
    evento.preventDefault();
    const codigos = JSON.parse(localStorage.getItem('codigos')) || [];
    const codigoDigitado = document.querySelector('[data-div-code]')
    const valor = codigoDigitado.textContent
    console.log(valor)    

    const dados = {
        valor
    }

    localStorage.setItem('codigos', JSON.stringify(dados))
}

export const Codigo = (valor) => {
    const codigo = document.createElement('li')
    const conteudoCodigo = `<li class="teste__lista">${valor}</li>`
    codigo.classList.add('teste__lista')
    codigo.innerHTML = conteudoCodigo

    codigo.appendChild(carregaCodigo)
    return codigo;

    
}