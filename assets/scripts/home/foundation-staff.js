$(document).ready(function(){
    var firstPosition = $('.foundation__nav--list:first-child') 
    var firstProfile = $('.foundation__slides--item:first-child')

    firstPosition.addClass('active')
    firstProfile.addClass('active')

    $('.foundation__nav--list').on('click', function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var profileId = $(this).data('foundation')
        $('#'+profileId).addClass('active')
        $('#'+profileId).siblings().removeClass('active')
    })
})