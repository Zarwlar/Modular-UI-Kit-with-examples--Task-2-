'use strict'

$(function() {
    $('.js-market__helper-link').on('click', function() {
        $('.market__helper').css('display','flex')
        $('.market__helper').draggable();
    })

    $('.js-market__helper_close').on('click', function() {
        $('.market__helper').css('display','none');
    })
});
