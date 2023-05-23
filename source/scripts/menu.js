const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header-nav');

menuButton.addEventListener('click',()=>{
  menu.classList.toggle('ativo');
});

function closeWhenWindowClicked() {
  document.addEventListener('click',(event) => {
    const clickInsideMenu = menu.contains(event.target) || menuButton.contains(event.target);

    if (!clickInsideMenu){
      menu.classList.remove('ativo');
    }
  });
}

function closeMenuWhenScroll(){
  window.addEventListener('scroll', ()=>{
      if(window.scrollY > 0){
      menu.classList.remove('ativo');
      }
  });
}

closeWhenWindowClicked();
closeMenuWhenScroll();
