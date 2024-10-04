$('.slide').slick({
    dots: false,
    arrows: true,
    fade: false,
    // autoplay: true,
    autoplaySpeed: 4000,
});

$('.six-slide').slick({
  dots: false,
  arrows: true,
  // autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.slide-seven').slick({
  dots: false,
  arrows: true,
  // autoplay: true,
  // autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
});


$('.js-exciting-exp-slider').slick({
    dots: false,
    arrows: true,
    // autoplay: true,
    // autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});




// go to the top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$('.js-exciting-exp-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
})