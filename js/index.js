const botaoPlayPause = document.getElementById("play-pause");
const botaoAvancar = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");
const nomeMusica = document.getElementById("musica");
const musica1 = document.getElementById("musica1");

const numeroMusicas = 11;
let taTocando = 0;
let musicaAtual = 1;

function tocarFaixa() {
    musica1.play();
    botaoPlayPause.classList.remove("bi-play-circle-fill");
    botaoPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
    musica1.pause();
    botaoPlayPause.classList.remove("bi-pause-circle-fill");
    botaoPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar() {
    if( taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function trocarNomeFaixa() {

}

function proximaFaixa() {
   
    if (musicaAtual === numeroMusicas) {
        musicaAtual = 1;
    } else {
        musicaAtual = musicaAtual + 1
    }
    
    
    musica1.src = "./books/terno rei/" + musicaAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
}

function voltarFaixa() {
   
    if (musicaAtual === 1) {
        musicaAtual = numeroMusicas;
    } else {
        musicaAtual = musicaAtual - 1
    }
    
    
    musica1.src = "./books/terno rei/" + musicaAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
}



botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoAvancar.addEventListener("click", proximaFaixa);  
botaoVoltar.addEventListener("click", voltarFaixa);