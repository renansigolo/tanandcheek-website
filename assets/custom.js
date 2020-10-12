// JS by Renan Sigolo - https://renansigolo.com/

jQuery(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('header').addClass('scrolled')
    } else {
      $('header').removeClass('scrolled')
    }
  })
})
