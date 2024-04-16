const imagem = document.querySelector("#imagem");
const container = document.querySelector("#container");
const situacao = document.querySelector("#status");
const especie = document.querySelector("#especie");
const origem = document.getElementById('origem');
const url = 'https://rickandmortyapi.com/api/character';

function RickAndMorty(){
    fetch(url,{
        method:'GET',
    })
    .then((reposta) => reposta.json())
    .then((dados)=>{
       imprimirDados(dados)
       console.log(dados)
    })
    .catch(erro => alert(erro))
}

function imprimirDados(dados){
    dados.results.forEach(element => {
    let p = document.createElement('p');
    p.setAttribute('id', element.id);
    p.innerHTML = element.name
    container.appendChild(p)
    
        p.addEventListener('click', () =>{

        imagem.innerHTML = `<img src="https://rickandmortyapi.com/api/character/avatar/${element.id}.jpeg">`   

        situacao.innerHTML = `A situação do personagem: ${element.status}`;

        especie.innerHTML = `A especie do personagem: ${element.species}`;

        origem.innerHTML = `A origem do personagem: ${element.origin.name}`;

        
    });
    });
    
}

RickAndMorty()