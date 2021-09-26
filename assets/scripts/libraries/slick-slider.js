$(document).ready(function(){
    // Found Staff Slider in Home Page
    $('.foundation__slides').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        responsive: [
            {
              breakpoint: 759,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 999,
              settings: 'unslick'
            }
          ]
    })
})