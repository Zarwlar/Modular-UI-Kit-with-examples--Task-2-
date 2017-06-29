import Chart from 'chart.js'

$(function () {
	var tx = document.getElementsByClassName("js-pie-chart")[0],
	ctx = tx.getContext('2d'),
	txvalue = tx.dataset['value'].split(',');

	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [{
				backgroundColor: [
					"#747474",
					"#e75735",
					"#4eb7a8",
					"#e5e5e5"
				],
				data: txvalue
			}]
		},
		options: {
			hover: {mode: null},
			cutoutPercentage: 65,
			responsive: false,
			segmentShowStroke: false,
			tooltips: {
				enabled: false,
			},
			elements: {
				arc: {
					borderWidth: 0
				}
			}
		}
	});
	$('.pie-chart').removeAttr('style');
});

