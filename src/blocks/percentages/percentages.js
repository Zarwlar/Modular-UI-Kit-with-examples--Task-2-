    // $(function() {
    //     $('.percentages').easyPieChart({
    //         easing: 'easeOutBounce',
    //         onStep: function(from, to, percent) {
    //             $(this.el).find('.percentages__percent').text(Math.round(percent));
    //         }
    //     });
    // });


    $(function () {
    $('.percentages').each(function() {
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
 