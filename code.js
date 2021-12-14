var botaoSalvar = document.querySelector(".projeto__salvar");

botaoSalvar.addEventListener("click", function (event){
    event.preventDefault();

    var section = document.querySelector("#projetoTeste");
    console.log(section.nomeProjetoTeste.value);
});

