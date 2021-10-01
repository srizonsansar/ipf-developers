$(document).ready(function(){

    // Nav Trigger in Mobile and Open Close Main Nav
    $('.header__midRow__navTrigger').on('click', function(){
        $(this).children('.line2').toggleClass('hidden')
        $(this).children('.line1, .line3').toggleClass('active')
        $('.navigation').toggleClass('active')
        $('body').toggleClass('OFHidden')
        // Hide Search Bar in Mobile
        $('.header__searchBar').slideUp();
        $('.header').removeClass('shadow')
        $('.navigation__mainNav').addClass('active')
    })

    // Close Menu on Overlay Click
    $('.navigation').on('click', function(){
        var navLines = $('.header__midRow__navTrigger .line1, .header__midRow__navTrigger .line3')
        var navHiddenLine = $('.header__midRow__navTrigger .line2')
        $(this).removeClass('active')
        $('body').removeClass('OFHidden')
        navLines.removeClass('active')
        navHiddenLine.removeClass('hidden')
        $('.navigation__mainNav').removeClass('active')
    })

    // Disable Parent Div click function in Nav Div
    $('.navigation__mainNav').on('click', function(e) {
        e.stopPropagation();
     });

})