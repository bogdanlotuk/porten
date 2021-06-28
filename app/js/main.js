document.getElementById('burger').onclick = function() {
  this.classList.toggle('burger--active');
  document.getElementById('navigation').classList.toggle('header__navigation--active');
  document.getElementById('menu').classList.toggle('menu--active');
  document.getElementById('menu-list').classList.toggle('menu-list--active');

  let link = document.getElementsByClassName('menu-list__item-link')
  for (let elem of link) {
    elem.classList.toggle('menu-list__item-link--active');
  }
}







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