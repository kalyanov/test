'use strict';

// This file contains definitions of rules how location URLs are translated
// to parameters for stores in Catberry application.
//
// Format:
// /some/:parameter[store1,store2,store3]
//
// More details here:
// https://github.com/catberry/catberry/blob/master/docs/index.md#routing

function setPage(pageType) {
	return function (state) {
		if (!state.Pages) {
			state.Pages = {};
		}

		state.Pages.pageType = pageType;

		return state;
	};
}

module.exports = [
	{
		expression: '/helloworld',
		map: setPage('helloworld')
	},
	{
		expression: '/barchart',
		map: setPage('barchart')
	}
];
