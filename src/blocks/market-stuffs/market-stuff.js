'use strict'

$(function () {

    var width = 180;
    var animationSpeed = 500;

    $('.js-market-stuff__container').each(function () {

        var currentSlide = 1;

        var $slider = $('.market-stuff__slider', $(this));
        var $sliderContainer = $slider.find('.market-stuff__slides');
        var $slides = $sliderContainer.find('.market-stuff__slide');

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

        var $left_arrow = $('.arrow-button__arrow_left', $(this)).parent();
        var $right_arrow = $('.arrow-button__arrow_right', $(this)).parent();

        $left_arrow.on('click', function () {
            movePrevSlide();
        })

        $right_arrow.on('click', function () {
            moveNextSlide();
        })
    });
});