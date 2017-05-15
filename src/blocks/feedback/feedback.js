$(function () {
	var delay = (function () {
		var timer = 0;
		return function (callback, ms) {
			clearTimeout(timer);
			timer = setTimeout(callback, ms);
		};
	})();

	function Validation(inputName, regexExpression, message) {
		$(`.feedback__${inputName}`).keyup(function (eventObject) {
			delay(function () {
				var regex = new RegExp(regexExpression, 'g');
				var input_name = $(`.feedback__${inputName} .feedback__input`);

				if (regex.test(input_name.val())) {
					$(`.feedback__${inputName} .feedback__validation`).addClass(`feedback__validation_ok`).removeClass(`feedback__validation_error`).html(message.ok);
				} else
				if (input_name.val() === '') {
					$(`.feedback__${inputName} .feedback__validation`).removeClass(`feedback__validation_error feedback__validation_ok`);
				} else {
					$(`.feedback__${inputName} .feedback__validation`).addClass(`feedback__validation_error`).removeClass(`feedback__validation_ok`).html(message.error);
				}
				console.log(input_name);
			}, 600);
		});
	}

	Validation('name', '^[a-zA-Zа-яА-Я ]+$', {
		ok: 'thanks!',
		error: 'error'
	});
	Validation('email', '.+@.+\..+', {
		ok: 'thanks!',
		error: 'error'
	});

})