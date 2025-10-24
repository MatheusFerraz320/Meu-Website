let imagemDinamica = document.getElementById("imagemDinamica");
let imagens = ["./imgs/Perfil.jpg", "./imgs/cs50x.jpeg" ,"./imgs/imagem1.png"];

let imagemAtual = 0; 

function trocaimagem() {
  imagemAtual = (imagemAtual + 1) % imagens.length;
  imagemDinamica.src = imagens[imagemAtual];
}

setInterval(trocaimagem, 5000)

function temaPurple() {
  const botao = document.getElementById("botaoTema");
  const body = document.body;

  body.classList.toggle("tema-purple");

  if (body.classList.contains("tema-purple")) {
    botao.innerText = "Tema Clássico";
    localStorage.setItem("tema", "escuro");
  } else {
    botao.innerText = "Tema Escuro";
    localStorage.setItem("tema", "claro");
  }
}
window.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botaoTema");
  const body = document.body;
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    body.classList.add("tema-purple");
    botao.innerText = "Tema Clássico";
  } else {
    botao.innerText = "Tema Escuro";
  }
});
