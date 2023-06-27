// Click EVENT

const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function () {
  console.log("click !");
});

const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", function () {
  console.log("click !");
});

// variable de type tableau on les reconnait grace a crochet
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let numero = 0;
// une fonction est un blogue de code qui a un but precis comme ci-desous
// sens et une variable qui va prendre 1 ou -1 lorsque je clic sur les fleches
function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero > slides.length - 1) {
    numero = 0;
  }
  if (numero < 0) {
    numero = slides.length - 1;
  }
  document.querySelector(".banner-img").src =
    "./assets/images/slideshow/" + slides[numero].image;
  document.getElementById("tagLine").innerHTML = slides[numero].tagLine;
}
