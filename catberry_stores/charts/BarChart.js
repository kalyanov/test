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
	var statistics = [{
			date: '2015-09-01',
			shows: 1,
			clicks: 0
		}, {
			date: '2015-09-02',
			shows: 10,
			clicks: 1
		}, {
			date: '2015-09-03',
			shows: 100,
			clicks: 1
		}, {
			date: '2015-09-04',
			shows: 1000,
			clicks: 700
		}, {
			date: '2015-09-05',
			shows: 10000,
			clicks: 1
		}, {
			date: '2015-09-06',
			shows: 100000,
			clicks: 1
		}, {
			date: '2015-09-07',
			shows: 900000,
			clicks: 100000
		}];

	return statistics.map(function (item) {
		item.ctr =  parseFloat(item.clicks / item.shows * 100).toFixed(2);
		item.clicks =  item.clicks || .9;
		item.shows =  item.shows || .9;
		return item;
	});
};