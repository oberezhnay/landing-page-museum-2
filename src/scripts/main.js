'use strict';
let slickInitialized = false;

function initSlick() {
  const width = window.innerWidth;

  if (width < 1280) {
    if (!slickInitialized) {
      $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: width < 768 ? 1 : 2,
        adaptiveHeight: false,
        centerMode: false,
        centerPadding: '60px'
      });
      slickInitialized = true;
    }
  } else {
    if (slickInitialized) {
      $('.slider').slick('unslick');
      slickInitialized = false;
    }
  }
}

window.addEventListener('DOMContentLoaded', function () {
    initSlick();
    $(window).on('resize', initSlick);
  });
