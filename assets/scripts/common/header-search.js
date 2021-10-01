$(document).ready(function(){
    var searchOpenHide =  $('.show-search-mobile')
    var searchSectionMobile = $('.header__searchBar')
    var hideSearchMobile = $('.hide-search-mobile')

    searchOpenHide.on('click', function(){
        searchSectionMobile.slideToggle();
        $('.header').toggleClass('shadow')
        $('body').removeClass('OFHidden')
        // Hide Mobile Nav
        $('.navigation').removeClass('active')
        $('.header').find('.line2').removeClass('hidden')
        $('.header').find('.line1, .line3').removeClass('active')

    })

    hideSearchMobile.on('click', function(){
        searchSectionMobile.slideToggle()
        $('.header').toggleClass('shadow')
    })

})