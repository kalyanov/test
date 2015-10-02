'use strict';

module.exports = HelloWorld;

/**
 * Creates new instance of "HelloWorld" store.
 * @constructor
 */
function HelloWorld() {

}

/**
 * Loads data from somewhere.
 * @returns {Object} Data object.
 */
HelloWorld.prototype.load = function () {
	return {who: 'World'};
};
