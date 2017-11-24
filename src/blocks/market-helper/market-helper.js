'use strict'

$(function() {
    $('.js-market-helper__link').on('click', function() {
        $('.market-helper').css('display','flex')
        $('.market-helper').draggable();
    })

    $('.js-market-helper_close').on('click', function() {
        $('.market-helper').css('display','none');
    })
});
