let imagemdinamica = document.getElementById ("imagemdinamica")  //variavel do elemento html
let imagens = [
    "imagem1.jpg",
    "imagem2.jpg",    // variavel das imagens 
    "imagem3.jpg"
];
let imagematual = 0; // começa na imagem 1 , variavel da imagem atual 
function trocaimagem() {
    imagematual = (imagematual + 1) % imagens.length;
    imagemdinamica.src = imagens[imagematual] 
    setInterval (trocaimagem , 4000);
    
}
function temapurple() {
    let botao = document.getElementById ("botaoTema")
    let body = document.body;
    body.classList.toggle ("tema-purple")
    if (body.classList.contains("tema-purple" )) {
        botao.innerText = "Modo Classico";
    } else {
        botao.innerText = "Modo Nocturnal Cinzel"
    }
}
