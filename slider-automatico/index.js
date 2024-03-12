var slideIndex = 0;

carrossel()

function carrossel(){
    var x = document.getElementsByClassName("meuslide");

    for(var i = 0; i < x.length; i++){
        x[i].style.display = "none"
    }
    slideIndex++;
    if (slideIndex > x.length) {
        slideIndex = 1;
    }
    x[slideIndex-1].style.display = "block";
    setTimeout(carrossel, 2000);


    console.log(x)

}
