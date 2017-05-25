$(function () {

	$('.messager__button-reply').on('click', function () {

		var textarea = $('.messager__textarea textarea'),
			message = textarea.val();

		if (message == '') return;

		var chatlogs = $('.messager__chatlogs');
		chatlogs.append('<div class="messager__chat messager__chat_self"><div class="messager__message">' + message + '</div></div>');

		$(chatlogs).scrollTop(Number.MAX_SAFE_INTEGER);
		textarea.val('');

	})
})