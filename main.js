import {criarCodigo} from './services/criaCodigo.js'

const novoCodigo = document.querySelector('[data-save-button]');
novoCodigo.addEventListener('click', criarCodigo)

carregaCodigo()

