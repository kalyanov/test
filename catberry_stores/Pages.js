'use strict';

module.exports = Pages;

/**
 * Creates new instance of the "Pages" store.
 * @constructor
 */
function Pages() {
}

/**
 * Loads data from remote source.
 * @returns {Promise<Object>|Object|null|undefined} Loaded data.
 */
Pages.prototype.load = function () {
	var page = {
		pageType: this.$context.state.pageType
	};

	switch(page.pageType) {
		case 'helloworld':
			page.isHelloWorld = true;
			break;

		case 'barchart':
			page.isBarChart = true;
			break;
	}

	return {page: page};
};