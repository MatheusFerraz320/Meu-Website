let imagemDinamica = document.getElementById("imagemDinamica"); 
let imagens = [
    "imagem1.jpg",
    "imagem2.jpeg", //ARRAY
    
];

let imagematual = 0; // começa na imagem 1

function trocaimagem() {
    imagematual = (imagematual + 1) % imagens.length;
    imagemDinamica.src = imagens[imagematual];
}


setInterval(trocaimagem, 5000);

 
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
