$(function () {
    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    function validation(inputName, regexExpression, message) {
        $(`.feedback__${inputName}`).keyup(function (eventObject) {
            delay(function () {
                var regex = new RegExp(regexExpression, 'g');
                var $input_name = $(`.js-feedback__${inputName} .js-feedback__input`);
                var $input_validation = $(`.js-feedback__${inputName} .js-feedback__validation`);

                if (regex.test($input_name.val())) {
                    $input_validation
                    .addClass(`js-feedback__validation_ok`).addClass('feedback__validation_ok')
                    .removeClass(`js-feedback__validation_error`).removeClass('feedback__validation_error')
                    .html(message.ok);
                } else
                if ($input_name.val() === '') {
                    $input_validation
                    .removeClass(`feedback__validation_error feedback__validation_ok js-feedback__validation_error js-feedback__validation_ok`);
                } else {
                    $input_validation
                    .addClass(`js-feedback__validation_error`).addClass(`feedback__validation_error`)
                    .removeClass(`js-feedback__validation_ok`).addClass(`feedback__validation_ok`)
                    .html(message.error);
                }
            }, 600);
        });
    }

    validation('name', '^[a-zA-Zа-яА-Я ]+$', {
        ok: 'thanks!',
        error: 'error'
    });
    validation('email', '.+@.+\..+', {
        ok: 'thanks!',
        error: 'error'
    });

})