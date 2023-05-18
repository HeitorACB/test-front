document.addEventListener("DOMContentLoaded", function() {
  var itensFaq = document.querySelectorAll(".faq-questions-itens");
  
  itensFaq.forEach(function(item) {
    item.addEventListener("click", function() {
      if (item.classList.contains("-is-open")) {
        item.classList.remove("-is-open");
      } else {
        item.classList.add("-is-open");
      }
    });
  });
});
