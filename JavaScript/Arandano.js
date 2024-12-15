const carosueInner = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
function showSlide(index) {
  if (index >= items.length) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = items.length - 1;
  } else {
    currentIndex = index;
  }
  carosueInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
const botonPrevio = document.querySelector(".carousel-control-prev");
const botonSiguiente = document.querySelector(".carousel-control-next");

function nextSlide() {
  showSlide(currentIndex + 1);
}
function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 3000);
