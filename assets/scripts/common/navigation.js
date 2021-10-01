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
        $('.navigation__mainNav').toggleClass('active')
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

    // Go to Level 2
    $('.navigation__mainNav__nav--item.open-level2menu').on('click', function(){
        var targetMenu = $(this).data('menu')
        $(this).parents('.navigation__mainNav--navBlock').hide()
        $('.navigation__mainNav--navBlock.' + targetMenu).fadeIn()
        $('.navigation__mainNav__newsBlock').fadeIn()
    })

    // Go to Level 3
    $('.navigation__mainNav__nav--item.open-level3menu').on('click', function(){
        var targetMenu = $(this).data('menu')
        var parentMenu = $(this).data('parent')
        $('.navigation__mainNav--navBlock.' + parentMenu).hide()
        $('.navigation__mainNav--navBlock.'+ targetMenu).fadeIn()
    })

    // Back to Level 1
    $('.navigation__mainNav__nav--item.level2parent').on('click', function(){
        $(this).parents('.navigation__mainNav--navBlock.level2menu').hide()
        $('.navigation__mainNav--navBlock.level1Menu').fadeIn()
        $('.navigation__mainNav__newsBlock').hide()
    })

    // Back to Level 2
    $('.navigation__mainNav__nav--item.level3parent').on('click', function(){
        var currentMenu = $(this).data('menu')
        var parentMenu = $(this).data('parent')
        $('.navigation__mainNav--navBlock.' + parentMenu).fadeIn()
        $('.navigation__mainNav--navBlock.' + currentMenu).hide()
    })

})