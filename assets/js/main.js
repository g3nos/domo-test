const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    freeMode: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000
    },
    breakpoints: {
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    },
  });