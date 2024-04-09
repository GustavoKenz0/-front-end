function modificar(){
    var elemento = document.getElementById("meuElemento");
    elemento.innerHTML = "Kenzo";
}

function colorir(){
    var elemento = document.getElementById("cor");
    elemento.style.color = "blue";
    elemento.style.fontSize = "160px";
}

function pegar(){
    var elemento = document.getElementById('texto');
    var valor = elemento.value;
    conteudo.innerHTML = valor;

}

function esconderTexto() {
    var elemento = document.getElementById('esconder');
    elemento.style.display = 'none'
}
function aparecerElemento(){
    var elemento = document.getElementById('esconder');
    elemento.style.display = ""
}

function removerImg(){
    elemento = document.getElementById('imagem');
    elemento.parentNode.removeChild(elemento);
    
}
function aparecerImg() {
    elemento = document.getElementById('imagem');
    const newImg = document.createElement('img');
    container = document.getElementById('outraImg');
    newImg.src = 'https://i.scdn.co/image/ab67616d0000b2736cb90cd8c9acbe0f05dcd71a';
    container.appendChild(newImg);
}