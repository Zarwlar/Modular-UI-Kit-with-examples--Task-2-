$(function () {

    var $messager = $('.js-seller-messager .messager');
    var $close = $('.js-seller-messager_hide');

    $messager.css('display', 'none');

    $close.on('click', function () {
        $messager.toggle();
        if ($close.text().toLowerCase() === 'chat') {
            $close.text('hide');
        } else {
            $close.text('chat');
        }

    });
});