function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("feliz")) {
      image.src = "img/triste.png";
    } else {
      image.src = "img/feliz.jpg";
    }
  }