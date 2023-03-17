$(document).ready(function () {
  $('.slide_main').slick({
    // autoplay:true,
    // autoplaySpeed:2000,
  });
  $("#mob_bar_icon").click(function () {
    $(".mobile_menu").slideToggle();
  });
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  //   // You can unslick at a given breakpoint now by adding:
  //   // settings: "unslick"
  //   // instead of a settings object
  // ]

  $('.testimonial_slider_div').slick({
    dots: true,
    arrows:false,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });
});