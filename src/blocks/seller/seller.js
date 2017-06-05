$(function () {

	var messager = $('.seller__messager .messager__container');
	var close = $('.seller__messager_hide');

	messager.css('display', 'none');

	close.on('click', function () {
		messager.toggle();
		if (close.text().toLowerCase() === 'chat') {
			close.text('hide');
		} else {
			close.text('chat');
		}

	});
});