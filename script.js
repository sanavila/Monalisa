
let botaoClicado = false;
const imagemDoHeader = document.querySelector("#imagem-rute-lisa");
botaoParaMudarPosicaoDaFoto.addEventListener("click", mudarPosicaoDaFoto);


function mudarPosicaoDaFoto () {
    botaoClicado = !botaoClicado;
    botaoClicado ? imagemDoHeader.classList.add("deixar-foto-reta") :  imagemDoHeader.classList.remove("deixar-foto-reta")
}
