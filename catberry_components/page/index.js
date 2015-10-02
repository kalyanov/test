'use strict';

module.exports = Page;

/**
 * Creates new instance of the "page" component.
 * @constructor
 */
function Page() {
}

/**
 * Gets data context for template engine.
 * This method is optional.
 * @returns {Promise<Object>|Object|null|undefined} Data context
 * for template engine.
 */
Page.prototype.render = function () {
	return this.$context.getStoreData(/* Pages */)
		.then(function (data) {
			return data;
		});
};