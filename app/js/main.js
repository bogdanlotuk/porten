
$('.history__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });




        
// const vid = document.querySelectorAll('.services__link-video');

// vid.addEventListener('mouseenter', function() {
// vid.play();
// });

// vid.addEventListener('mouseleave', function() {
// vid.pause();
// });

const clip = document.querySelectorAll('.services__link-video');
const clipLink = document.querySelectorAll('.services__link');
// const clipFilter = document.querySelectorAll('.services__link::before')
for (let i = 0; i < clipLink.length; i++){
clipLink[i].addEventListener('mouseenter', 
function(e){
    clip[i].play();
    // clipFilter[i].style.background = 'white';
})
clipLink[i].addEventListener('mouseout', 
function(e){
    clip[i].pause()
})
}

// const clip = document.querySelectorAll('.header__top');
// clip.addEventListener('scroll', function() {
//   clip.style.background = '#fff';
//   clip.style.z-index = 20;
// });