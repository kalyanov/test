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
	// Here you can do any HTTP requests using this._uhr.
	// Please read details here https://github.com/catberry/catberry-uhr.
};