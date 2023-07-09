const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const imagemLogoHeader = document.querySelector(".logo-header");
const botaoAlterarTemaMobile = document.getElementById("botao-alterar-tema-mobile");
const imagemBotaoTrocaDeTemaMobile = document.querySelector(".imagem-botao-mobile");
var modoClaro;

if(sessionStorage.getItem("modo")){
    modoClaro = sessionStorage.getItem("modo");
    modoClaro = (modoClaro === 'true');
}
else {
  modoClaro = true;
}

if(modoClaro === false){
    body.classList.toggle("modo-escuro");
    ativarModoEscuro();
}

botaoAlterarTema.addEventListener("click", () => {
    trocarTema();
});
botaoAlterarTemaMobile.addEventListener("click", () => {
  trocarTema();
});

function trocarTema() {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  modoClaro = !modoClaro;
  sessionStorage.setItem("modo", modoClaro);
  if (modoEscuroAtivo) {
    ativarModoClaro();
  } else {
    ativarModoEscuro();
  }
}

function ativarModoEscuro() {
  imagemBotaoTrocaDeTema.setAttribute("src", "imagens/lua-crescente.png");
  imagemLogoHeader.setAttribute("src", "imagens/logo2-dark-rbg.png");
  imagemBotaoTrocaDeTemaMobile.setAttribute("src", "imagens/lua-crescente.png");
}

function ativarModoClaro() {
  imagemBotaoTrocaDeTema.setAttribute("src", "imagens/ensolarado.png");
  imagemBotaoTrocaDeTemaMobile.setAttribute("src", "imagens/ensolarado-white.png");
  imagemLogoHeader.setAttribute("src", "imagens/logo2-white-rbg.png");
}

