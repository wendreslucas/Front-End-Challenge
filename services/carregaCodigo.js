import {Codigo} from '../services/criaCodigo.js'
export const carregaCodigo = () => {
    const lista = document.querySelector('data-list')

    const codigosCadastrados = JSON.parse(localStorage.getItem('codigos')) || []

    codigosCadastrados.forEach((codigo) =>{
        lista.appendChild(Codigo(codigo))

    })

   
    
}