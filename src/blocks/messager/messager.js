$(function () {

    $('.js-messager').each(function () {

        $('.js-messager__button-reply', $(this)).on('click', function () {
            var $textarea = $('.messager__textarea textarea', $(this).parent()),
                message = $textarea.val();
            console.log($(this).parent());
            if (message == '') return;

            var $chatlogs = $('.js-messager__chatlogs', $(this).parent().parent());
            $chatlogs.append('<div class="messager__chat messager__chat_self"><div class="messager__message">' + message + '</div></div>');

            $($chatlogs).scrollTop(Number.MAX_SAFE_INTEGER);
            $textarea.val('');

        });
    });


});