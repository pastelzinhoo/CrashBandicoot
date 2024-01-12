
var backgroundAudio = document.getElementById("backgroundAudio");
var akuakuAudio = document.getElementById("akuakuAudio");
var akuakuIcon = document.getElementById("akuakuIcon");

var akuakuPlaying = false;

akuakuIcon.addEventListener("click", function () {
    var newAkuakuAudio = akuakuAudio.cloneNode(true);
    var akuakuPlaying = false;
    newAkuakuAudio.addEventListener("ended", function () {
    akuakuPlaying = false;
    });
    if (!akuakuPlaying) {
        newAkuakuAudio.play();
        akuakuPlaying = true;
    }
});

backgroundAudio.volume = 0.3;

const link = document.getElementById("link");
link.addEventListener("click", (event) => {
    event.preventDefault(); 
    window.alert("Você já está nesta página!");
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio('song/menu.mp3');
  
    // Função para reproduzir o áudio quando o mouse passa sobre o link
    function playAudio() {
      audio.currentTime = 0; // Reiniciar o áudio se já estiver tocando
      audio.play();
    }
  
    // Captura todos os elementos com a classe 'song-nav'
    const songNavLinks = document.querySelectorAll(".song-nav");
  
    // Adicione um evento de mouseover a cada link com a classe 'song-nav'
    songNavLinks.forEach(function (link) {
      link.addEventListener("mouseover", playAudio);
    });
  });

  
