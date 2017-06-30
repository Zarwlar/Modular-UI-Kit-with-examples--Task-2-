'use strict'

$(function () {

    var width = 180;
    var animationSpeed = 500;
    var pause = 1500;

    $('.js-market__stuff-container').each(function () {

        var currentSlide = 1;

        var $slider = $('.market__stuff-slider', $(this));
        var $sliderContainer = $slider.find('.market__slides');
        var $slides = $sliderContainer.find('.market__slide');

        function moveNextSlide() {
            (function () {
                if (currentSlide === $slides.length) {
                    $sliderContainer.animate({
                        'margin-left': '+=' + (width * ($slides.length - 1))
                    }, animationSpeed);
                    currentSlide = 1;
                    return;
                }
                if (currentSlide < $slides.length) {
                    $sliderContainer.animate({
                        'margin-left': '-=' + width
                    }, animationSpeed);
                    currentSlide++;
                }
            })();
        }

        function movePrevSlide() {
            (function () {
                if (currentSlide === 1) {
                    $sliderContainer.animate({
                        'margin-left': '-=' + (width * ($slides.length - 1))
                    }, animationSpeed);
                    currentSlide = $slides.length;
                    return;
                }
                $sliderContainer.animate({
                    'margin-left': '+=' + width
                }, animationSpeed);
                currentSlide--;
            })();
        }

        var left_arrow = $('.arrow-button__arrow_left', $(this)).parent();
        var right_arrow = $('.arrow-button__arrow_right', $(this)).parent();

        left_arrow.on('click', function () {
            movePrevSlide();
        })

        right_arrow.on('click', function () {
            moveNextSlide();
        })
    });

    $('.market__helper-link').on('click', function() {
        $('.market__helper').css('display','flex')
        $('.market__helper').draggable();
    })

    $('.market__helper_close').on('click', function() {
        $('.market__helper').css('display','none');
    })

});