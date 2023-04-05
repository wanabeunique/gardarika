const gallery = new Swiper('#about__gallery', {
  // configure Swiper to use modules
  // loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  speed: 600,
  breakpoints: {
    1300: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    900:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600:{
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});

const swiper = new Swiper('#feedbacks__swiper', {
  // configure Swiper to use modules
  // loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  speed: 600,
  breakpoints: {
    1300: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    950:{
      slidesPerView: 3,
      spaceBetween: 10,
    },
    800:{
      slidesPerView: 2,
      spaceBetween: 10,
    }
  }
});

