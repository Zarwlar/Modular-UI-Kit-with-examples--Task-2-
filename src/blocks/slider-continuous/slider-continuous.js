$(function () {
    var valueBubble = '<div class="rangeslider__value-bubble" />';

    function updateValueBubble(pos, value, context) {
        pos = pos || context.position;
        value = value || context.value;
        var $valueBubble = $('.rangeslider__value-bubble', context.$range);
        var tempPosition = pos + context.grabPos;
        var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

        if ($valueBubble.length) {
            if (value <= 3) {
                $valueBubble[0].style.left = Math.ceil(position - 10/value) + 'px';
            } else
            if (value >= context.max - 3) {
                $valueBubble[0].style.left = Math.ceil(position + 10) + 'px';
            } else {
                $valueBubble[0].style.left = Math.ceil(position) + 'px';
            }

            $valueBubble[0].innerHTML = value
        }
    }

    $('.js-slider-continuous').rangeslider({
        polyfill: false,
        fillClass: 'rangeslider-continuous',
        handleClass: 'rangeslider-continuous__handle',
        horizontalClass: 'rangeslider-continuous_horizontal',
        onInit: function () {
            this.$range.append($(valueBubble));
            updateValueBubble(null, null, this);
        },
        onSlide: function (pos, value) {
            updateValueBubble(pos, value, this);
        }
    });
})