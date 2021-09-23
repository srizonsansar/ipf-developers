$(document).ready(function(){

    $(window).on('scroll', function(){

        if($(window).scrollTop() >= 100 ){
            $('.header').addClass('active')
        } else {
            $('.header').removeClass('active')
        }

    })

})