$(function () {
    var $input = $('.js-search__input');
    var $button = $('.js-search__submit');

    $button.on('click', function () {

        $input.addClass('search__input_not-found').addClass('search__input_not-found');
        $input.val('');
        $input.attr('placeholder', 'I\'ve not found what I\'m looking for...');
    })

    $input.on('focusin', function () {
        if (!$input.hasClass('search__input_not-found')) return;
        $input.removeClass('search__input_not-found').removeClass('search__input_not-found');
        $input.attr('placeholder', 'Search');
    });
});