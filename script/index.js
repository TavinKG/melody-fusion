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
    imagemBotaoTrocaDeTema.setAttribute("src", "imagens/lua-crescente.png");
    imagemLogoHeader.setAttribute("src", "imagens/logo2-dark-rbg.png");
    imagemBotaoTrocaDeTemaMobile.setAttribute("src", "imagens/lua-crescente.png");
    imagemLogoHeader.setAttribute("src", "imagens/logo2-dark-rbg.png");
}

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro");
    modoClaro = !modoClaro;
    sessionStorage.setItem("modo", modoClaro);
    if (modoEscuroAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "imagens/ensolarado.png");
    imagemBotaoTrocaDeTemaMobile.setAttribute("src", "imagens/ensolarado-white.png");
    imagemLogoHeader.setAttribute("src", "imagens/logo2-white-rbg.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "imagens/lua-crescente.png");
    imagemBotaoTrocaDeTemaMobile.setAttribute("src", "imagens/lua-crescente.png");
    imagemLogoHeader.setAttribute("src", "imagens/logo2-dark-rbg.png");
  }
});

botaoAlterarTemaMobile.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  modoClaro = !modoClaro;
  sessionStorage.setItem("modo", modoClaro);
  if (modoEscuroAtivo) {
  imagemBotaoTrocaDeTema.setAttribute("src", "imagens/ensolarado.png");
  imagemBotaoTrocaDeTemaMobile.setAttribute("src", "imagens/ensolarado-white.png");
  imagemLogoHeader.setAttribute("src", "imagens/logo2-white-rbg.png");
} else {
  imagemBotaoTrocaDeTema.setAttribute("src", "imagens/lua-crescente.png");
  imagemBotaoTrocaDeTemaMobile.setAttribute("src", "imagens/lua-crescente.png");
  imagemLogoHeader.setAttribute("src", "imagens/logo2-dark-rbg.png");
}
});



