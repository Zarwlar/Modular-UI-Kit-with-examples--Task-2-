$(function() {

        var day = $('.js-calendar__day');

        var calendar =	$('.js-calendar').datepicker({
                    altField: day,
                    altFormat: "dd",
                    firstDay: 1,
                    showOtherMonths: true,
                    dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
            });

            $('.js-calendar__button_today').on('click', function() {
        calendar.datepicker('setDate', new Date());
})
})

