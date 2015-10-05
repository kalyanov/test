'use strict';

var isRelease = process.argv.length === 3 ?
		process.argv[2] === 'release' : undefined,
	templateEngine = require('catberry-handlebars'),
	assets = require('catberry-assets'),
	catberry = require('catberry'),
	//TODO: fix config loading
	config = require('./config/environment'),
	cat = catberry.create(config);

config.isRelease = isRelease === undefined ? config.isRelease : isRelease;

assets.register(cat.locator);
templateEngine.register(cat.locator);
cat.build();