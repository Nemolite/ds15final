 // Owl Carousel
$(function() {
   var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    margin: 10,
    loop: true,
    nav: true
  });
});

// slick

// Большое фото
 $('.photo-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  asNavFor: '.photo-array'
});

// аленькие фото
$('.photo-array').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.photo-single',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
        }
      },
       {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },
     
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]

});

 
