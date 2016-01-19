'use strict';

var Handlebars = require('handlebars');

module.exports = Handlebars.Utils.extend({},
	require('./lib/date'),
	require('./lib/logic'),
	require('./lib/serialization'),
	require('./lib/string'),
	require('./lib/types')
);
