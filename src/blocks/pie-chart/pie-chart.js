import Chart from 'chart.js'

$(function () {
	var ctx = document.getElementsByClassName("pie-chart")[0].getContext('2d');
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
				data: [12, 25, 30, 33]
			}]
		},
		options: {
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