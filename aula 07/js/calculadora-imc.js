const formulario = document.querySelector('#formulario');


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const peso = Number(inputPeso.value)
    console.log(inputPeso)
    console.log(peso)

    const inputAltura = e.target.querySelector('#altura')
    const altura = Number(inputAltura.value)
    console.log(inputAltura)
    console.log(altura)

    const imc = calcularImc(peso, altura)
    console.log (imc)
    const classificacao = tabelaImc(imc)
    mostrarResultado  (classificacao)
})

function calcularImc(peso, altura){
    let imc = (peso / altura ** 2 );
    return imc.toFixed(2);
}

function mostrarResultado(msg){
    const resultado = document.querySelector("#resultado")
    resultado.innerHTML = msg
}


function tabelaImc(imc){
    const classificacao = ['abaixo do peso', 'peso normal', 'sobrepeso', 'obesidade grau I', 'obesidade grau II', 'obesidade grau III']

    if (imc >= 39.9) return classificacao[5];
    if (imc >= 34.9) return classificacao[4];
    if (imc >= 29.9) return classificacao[3];
    if (imc >= 24.9) return classificacao[2];
    if (imc >= 18.5) return classificacao[1];
    if (imc >= 18.5) return classificacao[1];
    if (imc < 18.5) return classificacao[0];

}

