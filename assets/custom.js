// JS by Renan Sigolo - https://renansigolo.com/

jQuery(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('header').addClass('scrolled')
    } else {
      $('header').removeClass('scrolled')
    }
  })

  // Accordion
  let acc = document.querySelectorAll(".accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
})
