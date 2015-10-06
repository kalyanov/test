'use strict';

module.exports = ChartsBarchart;

var d3 = require('d3');

/**
 * Creates new instance of the "charts-barchart" component.
 * @constructor
 */
function ChartsBarchart() {
}

/**
 * Gets data context for template engine.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Data context
 * for template engine.
 */
ChartsBarchart.prototype.render = function () {

};

/**
 * Returns event binding settings for the component.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Binding settings.
 */
ChartsBarchart.prototype.bind = function () {
	this._initBarChart();
};

/**
 * Initialize barchart
 */
ChartsBarchart.prototype._initBarChart = function () {
	var self = this;
	this.$context.getStoreData(/* BarChart */)
		.then(function (data) {
			self._drawChart(data);
		})
}

/**
 * Draw barchart based on data
 * @param data
 */
ChartsBarchart.prototype._drawChart = function (data) {
	var margin = {top: 20, right: 30, bottom: 30, left: 80},
		width = 960 - margin.left - margin.right,
		height = 500 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, width], .3, .1)
		.domain(data.map(function(d) { return d.date; }));

	var getMaxNearestRoundValue = function (val) {
		var max = 1;
		while (max < val) {
			max *= 10;
		}
		return max;
	};

	var yMax = d3.max(data, function(d) { return d.shows; });

	var y = d3.scale.log()
		.range([height, 0])
		.domain([.9, getMaxNearestRoundValue(yMax)]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient('bottom');

	var yAxis = d3.svg.axis()
		.scale(y)
		.ticks(10, d3.format('0,.0f'))
		.orient('left');

	var chart = d3.select('.barchart')
		.attr('width', width + margin.left + margin.right)
		.attr('height', height + margin.top + margin.bottom)
		.append('g')
		.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	chart.append('g')
		.classed('barchart__axis barchart__axis--x', true)
		.attr('transform', 'translate(0,' + height + ')')
		.call(xAxis);

	chart.append('g')
		.classed('barchart__axis barchart__axis--y', true)
		.call(yAxis);

	var barsWrap = chart.append('g')
		.classed('barchart__bars-wrap', true);

	var barGroup = barsWrap.selectAll('g')
		.data(data)
		.enter().append('g')
		.attr('class', 'barchart__bar-group')
		.attr('transform', function(d) { return 'translate(' + x(d.date) + ', 0)'});

	barGroup.selectAll('rect')
		.data(function(d) { return [
			{value: d.shows, type: 'shows'},
			{value: d.clicks, type: 'clicks'}
		]})
		.enter().append('rect')
		.attr('class', function(d) {
			return 'barchart__bar barchart__bar--' + d.type;
		})
		.attr('x', function(d) {
			return d.type === 'clicks' ? x.rangeBand() / 2 + 1 : 0;
		})
		.attr('y', function(d) { return y(d.value); })
		.attr('height', function(d) { return height - y(d.value); })
		.attr('width', x.rangeBand() / 2 - 1 );
}


