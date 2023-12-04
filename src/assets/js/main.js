const swiper = new Swiper(".experiences", {
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  // Optional parameters
  direction: "horizontal",
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 3
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
