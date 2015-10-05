'use strict';

module.exports = BarChart;

/**
 * Creates new instance of the "d3/BarChart" store.
 * @param {UHR} $uhr Universal HTTP request.
 * @constructor
 */
function BarChart($uhr) {
}

/**
 * Current lifetime of data (in milliseconds) that is returned by this store.
 * @type {number} Lifetime in milliseconds.
 */
BarChart.prototype.$lifetime = 60000;

/**
 * Loads data from remote source.
 * @returns {Promise<Object>|Object|null|undefined} Loaded data.
 */
BarChart.prototype.load = function () {
	return [
		{name: "Jhon",	   value: 1},
		{name: "Locke",    value: 10},
		{name: "Reyes",    value: 100},
		{name: "Ford",     value: 1000},
		{name: "Jarrah",   value: 10000},
		{name: "Shephard", value: 100000},
		{name: "Kwon",     value: 900000}
	];
};