const carouselItem = document.querySelectorAll('.carrossel-item');
const previousButton = document.querySelector('.carrossel-botao.previous');
const nextButton = document.querySelector('.carrossel-botao.next');

let currentItem = 0;

nextButton.addEventListener('click', handleNextSlide);
previousButton.addEventListener('click', handlePreviousSlide);

function handleNextSlide() {
  const temProximoSlide = currentItem < carouselItem.length - 1;

  if (!temProximoSlide) {
    return;
  }

  nextSlide();

  document.querySelector('.seta-direita').src = "build/images/arrow-right.svg";

  if (carouselItem[currentItem] === carouselItem[carouselItem.length - 1]) {
    nextButton.setAttribute('disabled', true);
    document.querySelector('.seta-direita').src = "build/images/arrow-right-black.svg";
    previousButton.removeAttribute('disabled');
  } else {
    nextButton.removeAttribute('disabled');
    previousButton.removeAttribute('disabled');
    document.querySelector('.seta').src = "build/images/arrow-left-white.svg";
  }
}

function handlePreviousSlide() {
  const temAnteriorSlide = currentItem > 0;

  if (!temAnteriorSlide) {
    return;
  }

  previousSlide();

  if (carouselItem[currentItem] === carouselItem[0]) {
    previousButton.setAttribute('disabled', true);
    nextButton.removeAttribute('disabled');
    document.querySelector('.seta').src = "build/images/arrow-left.svg";
  } else {
    previousButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
    document.querySelector('.seta-esquerda').src = "build/images/arrow-left-white.svg";
    document.querySelector('.seta-direita').src = "build/images/arrow-right.svg";
  }

}

function nextSlide() {
  currentItem++;
  carouselItem.forEach((item) => {
    item.classList.remove("ativo");
  });
  carouselItem[currentItem].classList.add('ativo');
  carouselItem[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest"
  });
}

function previousSlide() {
  currentItem--;
  carouselItem.forEach((item) => {
    item.classList.remove("ativo");
  });
  carouselItem[currentItem].classList.add('ativo');
  carouselItem[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest"
  });
}
