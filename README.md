# 🦊 Crash Bandicoot Website

## 🟢 Status: Finalizado 📅 Publicado: 011/01/2024 🧍‍♂️ Programador: muuhlirø

####  Decidi fazer um site do meu jogo favorito de infância e com ele testei algumas lógicas em JavaScript, como som nos botões ou eventos onClick.

## Confira como o site ficou!
![2024-01-12-22-46-28-ezgif com-cut](https://github.com/pastelzinhoo/CrashBandicoot/assets/152567365/71c3b021-9c52-4f9e-a871-97e8acd41bf1)



# 👨‍💻 Página Principal:
#### Todo Código da página principal se encontra abaixo.


#### Confira como ele foi feito abaixo: 

```html
<!DOCTYPE html>  <!-- Estrutura Inicial de um código HTML5-->
<html lang="pt-br"> <!-- Definição da linguagem padrão do site-->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>CRASH BANDICOOT</title>  <!-- Titulo do Site -->
    <link rel="stylesheet" href="style.css">    
    <link rel="stylesheet" href="style-nav.css">
    <link rel="shortcut icon" href="imagens/icon.png" type="image/x-icon"> <!--iCONE -->
<body>
<main>
    <div class="container-video">
        <video autoplay muted loop class="video-background"> <!-- Propiedades da tag vídeo-->
            <source src="video/background.mp4" type="video/mp4">    <!-- Conteudo da tag vídeo-->
        </video>
    </div>
    <header>
        <nav class="container-one">
            <div class="icon-menu">
                <ul>
                    <li><img src="imagens/akuaku.png" alt="AkuAku" width="110px" class="icon" id="akuakuIcon"></li> <!-- Mascara Akuku -->
                </ul>
            </div>
            <div class="lista-menu">
                <li>
                    <a href="#" id="link" class="song-nav"><ul>HOME</ul></a>  <!-- OPÇÕES MENU -->
                    <a href="viloes.html" class="song-nav"><ul>VILÕES</ul></a>  <!-- OPÇÕES MENU -->
                    <a href="race.html" class="song-nav"><ul>TEAM RACING</ul></a>   <!-- OPÇÕES MENU -->
                    <a href="family.html" class="song-nav"><ul>FAMÍLIA BANDICOOT</ul></a>   <!-- OPÇÕES MENU -->
                </li>
        </nav>
    </header>
        <article>
            <div class="container-two">
               <div class="sub-container">
               <h1 class="text"><strong>CRASH  BANDICOOT</strong></h1> 
                    <p class="text">Crash Bandicoot é um popular jogo de plataforma desenvolvido pela Naughty Dog, lançado em 1996. Os jogadores controlam Crash, um bandicoot que luta contra o vilão Dr. Neo Cortex e seus capangas, atravessando níveis desafiadores, coletando itens e derrotando inimigos em uma aventura divertida.</p>
               </div>
               <div>
                    <img src="gifs/crash.gif" alt="Crash Bandicoot" width="700px"> <!-- Gif do Crash Bandicoot -->
               </div>
            </div>
        </article>
        <div>
            <audio controls autoplay loop id="backgroundAudio">   <!-- Tag Audio  -->
                <source src="song/themacrash.mp3" type="audio/mpeg">    <!-- Arquivo audio que vai tocar como Background -->
            </audio> 
            <audio id="akuakuAudio">                               <!-- Tag Audio -->
                <source src="song/akuaku.mp3" type="audio/mpeg"> <!-- Conteudo durante o clique no Akuku -->
            </audio>
            <audio>                                                 <!-- Tag Audio -->
                <source src="song/menu.mp3" type="audio/mpeg">      <!-- Conteudo ao o mouse em cima do menu -->
            </audio>
        </div>
        <footer>
            <div>
                
            </div>
        </footer>
</main>
<script src="index.js"></script>     <!-- Chamando o JavaScript -->
</body>
</html>


```

---


# 👨‍💻 Menu de navegação
#### Quando criei os menus, tentei trazer à tona as memórias de quando eu jogava esse game no PlayStation One. Dessa forma, fiz com que, ao passar o mouse sobre alguma opção, ela não apenas mudasse de cor e aumentasse de tamanho, mas também emitisse um som. O som escolhido é o mesmo do menu de pausa do Crash Bandicoot 1, relembrando os momentos nostálgicos do jogo.
![2024-01-12-22-45-06-ezgif com-cut](https://github.com/pastelzinhoo/CrashBandicoot/assets/152567365/5feed09d-e227-467a-9c76-86a7700f8b79)


#### Confira como ele foi feito abaixo: 


---


# 👨‍💻 Mascaras Song
#### Outro segredo escondido dentro do site é que, ao usuário clicar em cima de alguma máscara, um efeito sonoro da máscara será ativado.
![](https://media.discordapp.net/attachments/1194334339954131054/1195548792485851167/image.png?ex=65b46494&is=65a1ef94&hm=bc196a1d0ac43fb183fef3ddfa0a4761291f18b13c617ff396138a2a25af71cb&=&format=webp&quality=lossless&width=1404&height=111)

#### Confira como ele foi feito toda lógica Javascript abaixo: 

```javascript

var backgroundAudio = document.getElementById("backgroundAudio"); // Variavel recebe audio de fundo do site
var akuakuAudio = document.getElementById("akuakuAudio");   // Variavel recebe audio do Akuaku
var akuakuIcon = document.getElementById("akuakuIcon");   // Variavel recebe o Icone do Akuaku

var akuakuPlaying = false;    // Variavel que controla se o audio do akuaku esta sendo reproduzido

akuakuIcon.addEventListener("click", function () {  
    var newAkuakuAudio = akuakuAudio.cloneNode(true);  // Clonamos o evento de audio para ser reproduzido por outras mascaras
    var akuakuPlaying = false;
    newAkuakuAudio.addEventListener("ended", function () {
    akuakuPlaying = false;
    });
    if (!akuakuPlaying) {
        newAkuakuAudio.play();
        akuakuPlaying = true;
    }
});

backgroundAudio.volume = 0.3; // Audio definido em 30%

const link = document.getElementById("link"); // Caso você tente acessar duas vezes a mesma página  
link.addEventListener("click", (event) => {
    event.preventDefault(); 
    window.alert("Você já está nesta página!");   // Mensagem de erro ao tentar acessar duas vezes a mesma página
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

  

```



# 👨‍💻 Página Vilões
#### A página de vilões exibe todos os vilões da franquia Crash Bandicoot, incluindo algumas mudanças no layout, como a máscara do mal e também a música do bônus do vilão do jogo. Além disso, foi adicionado um card dos personagens.
![](https://media.discordapp.net/attachments/1194334339954131054/1195550375470702654/image.png?ex=65b4660d&is=65a1f10d&hm=af2be9f4cd6f3817b8ab7bc20ca8343471ffff7a23aa8c613957dad8d3eccb67&=&format=webp&quality=lossless&width=1269&height=628)

#### Os Cards contem uma animação e a apresentação de cada vilão com sua respectiva foto. 
![2024-01-12-23-14-35-ezgif com-cut](https://github.com/pastelzinhoo/CrashBandicoot/assets/152567365/64d40cd6-c04a-4da0-bb9c-d0024e47c196)



#### A página 'Família' é o oposto da página dos vilões. Enquanto nesta última temos todos os vilões da franquia, nesta página teremos todos os heróis, amigos e familiares de Crash.
![](https://media.discordapp.net/attachments/1194334339954131054/1195554500530950255/image.png?ex=65b469e5&is=65a1f4e5&hm=8b89a3160dabc8ad081a1e58eb9be6b2b47bc7a44ea2289af92d6e98d031a7d3&=&format=webp&quality=lossless&width=1270&height=628)


# 👨‍💻 Página Team Racing
#### Esta página é a única que contém um background de fundo diferente dos demais. Os outros tinham como fundo o trailer do Crash Bandicoot Remaster, enquanto o Crash Team Racing contém o trailer do Crash Team Racing Remaster, e sua música de fundo também é do Crash Team Racing.
![](https://media.discordapp.net/attachments/1194334339954131054/1195555134621614150/image.png?ex=65b46a7c&is=65a1f57c&hm=33fb6fc12377b1fddbd297b8e7e2481ed4de500b1e74e17d5a1b8c73ab501bdf&=&format=webp&quality=lossless&width=1270&height=628)

---

# 👨‍💻 Você pode acessar o site no link abaixo:
#### https://pastelzinhoo.github.io/CrashBandicoot/index.html



