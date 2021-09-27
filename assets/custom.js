// JS by Renan Sigolo - https://renansigolo.com/

jQuery(document).ready(function () {
  const topOfPage = document.body.getBoundingClientRect().top;
  const navHeader = document.querySelector("header");
  const announcementBarHeight =
    document.querySelector(".announcement-bar").offsetHeight;

  if (topOfPage !== 0) {
    navHeader.classList.add("scrolled");
    navHeader.style.top = 0;
  }

  window.addEventListener("scroll", () => {
    if ($(window).scrollTop() > 1) {
      navHeader.classList.add("scrolled");
      navHeader.style.top = 0;
    } else {
      navHeader.classList.remove("scrolled");
      navHeader.style.top = `${announcementBarHeight}px`;
    }
  });

  // Accordion
  let acc = document.querySelectorAll(".accordion");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // let acc2 = document.querySelectorAll('.accordion-2')
  // for (let i = 0; i < acc2.length; i++) {
  //   acc2[i].addEventListener('click', function () {
  //     this.classList.toggle('active')
  //     let panel = this.nextElementSibling
  //     if (panel.style.maxHeight) {
  //       panel.style.maxHeight = null
  //     } else {
  //       panel.style.maxHeight = panel.scrollHeight + 'px'
  //     }
  //   })
  // }

  // $('body').on(
  //   'click',
  //   '[name="checkout"], [name="goto_pp"], [name="goto_gc"]',
  //   function () {
  //     if ($('#agree').is(':checked')) {
  //       $(this).trigger('submit')
  //     } else {
  //       alert(
  //         'You must agree with the terms and conditions of sales to check out.'
  //       )
  //       return false
  //     }
  //   }
  // )
});
