'use strict';
module.exports = function(Chart) {
	var defaultConfig = {
		hover: {
			mode: 'single'
		},
		scales: {
			xAxes: [{
				type: 'linear', 
				position: 'bottom',
				id: 'x-axis-1' 
			}],
			yAxes: [{
				type: 'linear',
				position: 'left',
				id: 'y-axis-1'
			}]
		},

		tooltips: {
			callbacks: {
				title: function() {
					return '';
				},
				label: function(tooltipItem) {
					return '(' + tooltipItem.xLabel + ', ' + tooltipItem.yLabel + ')';
				}
			}
		}
	};
	Chart.defaults.scatter = defaultConfig;
	Chart.controllers.scatter = Chart.controllers.line;
	Chart.Scatter = function(context, config) {
		config.type = 'scatter';
		return new Chart(context, config);
	};

};
