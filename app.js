let imagemdinamica = document.getElementById ("imagemdinamica")  //variavel do elemento html
let imagens = [
    "imagem1.jpg",
    "imagem2.jpg",    // ARRAY
    "imagem3.jpg"
];
let imagematual = 0; // começa na imagem 1 , variavel da imagem atual 
function trocaimagem() {
    imagematual = (imagematual + 1) % imagens.length;
    imagemdinamica.src = imagens[imagematual] 
    setInterval (trocaimagem , 4000);   
}
 //chama a função
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
