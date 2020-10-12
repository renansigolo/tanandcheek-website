// JS by Renan Sigolo - https://renansigolo.com/

jQuery(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 100) {
      $('header').addClass('scrolled')
    } else {
      $('header').removeClass('scrolled')
    }
  })
})
