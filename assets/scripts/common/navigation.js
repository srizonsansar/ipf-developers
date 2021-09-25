$(document).ready(function(){

    // Nav Trigger in Mobile and Open Close Main Nav
    $('.header__midRow__navTrigger').on('click', function(){
        $(this).children('.line2').toggleClass('hidden')
        $(this).children('.line1, .line3').toggleClass('active')
        $('.sideNav').toggleClass('active')
        $('body').toggleClass('OFHidden')
        // Hide Search Bar in Mobile
        $('.header__searchBar').slideUp();
        $('.header').removeClass('shadow')
    })

})