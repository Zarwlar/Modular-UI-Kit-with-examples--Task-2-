$(function () {

    $(".js-standart-button").click(function (e) {

        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();

        $(this).prepend("<span class='standart-button_ripple-effect'></span>");


        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        $(".standart-button_ripple-effect").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("standart-button_ripple-animation");

        window.setTimeout(function () {
            $(".standart-button_ripple-effect").remove();
        }, 1000);

    }).on('mousedown', function (event) {
                $(this).addClass('standart-button_pressed');
            })
        .on('mouseup', function (event) {
                $(this).removeClass('standart-button_pressed');
            })
            .on('click', function (event) {
                    if ($(this).hasClass('standart-button_inverted')) {
                            $(this).removeClass('standart-button_inverted');
                    }
                    else {
                        $(this).addClass('standart-button_inverted');
                    }
    });
});
