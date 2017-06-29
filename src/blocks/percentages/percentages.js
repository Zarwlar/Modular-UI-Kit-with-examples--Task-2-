    $(function () {
    $('.js-percentages').each(function() {
        $(this).ClassyLoader({
                width: 100,
                height: 100,
                percentage: $(this).data('value'),
                speed: 20,
                fontSize: '38px',
                diameter: 45,
                lineColor: '#E75735',
                lineWidth: 4,
                showRemaining: false,
                fontFamily: 'LatoWebLight',
                start: 'top'
            });
        });
    })
 