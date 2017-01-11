$(document).ready(function(){
  $('.slider-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    pauseOnFocus: false,
    pauseOnHover: false,
    arrows: false
  });
});

$('.slider-nav-container .slider-nav-list li').each( function( i ) {
  $('.slider-nav-container .slider-nav-list .slide-' + i + ' a').click(function(){
    $('.slider-container').slick('slickGoTo', i);
  });
});
