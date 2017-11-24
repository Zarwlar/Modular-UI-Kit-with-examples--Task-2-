$(function () {
    var $r = $('.js-slider-discret');

    $r.rangeslider({
        polyfill: false,
        fillClass: 'rangeslider-discret',
        handleClass: 'rangeslider-discret__handle',
        horizontalClass: 'rangeslider-discret_horizontal',
        onInit: function () {
            var $ruler = $('<div class="rangeslider-discret__scale" />');
            $ruler[0].innerHTML = getScale(this.min, this.max, this.step);
            this.$range.prepend($ruler);
        }
    });


    function getScale(min, max, step) {
        var range = '';
        var i = 0;

        while (i <= max) {
            range += i + ' ';
            i = i + step;
        }
        return range;
    }
});