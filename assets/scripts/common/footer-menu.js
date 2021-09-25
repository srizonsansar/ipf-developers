$(document).ready(function(){
    
    var footerNavToggle = $('.footer__blockMenu__title.hasDropDown')
    
    if($(window).width() >= 760){
        footerNavToggle.on('click', function(){
        })
    } else {
        footerNavToggle.on('click', function(){
            $(this).next('.footer__blockMenu__list').slideToggle()
            $(this).toggleClass('nav-opened')
        })
    }

})