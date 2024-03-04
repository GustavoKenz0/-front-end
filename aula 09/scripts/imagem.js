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




document.getElementById('arquivos').addEventListener('change', function(event){
    const arquivo = event.target.files[0];
    const ler = new FileReader();

    ler.onload = function(e){
        const imgURL = e.target.result;
        images.push(imgURL);
        carregarImagem();

    };

    

    ler.readAsDataURL(arquivo)
});