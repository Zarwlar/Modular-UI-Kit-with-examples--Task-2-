	$(function() {
		$('.percentages').easyPieChart({
			easing: 'easeOutBounce',
			onStep: function(from, to, percent) {
				$(this.el).find('.percentages__percent').text(Math.round(percent));
			}
		});
	});

