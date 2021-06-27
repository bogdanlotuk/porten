let mySwiper1 = new Swiper ('.swiper-container.swiper-new-season', {
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
})

let mySwiper2 = new Swiper (".swiper-container.swiper-watches-first", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})

let mySwiper3 = new Swiper (".swiper-container.swiper-watches-second", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})

let mySwiper4 = new Swiper (".swiper-container.swiper-brands", {
  loop: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  },
})