const toggleBtn = document.querySelector('.toggle_btn');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.addEventListener('click', function() {
  dropDownMenu.classList.toggle('show');
});
