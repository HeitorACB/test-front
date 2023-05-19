const acordionHeader = document.querySelector('.accordion-header')
const acordionContent = document.querySelector('.accordion-content')


acordionHeader.addEventListener('click',()=>{
  acordionHeader.classList.toggle('ativo')
  acordionContent.classList.toggle('ativo')
})

acordionContent.addEventListener('click',()=>{
  acordionHeader.classList.remove('ativo')
  acordionContent.classList.remove('ativo')
})