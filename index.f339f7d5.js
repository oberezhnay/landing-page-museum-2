var i=!1;function n(){var n=window.innerWidth;n<1280?i||($(".slider").slick({dots:!0,arrows:!1,infinite:!1,slidesToShow:n<768?1:2,adaptiveHeight:!1,centerMode:!1,centerPadding:"60px"}),i=!0):i&&($(".slider").slick("unslick"),i=!1)}window.addEventListener("DOMContentLoaded",function(){n(),$(window).on("resize",n)});
//# sourceMappingURL=index.f339f7d5.js.map
