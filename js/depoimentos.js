const carouselItem = document.querySelectorAll('.carrossel-item');
const previousButton = document.querySelector('.carrossel-botao.previous');
const nextButton = document.querySelector('.carrossel-botao.next');

let currentItem = 0;

nextButton.addEventListener('click', handleNextSlide)
previousButton.addEventListener('click', handlePreviousSlide)


function handleNextSlide(){
  let ultimoSlide
  const temProximoSlide = carouselItem[currentItem] != carouselItem[carouselItem.length-1]
  // //Validação
  
  if(!temProximoSlide){
    return
  }

  // //Ação
  nextSlide()

  // //Resultado
  if (carouselItem[currentItem] === carouselItem[carouselItem.length-1]){
    ultimoSlide = carouselItem[currentItem]
  }

  if(ultimoSlide){
     //add atribute "disabled"
      nextButton.setAttribute('disabled', true)
      
      document.querySelector('.seta').src = "/img/arrow-right-black.svg"
      
  }
       //remove atribute disabled do previousButton
      previousButton.removeAttribute('disabled')
      document.querySelector('.seta').src = "/img/arrow-left-white.svg"
}

function handlePreviousSlide(){
  let primeiroSlide
const temAnteriorSlide = carouselItem[currentItem] != carouselItem[0]

 //Validação

  if(!temAnteriorSlide){
    return
  }

  // //Ação
  previousSlide()

  // //Resultado
  if (carouselItem[currentItem] === carouselItem[0]){
    primeiroSlide = carouselItem[currentItem]
  }

  if(primeiroSlide){
    // add atribute "disabled"
  previousButton.setAttribute('disabled', true)
  document.querySelector('.seta').src = "/img/arrow-right-black.svg"

  }
   //remove atribute disbled do nextButton
  nextButton.removeAttribute('disabled')
  document.querySelector('.seta').src = "/img/arrow-left-white.svg"
}


function nextSlide(){
  currentItem++
  carouselItem.forEach(item =>{
    item.classList.remove("ativo")
  })
  carouselItem[currentItem].classList.add('ativo')
  carouselItem[currentItem].scrollIntoView({
    behavior: "smooth",
    inline:"start",
    block: "nearest"
  })
}

function previousSlide(){
  currentItem--
  carouselItem.forEach(item =>{
    item.classList.remove("ativo")
  })
  carouselItem[currentItem].classList.add('ativo')
  carouselItem[currentItem].scrollIntoView({
    behavior: "smooth",
    inline:"start",
    block: "nearest"
  })
}