$(document).ready(function(){

    // Nav Trigger in Mobile and Open Close Main Nav
    $('.header__midRow__navTrigger').on('click', function(){
        $(this).children('.line2').toggleClass('hidden')
        $(this).children('.line1, .line3').toggleClass('active')
        $('.navigation-overlay').toggleClass('active')
        $('.navigation').toggleClass('active')
        $('body').toggleClass('OFHidden')
        // Hide Search Bar in Mobile
        $('.header__searchBar').slideUp();
        $('.header').removeClass('shadow')
    })

    $('.navigation-overlay').on('click', function(){
        $(this).removeClass('active')
        $('.navigation').removeClass('active')
        $('.header').find('.line2').removeClass('hidden')
        $('.header').find('.line1, .line3').removeClass('active')
        $('body').removeClass('OFHidden')
    })

    // Go to Level 2
    $('.navigation__nav--item.open-level2menu').on('click', function(){
        var targetMenu = $(this).data('menu')
        $(this).parents('.navigation--navBlock').hide()
        $('.navigation--navBlock.' + targetMenu).fadeIn()
        $('.navigation__newsBlock').fadeIn()
    })

    // Go to Level 3
    $('.navigation__nav--item.open-level3menu').on('click', function(){
        var targetMenu = $(this).data('menu')
        var parentMenu = $(this).data('parent')
        $('.navigation--navBlock.' + parentMenu).hide()
        $('.navigation--navBlock.'+ targetMenu).fadeIn()
    })

    // Back to Level 1
    $('.navigation__nav--item.level2parent').on('click', function(){
        $(this).parents('.navigation--navBlock.level2menu').hide()
        $('.navigation--navBlock.level1Menu').fadeIn()
        $('.navigation__newsBlock').hide()
    })

    // Back to Level 2
    $('.navigation__nav--item.level3parent').on('click', function(){
        var currentMenu = $(this).data('menu')
        var parentMenu = $(this).data('parent')
        $('.navigation--navBlock.' + parentMenu).fadeIn()
        $('.navigation--navBlock.' + currentMenu).hide()
    })

    // Desktop Nav
    $('.menuRow--item').on('click', function(){
        var menuClass = $(this).data('desk-menu')
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        $('.desktop-nav').addClass('visible')
        $('.desktop-nav__navData.' + menuClass).show()
        $('.desktop-nav__navData.' + menuClass).siblings().hide()
        $('body').addClass('OFHidden')
        $('.header__searchBar').slideDown()
    })

})