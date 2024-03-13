let images = []; /*criando uma lista vazia para guardar as imagens */

function carregarImagem(){
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = '';

    images.forEach(imgURL=>{
        const img = document.createElement("img");
        img.src = imgURL;
        galeria.appendChild(img)
    });

}

function clicarImagen() {
    const imagemMiniatura = document.querySelectorAll("#galeria img");

    imagemMiniatura.forEach(imagemMiniatura=>{
        imagemMiniatura.addEventListener('click',function(){
            const imagemGrande = document.createElement('img');
            imagemGrande.src = this.src;
            imagemGrande.classList.add('imagem-grande');
            document.getElementById('imagem-grande-container').innerHTML='';
            document.getElementById('imagem-grande-container').appendChild(imagemGrande);
        })
    })
}


document.getElementById('arquivos').addEventListener('change', function(event){
    const arquivo = event.target.files[0];
    const ler = new FileReader();

    ler.onload = function(e){
        const imgURL = e.target.result;
        images.push(imgURL);
        carregarImagem();
        clicarImagen();

    };

  

    ler.readAsDataURL(arquivo)
});