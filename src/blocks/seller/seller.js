$(function() {
	var close = $('.seller__messager_hide');
		close.on('click', function() {
		$('.seller__messager .messager__container').toggle();
		if (close.text().toLowerCase() === 'hide') {
			close.text('chat');
		} else {
			close.text('hide');
		}

	});
});