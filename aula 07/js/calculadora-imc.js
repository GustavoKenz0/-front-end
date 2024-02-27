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

    alert(imc)

})

function calcularImc(peso, altura){
    let imc = (peso / altura ** 2 );
    return imc.toFixed(2);
}