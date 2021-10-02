$(document).ready(function(){
    var searchOpenHide =  $('.show-search-mobile')
    var searchSectionMobile = $('.header__searchBar')
    var hideSearchMobile = $('.hide-search-mobile')

    searchOpenHide.on('click', function(){
        searchSectionMobile.slideToggle();
        $('.header').toggleClass('shadow')
        // Hide Mobile Nav
        $('.navigation-overlay').removeClass('active')
        $('.navigation').removeClass('active')
        $('.header').find('.line2').removeClass('hidden')
        $('.header').find('.line1, .line3').removeClass('active')
        if($(window).width() < 1200){
            $('body').removeClass('OFHidden')
        }
    })

    hideSearchMobile.on('click', function(){
        searchSectionMobile.slideToggle()
        $('.header').toggleClass('shadow')
        $('body').removeClass('OFHidden')
        $('.desktop-nav').removeClass('visible')
        $('.menuRow--item').removeClass('active')
    })

})