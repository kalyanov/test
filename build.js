'use strict';

var isRelease = process.argv.length === 3 ?
		process.argv[2] === 'release' : undefined,
	templateEngine = require('catberry-handlebars'),
	catberry = require('catberry'),
	assets = require('catberry-assets'),
	cat = catberry.create({isRelease: isRelease});

// register plugins to the service locator
assets.register(cat.locator);
templateEngine.register(cat.locator);

// now we can build a Catberry bundle
cat.build();