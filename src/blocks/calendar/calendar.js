$(function() {

		var day = $('.calendar__day');

		var calendar =	$('.calendar_jquery').datepicker({
					altField: day,
					altFormat: "dd",
					firstDay: 1,
					showOtherMonths: true,
					dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
			});

			$('.calendar__button_today').on('click', function() {
		calendar.datepicker('setDate', new Date());
})
})

