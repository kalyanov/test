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
		.rangeRoundBands([0, width], .1)
		.domain(data.map(function(d) { return d.name; }));

	var getMaxNearestRoundValue = function (val) {
		var max = 1;
		while (max < val) {
			max *= 10;
		}
		return max;
	};

	var yMax = d3.max(data, function(d) { return d.value; });

	var y = d3.scale.log()
		.range([height, 0])
		.domain([.9, getMaxNearestRoundValue(yMax)]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.ticks(10, d3.format("0,.0f"))
		.orient("left");

	var chart = d3.select(".barchart")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	chart.append("g")
		.attr("class", "barchart__axis barchart__axis--x")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	chart.append("g")
		.attr("class", "barchart__axis barchart__axis--y")
		.call(yAxis);

	chart.selectAll(".barchart__bar")
		.data(data)
		.enter().append("rect")
		.attr("class", "barchart__bar")
		.attr("x", function(d) { return x(d.name); })
		.attr("y", function(d) { return y(d.value); })
		.attr("height", function(d) { return height - y(d.value); })
		.attr("width", x.rangeBand());
}


